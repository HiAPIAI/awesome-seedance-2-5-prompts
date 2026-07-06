#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const data = JSON.parse(fs.readFileSync(path.join(root, "data", "templates.json"), "utf8"));
const officialCases = JSON.parse(fs.readFileSync(path.join(root, "data", "official-cases.json"), "utf8"));

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
const allowedCaseCapabilities = new Set(["text-to-video", "image-to-video", "video-editing"]);
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

const requiredCaseFields = [
  "id",
  "number",
  "title_en",
  "title_zh",
  "section_en",
  "section_zh",
  "category_en",
  "category_zh",
  "capability",
  "aspect_ratio",
  "video_url",
  "preview_image_url",
  "reference_urls",
  "prompt_language",
  "prompt_availability",
  "prompt_mirrored",
  "prompt_theme_en",
  "prompt_theme_zh",
  "tags",
];
const seenCaseIds = new Set();
const seenCaseNumbers = new Set();

if (!officialCases.source_page || !/^https?:\/\//.test(officialCases.source_page)) {
  errors.push("official-cases.json: source_page must be http(s)");
}

for (const [index, item] of officialCases.cases.entries()) {
  const where = `officialCases[${index}] (${item.id ?? "no-id"})`;
  for (const field of requiredCaseFields) {
    if (item[field] === undefined || item[field] === null || item[field] === "") {
      errors.push(`${where}: missing required field "${field}"`);
    }
  }
  if (item.id) {
    if (seenCaseIds.has(item.id)) errors.push(`${where}: duplicate id`);
    seenCaseIds.add(item.id);
  }
  if (item.number !== undefined) {
    if (seenCaseNumbers.has(item.number)) errors.push(`${where}: duplicate number ${item.number}`);
    seenCaseNumbers.add(item.number);
  }
  if (item.aspect_ratio && !allowedAspectRatios.has(item.aspect_ratio)) {
    errors.push(`${where}: non-standard aspect_ratio "${item.aspect_ratio}"`);
  }
  if (item.capability && !allowedCaseCapabilities.has(item.capability)) {
    errors.push(`${where}: invalid capability "${item.capability}"`);
  }
  if (item.video_url && !/^https:\/\/.+\.mp4(?:\?.*)?$/.test(item.video_url)) {
    errors.push(`${where}: video_url must be an https mp4 URL`);
  }
  if (item.preview_image_url && !/^https?:\/\//.test(item.preview_image_url)) {
    errors.push(`${where}: preview_image_url must be http(s)`);
  }
  if (!Array.isArray(item.reference_urls)) {
    errors.push(`${where}: reference_urls must be an array`);
  } else {
    for (const [refIndex, refUrl] of item.reference_urls.entries()) {
      if (!/^https?:\/\//.test(refUrl)) {
        errors.push(`${where}: reference_urls[${refIndex}] must be http(s)`);
      }
    }
  }
  if (typeof item.prompt_mirrored !== 'boolean') {
    errors.push(`${where}: prompt_mirrored must be a boolean`);
  }
  if (item.prompt_mirrored === true && (!item.prompt_en || !item.prompt_zh)) {
    errors.push(`${where}: mirrored cases must include prompt_en and prompt_zh`);
  }
}

const json = JSON.stringify({ data, officialCases });
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

console.log(`OK: ${data.templates.length} launch templates and ${officialCases.cases.length} official case indexes validated.`);
