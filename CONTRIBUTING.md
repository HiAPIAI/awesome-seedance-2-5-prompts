# Contributing

Thanks for considering a contribution. This repository is a user-facing **Seedance 2.5 video prompt library** and case index. Good contributions help people understand a reusable video pattern, copy or adapt a prompt, and run it through HiAPI when available.

## What We Accept

- **Reusable prompt patterns.** Timecoded 30-second scenes, reference-driven generation, controlled edits, text-in-scene, advertising shots, stylized animation, or other patterns that a user can reproduce.
- **Real video cases.** A working video URL plus enough metadata to understand ratio, duration, model, and prompt structure.
- **Case-index improvements.** Better titles, tags, categories, reference URLs, broken-link fixes, and bilingual wording.
- **Spec corrections.** If model limits, pricing, or API behavior changes, include a source link.
- **README / docs improvements.** Typos, clearer wording, missing translations, and SEO improvements that still read naturally.

## Quality Bar

- **Reproducible.** A user should understand what to paste, what references are needed, and what kind of output to expect.
- **Specific.** Avoid vague prompts like "make it cinematic"; describe subject, motion, camera, timing, texture, and payoff.
- **Attributed.** If the prompt, video, or idea originated elsewhere, include the source URL and creator handle. We do not strip credit.
- **Rights-aware.** Do not paste large third-party prompt dumps into the repo. Link to the source and summarize the reusable pattern.
- **Bilingual when useful.** Either `title_en` or `title_zh` is required; both is better.
- **No price guesses.** Do not add unverified Seedance 2.5 pricing or model limits.

Submit via the issue template or a PR against the relevant data file:

- `data/templates.json` for HiAPI-authored reusable templates.
- `data/official-cases.json` for case-index metadata and source links.

Then run:

```bash
node scripts/validate.mjs
```

## Reporting problems

Open an issue with the template ID or case ID and what's wrong. We treat broken attribution as a P1.

## Code of conduct

Be kind. We're all here to learn what Seedance 2.5 can actually do, not to score points.
