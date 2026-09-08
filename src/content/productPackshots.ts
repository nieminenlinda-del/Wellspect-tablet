import type { IllustrationId } from "./types";

/** Official Wellspect Digizuite packshots hosted locally under `public/products/`. */
export const PRODUCT_PACKSHOTS = {
  "origo-pack": "/products/origo-pack.png",
  "primo-pack": "/products/primo-pack.png",
  "classic-cath": "/products/classic-cath.png",
  "sense-pack": "/products/sense-pack.png",
  "elle-pack": "/products/elle-pack.png",
  "hydrokit-pack": "/products/hydrokit-pack.png",
  "navina-smart": "/products/navina-smart.png",
  "navina-classic": "/products/navina-classic.png",
} as const satisfies Partial<Record<IllustrationId, string>>;

export type ProductPackshotId = keyof typeof PRODUCT_PACKSHOTS;

export function isProductPackshot(id: IllustrationId): id is ProductPackshotId {
  return id in PRODUCT_PACKSHOTS;
}
