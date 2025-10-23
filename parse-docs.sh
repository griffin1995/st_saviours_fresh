#!/bin/bash

# Parse Next.js documentation headings
# Usage: ./parse-docs.sh < docs-output.txt
# Or: cat docs-output.txt | ./parse-docs.sh

echo "=== Available Documentation Sections ==="
echo ""

# Extract headings (lines starting with ###)
grep -n "^###" | while IFS=: read -r line_num content; do
    # Clean up the heading (remove ### and extra spaces)
    heading=$(echo "$content" | sed 's/^### *//' | sed 's/ *$//')
    echo "$line_num. $heading"
done

echo ""
echo "=== Instructions ==="
echo "Copy the numbered list above and provide it to Claude."
echo "Claude will then tell you which specific sections to paste in full."
