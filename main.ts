import { mkdirSync, writeFileSync } from "node:fs";

// One-line forecast for the invented city of Wobblewick: broadcast-weather
// register (place, conditions, temperature, wind and gusts), bent by three
// small turns a bored commuter will recognise — wind gusting to gossip,
// sympathetic umbrellas, and the late 8:05 bus. Every clause is a real
// forecast element, only bent; nothing is quirky for its own sake.
const ENTRY =
  "Today in Wobblewick: drizzle, 14°C, west wind 20 km/h, gusting to gossip. Umbrellas open out of sympathy; the 8:05 bus is late, as always.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
