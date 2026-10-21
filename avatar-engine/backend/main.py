from pathlib import Path
from uuid import uuid4

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image, UnidentifiedImageError
import io

BASE_DIR = Path(__file__).resolve().parent
UPLOAD_DIR = BASE_DIR / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

app = FastAPI(title="Ritika Avatar Engine API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MAX_BYTES = 10 * 1024 * 1024
ALLOWED_FORMATS = {"JPEG", "PNG", "WEBP"}


@app.get("/health")
def health():
    return {"status": "ok", "engine": "ritika-avatar-engine"}


@app.post("/api/v1/avatars")
async def create_avatar(image: UploadFile = File(...)):
    if image.content_type not in {
        "image/jpeg", "image/png", "image/webp"
    }:
        raise HTTPException(415, "Upload a JPEG, PNG, or WebP image.")

    data = await image.read(MAX_BYTES + 1)

    if len(data) > MAX_BYTES:
        raise HTTPException(413, "Image must be 10 MB or smaller.")

    try:
        with Image.open(io.BytesIO(data)) as source:
            if source.format not in ALLOWED_FORMATS:
                raise HTTPException(415, "Unsupported image format.")
            source.verify()

        with Image.open(io.BytesIO(data)) as source:
            rgb = source.convert("RGB")
            width, height = rgb.size
            if width < 128 or height < 128:
                raise HTTPException(400, "Image must be at least 128x128.")

            avatar_id = str(uuid4())
            path = UPLOAD_DIR / f"{avatar_id}.png"
            rgb.save(path, format="PNG")

    except UnidentifiedImageError:
        raise HTTPException(400, "The uploaded file is not a valid image.")

    return {
        "avatar_id": avatar_id,
        "status": "image_received",
        "width": width,
        "height": height,
        "message": "Image saved. 3D generation is not connected yet."
    }
