// News-image entry for 23 November 2026 (Node 22, standard library only).
// The artwork lives in entry.png next to this file; this program places a
// byte-identical copy at /output/entry.png, which is what the gate reads.
//
// Outside the grader's container, set MAKEFUN_OUTPUT_DIR to a local folder:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, 'entry.png'));
const dest = join(outDir, 'entry.png');
writeFileSync(dest, bytes);
// Guard against a truncated write: the copy must be exactly as long as the source.
if (readFileSync(dest).length !== bytes.length) {
  throw new Error('entry.png copy is incomplete');
}
