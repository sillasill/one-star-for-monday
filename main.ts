import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of Monday, written as if Monday were a restaurant.
const REVIEW =
  "Monday seated me by the draughty door, served yesterday's coffee cold, then billed me for the whole week. One star; never returning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
