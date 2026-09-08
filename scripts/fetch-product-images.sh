#!/usr/bin/env bash
# Download official Wellspect Digizuite packshots into public/products/.
# See docs/PRODUCT-IMAGES.md for IllustrationId mapping.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
dest="$root/public/products"
mkdir -p "$dest"

ua="Mozilla/5.0 (compatible; Wellspect-tablet clinic companion)"

download() {
  local filename="$1"
  local url="$2"
  curl -fL --retry 4 --retry-delay 4 -A "$ua" -o "$dest/$filename" "$url"
}

download origo-pack.png "https://www.wellspect.se/globalassets/digizuite/58326-en-aid0058326.png?width=680&quality=80"
download primo-pack.png "https://www.wellspect.se/globalassets/digizuite/58357-en-aid0058357.png?width=680&quality=80"
download classic-cath.png "https://www.wellspect.se/globalassets/digizuite/58350-en-aid0058350.png?width=680&quality=80"
download sense-pack.png "https://www.wellspect.se/globalassets/digizuite/58342-en-aid0058342.png?width=680&quality=80"
download elle-pack.png "https://www.wellspect.se/globalassets/digizuite/58339-en-aid0058339.png?width=680&quality=80"
download hydrokit-pack.png "https://www.wellspect.se/globalassets/digizuite/58345-en-aid0058345.png?width=680&quality=80"
download navina-smart.png "https://www.wellspect.se/globalassets/digizuite/58371-en-aid0058371.png?width=680&quality=80"
download navina-classic.png "https://www.wellspect.se/globalassets/digizuite/58365-en-aid0058365.png?width=680&quality=80"

python3 - <<PY
from pathlib import Path
dest = Path("$dest")
magic = b"\x89PNG\r\n\x1a\n"
for path in sorted(dest.glob("*.png")):
    data = path.read_bytes()[:8]
    if data != magic:
        raise SystemExit(f"{path.name} is not a PNG (starts {data!r})")
    print(f"{path.name}: PNG OK, {path.stat().st_size} bytes")
PY
