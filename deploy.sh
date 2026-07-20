#!/usr/bin/env bash
# Build a clean publish directory and push it to Cloudflare Pages.
#
# Deploying the repo root directly would also upload _originals/ (14MB of
# uncompressed source artwork) and README.md, both of which would be publicly
# served. Pages has no reliable ignore file, so stage instead.
set -euo pipefail
cd "$(dirname "$0")"

rm -rf dist && mkdir -p dist
cp index.html 404.html robots.txt dist/
cp -R css js images dist/

npx --yes wrangler@latest pages deploy dist \
  --project-name=manon --branch=main --commit-dirty=true
