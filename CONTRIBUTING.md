# Contributing

Thanks for considering a contribution. This repository is the launch gallery for **Seedance 2.5 video prompts** — pre-launch it holds spec-accurate launch templates; post-launch every entry gets a real rendered clip.

## Pre-launch (now)

- ✅ **Spec corrections.** If ByteDance publishes new official numbers (duration, references, resolution, pricing), open an issue with a source link.
- ✅ **Template improvements.** Tighter timecode structure, better exercise of 2.5-specific capabilities (30s single take, 50 references, native 4K, audio sync).
- ✅ **README / docs improvements.** Typos, clearer wording, missing translations.
- ❌ **Unsourced spec claims or price guesses.** Vendor claims need a citation; pricing is unpublished — we don't speculate.

## Post-launch

The quality bar switches to the same as our [Seedance 2.0 gallery](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts):

- **Real video, not promises.** Each entry must include a working video URL.
- **Reproducible.** Pasting the prompt into HiAPI `POST /v1/videos` with the listed model + ratio + duration should produce a visually similar clip.
- **Attribution preserved.** If the prompt or video originated elsewhere, link the source and the creator handle. We never strip credit.
- **English first, Chinese welcome.** Either `title_en` or `title_zh` is required; both is better.

Submit via the issue template (opens at launch) or a PR against `data/templates.json` following the existing field structure, then run `node scripts/validate.mjs`.

## Reporting problems

Open an issue with the template ID (e.g. `one-take-product-story`) and what's wrong. We treat broken attribution as a P1.

## Code of conduct

Be kind. We're all here to learn what Seedance 2.5 can actually do, not to score points.
