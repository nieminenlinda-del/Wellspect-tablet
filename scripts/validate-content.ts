import { allRoutes, contentMapEntries, resolvePage } from "../src/content/catalog";

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

console.log(`Validated ${routes.length} routes`);
for (const entry of map.slice(0, 8)) {
  console.log(`- ${entry.path}  ${entry.label}`);
}
