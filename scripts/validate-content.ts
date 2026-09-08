import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { allRoutes, contentMapEntries, resolvePage } from "../src/content/catalog";
import { PRODUCT_PACKSHOTS } from "../src/content/productPackshots";

const routes = allRoutes();
const map = contentMapEntries();

if (routes.length < 20) {
  throw new Error(`Expected a richer content map, got ${routes.length} routes`);
}

const required = [
  "/",
  "/info/",
  "/rik-man/",
  "/rik-man/origo/",
  "/rik-man/origo/snabbguide/",
  "/rik-man/origo-sleeve/snabbguide/",
  "/rik-kvinnor/",
  "/navina/",
];

for (const path of required) {
  const slug = path.split("/").filter(Boolean);
  if (!resolvePage(slug)) {
    throw new Error(`Missing required route ${path}`);
  }
}

const maleGuide = resolvePage(["rik-man", "origo-sleeve", "snabbguide"]);
if (maleGuide?.type !== "guide" || maleGuide.guide.pages.length < 2) {
  throw new Error("Origo Sleeve guide must be a multi-page snabbguide");
}

const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

for (const [id, publicPath] of Object.entries(PRODUCT_PACKSHOTS)) {
  const file = join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  if (!existsSync(file)) {
    throw new Error(`Missing official packshot for ${id} at ${file}`);
  }
  const header = readFileSync(file).subarray(0, 8);
  if (!header.equals(pngMagic)) {
    throw new Error(`Packshot for ${id} is not a PNG: ${file}`);
  }
}

console.log(`Validated ${routes.length} routes and ${Object.keys(PRODUCT_PACKSHOTS).length} product packshots`);
for (const entry of map.slice(0, 8)) {
  console.log(`- ${entry.path}  ${entry.label}`);
}
