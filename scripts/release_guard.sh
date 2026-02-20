#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

errors=0

echo "[1/6] Checking canonical phrasing..."
if ! rg -q "54\.7% passed the Safety Gate; 45\.3% introduced harm" src/lib/content-locks.ts; then
  echo "ERROR: canonical baseline phrasing missing from src/lib/content-locks.ts"
  errors=$((errors + 1))
fi

echo "[2/6] Blocking forbidden legacy framing..."
for pat in \
  "54\.7% introduced emotional risk" \
  "54\.7%.*flagged for emotional risk" \
  "54\.7% failed" \
  "54\.7% flagged" \
  "Certified Safe" \
  "Ensures compliance" \
  "Prevents harm" \
  "Guarantees safety" \
  "AI safety standard" \
  "certifiable"; do
  if rg -n -i "$pat" . \
    --glob '*.html' --glob '*.md' --glob 'src/**/*.tsx' \
    --glob '!governance/**' --glob '!scripts/**' --glob '!dist/**' --glob '!node_modules/**' >/tmp/release_guard_forbidden.txt; then
    echo "ERROR: forbidden phrasing matched pattern: $pat"
    cat /tmp/release_guard_forbidden.txt
    errors=$((errors + 1))
  fi
done

echo "[3/6] Blocking protected implementation disclosure..."
for pat in \
  "Score[[:space:]]*[≤<=]+[[:space:]]*1\\.5" \
  "Score[[:space:]]*[≤<=]+[[:space:]]*2\\.5" \
  "capped at 30/100" \
  "capped at 50/100" \
  "Override thresholds" \
  "weight schema version" \
  "override rule version"; do
  if rg -n -i "$pat" . \
    --glob '*.html' --glob '*.md' --glob 'src/**/*.tsx' \
    --glob '!governance/**' --glob '!scripts/**' --glob '!dist/**' --glob '!node_modules/**' >/tmp/release_guard_ip.txt; then
    echo "ERROR: protected IP phrase found: $pat"
    cat /tmp/release_guard_ip.txt
    errors=$((errors + 1))
  fi
done

echo "[4/6] Blocking raw office artifacts in public repo..."
if find . -type f \( -name '*.docx' -o -name '*.xlsx' -o -name '*.xls' -o -name '*.pptx' -o -name '*.zip' \) \
  -not -path './node_modules/*' -not -path './dist/*' >/tmp/release_guard_rawfiles.txt && [ -s /tmp/release_guard_rawfiles.txt ]; then
  echo "ERROR: raw office/archive files found in ikweai"
  cat /tmp/release_guard_rawfiles.txt
  errors=$((errors + 1))
fi

echo "[5/6] Ensuring redacted report exists..."
if [ ! -f "public/reports/eqsb-series-a-data-room-v2-redacted.md" ]; then
  echo "ERROR: missing public redacted data room report"
  errors=$((errors + 1))
fi

echo "[6/6] Scanning public PDFs for protected/forbidden phrases..."
for pdf in public/artifacts/*.pdf; do
  [ -e "$pdf" ] || continue
  if strings "$pdf" | rg -n -i \
    "54\\.7% introduced emotional risk|54\\.7% failed|54\\.7% flagged|Certified Safe|Ensures compliance|Prevents harm|Guarantees safety|AI safety standard|certifiable|Score[[:space:]]*[≤<=]+[[:space:]]*1\\.5|Score[[:space:]]*[≤<=]+[[:space:]]*2\\.5|capped at 30/100|capped at 50/100|Override thresholds|weight schema version|override rule version" \
    >/tmp/release_guard_pdf_hits.txt; then
    echo "ERROR: protected/forbidden phrase found in PDF: $pdf"
    cat /tmp/release_guard_pdf_hits.txt
    errors=$((errors + 1))
  fi
done

if [ "$errors" -gt 0 ]; then
  echo "Release guard FAILED with $errors error(s)."
  exit 1
fi

echo "Release guard PASSED."
