const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");

const PORT = 3100;
const URL = `http://localhost:${PORT}`;

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status === 200) return true;
    } catch {}
    await wait(300);
  }
  throw new Error("Server did not start in time");
}

async function main() {
  const outDir = process.argv[2] || "/home/claude/work/screenshots";
  require("fs").mkdirSync(outDir, { recursive: true });

  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: path.resolve(__dirname, ".."),
    stdio: "pipe",
  });

  server.stdout.on("data", (d) => process.stdout.write(`[server] ${d}`));
  server.stderr.on("data", (d) => process.stderr.write(`[server-err] ${d}`));

  try {
    await waitForServer(URL);
    await wait(1000);

    const browser = await chromium.launch();

    // Desktop viewport, full page
    const desktopPage = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    });
    await desktopPage.goto(URL, { waitUntil: "networkidle" });
    await wait(800);
    await desktopPage.screenshot({
      path: path.join(outDir, "desktop-fullpage.png"),
      fullPage: true,
    });
    await desktopPage.screenshot({
      path: path.join(outDir, "desktop-viewport.png"),
      fullPage: false,
    });

    // Mobile viewport
    const mobilePage = await browser.newPage({
      viewport: { width: 390, height: 844 },
    });
    await mobilePage.goto(URL, { waitUntil: "networkidle" });
    await wait(800);
    await mobilePage.screenshot({
      path: path.join(outDir, "mobile-fullpage.png"),
      fullPage: true,
    });

    await browser.close();
    console.log("Screenshots saved to", outDir);
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
