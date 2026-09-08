# Official product packshots

Hub and category-tile photos for LoFric and Navina are **local copies** of Wellspect’s Digizuite assets from [wellspect.se](https://www.wellspect.se/). The clinic companion must not hotlink Digizuite at runtime (GitHub Pages, offline kiosk, and the service worker all need files in this repo).

LoFric® and Navina™ remain Wellspect trademarks. These images are for clinic educational use in this companion app, not a substitute for package artwork or the IFU.

## IllustrationId → file → source

Refresh with `scripts/fetch-product-images.sh`. Query-string resize params are stripped from the saved filenames.

| IllustrationId | Product | Local file | Source URL |
| --- | --- | --- | --- |
| `origo-pack` | LoFric Origo | `public/products/origo-pack.png` | https://www.wellspect.se/globalassets/digizuite/58326-en-aid0058326.png?width=680&quality=80 |
| `primo-pack` | LoFric Primo | `public/products/primo-pack.png` | https://www.wellspect.se/globalassets/digizuite/58357-en-aid0058357.png?width=680&quality=80 |
| `classic-cath` | LoFric classic | `public/products/classic-cath.png` | https://www.wellspect.se/globalassets/digizuite/58350-en-aid0058350.png?width=680&quality=80 |
| `sense-pack` | LoFric Sense | `public/products/sense-pack.png` | https://www.wellspect.se/globalassets/digizuite/58342-en-aid0058342.png?width=680&quality=80 |
| `elle-pack` | LoFric Elle | `public/products/elle-pack.png` | https://www.wellspect.se/globalassets/digizuite/58339-en-aid0058339.png?width=680&quality=80 |
| `hydrokit-pack` | LoFric Hydro-Kit | `public/products/hydrokit-pack.png` | https://www.wellspect.se/globalassets/digizuite/58345-en-aid0058345.png?width=680&quality=80 |
| `navina-smart` | Navina Smart | `public/products/navina-smart.png` | https://www.wellspect.se/globalassets/digizuite/58371-en-aid0058371.png?width=680&quality=80 |
| `navina-classic` | Navina Classic | `public/products/navina-classic.png` | https://www.wellspect.se/globalassets/digizuite/58365-en-aid0058365.png?width=680&quality=80 |

Anatomy, film, swan, contact, bowel, and snabbguide step icons stay as SVG stubs in `src/components/illustrations/Illustrations.tsx`. After replacing files, bump `CACHE_NAME` in `public/sw.js` so kiosk devices pick up the new binaries.
