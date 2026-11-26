// One-Liner Laughs — make.fun entry
// Writes one funny one-line joke to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "I told my wife she was drawing her eyebrows too high. She looked surprised.";

const outPath = "/output/entry.txt";

// writeEntry() writes the entry line to /output/entry.txt as UTF-8 text.
function writeEntry(): void {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, entry, "utf8");
  console.log(`Wrote ${entry.length} chars to ${outPath}`);
}

writeEntry();
