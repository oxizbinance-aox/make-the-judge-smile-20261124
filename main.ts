// Make the Judge Smile — one line about a small good thing that happened today.
// Deterministic: writes the exact same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This morning the bus driver held the door open while an old man shuffled across with his groceries, and the whole bus waited, nobody honked, nobody sighed.";

// Gate self-check: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
