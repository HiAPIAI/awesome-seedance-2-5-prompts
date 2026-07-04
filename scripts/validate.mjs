#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const data = JSON.parse(fs.readFileSync(path.join(root, "data", "templates.json"), "utf8"));

const requiredItemFields = [
  "id",
  "number",
  "title_en",
  "title_zh",
  "exercises_en",
  "exercises_zh",
  "aspect_ratio",
  "seconds",
  "resolution",
  "capability",
  "fallback_2_0_en",
  "fallback_2_0_zh",
  "prompt",
];

const allowedAspectRatios = new Set(["16:9", "9:16", "1:1", "4:3", "3:4", "21:9"]);
const allowedCapabilities = new Set(["text-to-video", "image-to-video"]);
const errors = [];
const seenIds = new Set();
const seenNumbers = new Set();

for (const [index, item] of data.templates.entries()) {
  const where = `templates[${index}] (${item.id ?? "no-id"})`;
  for (const field of requiredItemFields) {
    if (item[field] === undefined || item[field] === null || item[field] === "") {
      errors.push(`${where}: missing required field "${field}"`);
    }
  }
  if (item.id) {
    if (seenIds.has(item.id)) errors.push(`${where}: duplicate id`);
    seenIds.add(item.id);
  }
  if (item.number !== undefined) {
    if (seenNumbers.has(item.number)) errors.push(`${where}: duplicate number ${item.number}`);
    seenNumbers.add(item.number);
  }
  if (item.aspect_ratio && !allowedAspectRatios.has(item.aspect_ratio)) {
    errors.push(`${where}: non-standard aspect_ratio "${item.aspect_ratio}"`);
  }
  if (item.capability && !allowedCapabilities.has(item.capability)) {
    errors.push(`${where}: invalid capability "${item.capability}"`);
  }
  if (item.seconds && Number(item.seconds) > 30) {
    errors.push(`${where}: seconds ${item.seconds} exceeds announced 30s max`);
  }
  if (item.preview_video && !/^https?:\/\//.test(item.preview_video)) {
    errors.push(`${where}: preview_video must be http(s)`);
  }
}

const json = JSON.stringify(data);
const secretLikePatterns = [
  /(?<![A-Za-z])sk-[A-Za-z0-9_-]{20,}/,
  /ghp_[A-Za-z0-9_]{20,}/,
];
for (const p of secretLikePatterns) {
  if (p.test(json)) errors.push(`templates.json contains secret-like string matching ${p}`);
}

if (errors.length) {
  console.error("Validation failed:\n" + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}

console.log(`OK: ${data.templates.length} launch templates validated.`);
