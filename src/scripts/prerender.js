// scripts/prerender.js
// Fix: serve the build folder under the SAME base path (/portfolio) that
// CRA baked into asset URLs via "homepage" in package.json. Otherwise JS/CSS
// 404 locally, the app never mounts, and we capture an empty shell again.

const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");
const handler = require("serve-handler");
const http = require("http");

const BUILD_DIR = path.join(__dirname, "..", "build");
const PORT = 45678;
const BASE_PATH = "/portfolio"; // must match "homepage" in package.json
const ROUTES = ["/"]; // add more routes here if you use react-router, e.g. "/about"

async function run() {
  const server = http.createServer((req, res) => {
    // Strip the base path so it maps correctly onto the build folder's
    // actual file structure, same trick GitHub Pages does in production.
    if (req.url.startsWith(BASE_PATH)) {
      req.url = req.url.slice(BASE_PATH.length) || "/";
    }
    return handler(req, res, { public: BUILD_DIR });
  });
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();

    // Surface any real console/page errors instead of failing silently
    page.on("pageerror", (err) => console.error(`  pageerror on ${route}:`, err.message));
    page.on("requestfailed", (req) =>
      console.error(`  requestfailed on ${route}:`, req.url(), req.failure()?.errorText)
    );

    const url = `http://localhost:${PORT}${BASE_PATH}${route === "/" ? "/" : route}`;
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // give animation libraries (gsap, typewriter-effect, etc.) a moment to mount
    await new Promise((r) => setTimeout(r, 1500));

    const html = await page.content();

    const outPath =
      route === "/"
        ? path.join(BUILD_DIR, "index.html")
        : path.join(BUILD_DIR, route, "index.html");

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    console.log(`✔ Prerendered ${route} -> ${outPath} (${html.length} bytes)`);
    await page.close();
  }

  await browser.close();
  server.close();
}

run().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});