<div align="center">

<a href="https://www.hiapi.ai/en?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts"><img src="./assets/cover.svg" alt="Awesome Seedance 2.5 Prompts" width="100%"></a>

[![HiAPI](https://img.shields.io/badge/HiAPI-One%20API%2C%20All%20AI%20Models-f97316?style=for-the-badge)](https://www.hiapi.ai/en?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) [![API Key](https://img.shields.io/badge/API%20Key-Free-111827?style=for-the-badge)](https://www.hiapi.ai/en/register?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) [![Seedance 2.5](https://img.shields.io/badge/Seedance%202.5-Launching-f97316?style=for-the-badge)](https://www.hiapi.ai/en/models?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) [![Docs](https://img.shields.io/badge/Docs-HiAPI-111827?style=for-the-badge)](https://docs.hiapi.ai/?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts)

![Launch Tracking](https://img.shields.io/badge/Launch-Tracking-f59e0b) ![10](https://img.shields.io/badge/10%20Launch%20Templates-f97316) ![Day One](https://img.shields.io/badge/Real%20Clips-Day%20One-16a34a) ![Bilingual](https://img.shields.io/badge/EN%20%2F%20%E4%B8%AD%E6%96%87-111827)

# Awesome Seedance 2.5 Prompts

**The Seedance 2.5 prompt gallery — 30s single take, native 4K, 50 references, audio sync.**

[HiAPI](https://www.hiapi.ai/en?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [API Key](https://www.hiapi.ai/en/register?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [Seedance 2.0 Gallery](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts) · [Docs](https://docs.hiapi.ai/?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [简体中文](README.zh-CN.md)

*Spec-accurate today · Real video output at launch · One API key*

</div>

> **HiAPI Matrix:** 🎨 [Image Prompts](https://github.com/HiAPIAI/awesome-gpt-image-2-prompts) · 🎬 [Seedance 2.0 Prompts](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts) · 🎬 **Seedance 2.5 Prompts (you are here)** · 🛠️ [Agent Skills](https://github.com/HiAPIAI/hiapi-skills) · 🤖 [Remote MCP](https://docs.hiapi.ai/for-ai/) · 📖 [API Docs](https://docs.hiapi.ai)

> ⭐ **Star + Watch this repo** — the moment Seedance 2.5 opens on HiAPI, every template below gets replaced with a real rendered clip, and new cases land daily during launch week.

---

## What This Is

Seedance 2.5 is ByteDance's next-generation video model, announced at the Volcano Engine FORCE conference on June 23, 2026 and now rolling out. This repository is the **launch-ready prompt gallery** for it:

- **Today (pre-launch):** verified specs, a 2.5 vs 2.0 comparison, and 10 launch templates engineered for 2.5's headline capabilities — 30-second single takes, up to 50 multimodal references, native 4K, and audio-visual sync.
- **At launch:** every template gets a real rendered clip via [HiAPI](https://www.hiapi.ai/en?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts), and this repo switches to the same real-clip quality bar as our [163-case Seedance 2.0 gallery](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts).

Until 2.5 opens, every template here also runs on **Seedance 2.0 today** — trim the timeline to ≤ 15s and drop the reference count. Each card notes how.

## Seedance 2.5 at a Glance

Announced specs, per ByteDance's FORCE conference keynote and press coverage. Independent verification pending — treat as claimed until real clips land here.

| Capability | Seedance 2.5 (announced) | Seedance 2.0 (shipping on HiAPI) |
|---|---|---|
| Max single-take duration | **30s, one pass, no stitching** | 15s |
| Resolution | **Native 4K** (not upscaled) | Up to 1080p on HiAPI today (model's 4K update rolling out) |
| Reference inputs | **Up to 50** (images, audio, 3D white models, style refs) | 12 |
| Color depth | **10-bit** | 8-bit |
| Audio | **Co-generated in the same latent space** (native sync) | Supported |
| Prompt adherence | Claimed **+20%** vs 2.0 | Baseline |
| Architecture | Sparse Diffusion Transformer | Diffusion Transformer |
| Pricing | **Not published** — do not trust "free unlimited" pages | ~per-second billing, see [HiAPI pricing](https://www.hiapi.ai/en/pricing?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) |

**What 30s single-take actually changes:** prompt structure. A 15s prompt is a *shot*; a 30s prompt is a *scene* — you now direct arcs (setup → turn → payoff) with timecodes instead of describing one continuous motion. The templates below are built around that shift.

## Launch Templates

Ten original prompt scaffolds engineered for 2.5's new capabilities. Each is written to be **runnable the hour the API opens** — and each includes a "run it on 2.0 today" fallback. Real output clips replace the placeholders at launch.

### 1. The 30-Second One-Take Product Story

*Exercises: 30s single take, timecode direction, audio sync.*

```text
One unbroken 30-second tracking shot, cinematic product film, 4K, shallow depth of field.
[00:00-00:08] Setup: dawn light through a workshop window, dust motes drifting; a craftsman's hands sand a raw wooden watch case; ambient sound: sandpaper rhythm, distant birds.
[00:08-00:16] Turn: the camera glides across the workbench in one continuous move, past sketches and brass tools, as parts assemble in stop-motion-like beats matched to a soft percussive score.
[00:16-00:26] Payoff: the finished watch rotates into a shaft of light, macro focus on the dial texture, score swells and resolves.
[00:26-00:30] End card: the watch on dark slate, logo space negative on the right, sound decays to a single tick.
No cuts, no scene transitions — one continuous camera move throughout.
```

<sub>**Run on 2.0 today:** keep [00:00-00:15] only, drop the end card. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

### 2. Fifty-Reference Brand World

*Exercises: multi-reference conditioning at a scale no other model accepts.*

```text
A 20-second brand film in the exact visual world defined by the attached references: product photos (refs 1-12), brand color swatches (refs 13-16), typography samples (refs 17-20), location scouting stills (refs 21-35), wardrobe details (refs 36-42), a 3D white model of the hero product (ref 43), and the target color-grade stills (refs 44-50).
A model walks through the referenced location wearing the referenced wardrobe, picks up the hero product; every surface, color, and material must match the reference set, not generic interpretations.
Camera: slow dolly-in, 35mm, 4K, 10-bit gradients on the dusk sky.
```

<sub>**Run on 2.0 today:** cap references at 12 — keep product + location + grade. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

### 3. Dialogue Scene with Native Audio Sync

*Exercises: co-generated audio, lip sync, scene-level acting.*

```text
25-second two-person dialogue scene, handheld documentary style, 4K.
Interior, a late-night diner booth. CHARACTER A (60s, weathered, flannel) slides a folded map across the table. CHARACTER B (30s, sharp coat) doesn't touch it.
A: "You said you'd never go back." (gravelly, quiet)
B: "That was before they found the second one." (measured, tense)
A long pause — only the diner hum, a coffee cup set down, rain on the window.
B finally takes the map. Camera slowly pushes in over A's shoulder for the whole scene, one take.
Audio native-synced: lips, cup, rain, room tone all coherent.
```

<sub>**Run on 2.0 today:** trim to one line each, 12s. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

### 4. The Impossible Sports Broadcast

*Exercises: long-horizon motion coherence, camera language.*

```text
30-second continuous broadcast-style shot, 4K: a parkour athlete crosses a rain-soaked rooftop district at dusk.
[00:00-00:10] A drone camera locks onto her mid-run — vaults a vent, slides under a pipe; city neon reflects off wet concrete.
[00:10-00:20] The "drone" dives off the roof edge with her, matching her wall-drop to a lower terrace without a cut, motion blur consistent with a real 24mm gimbal rig.
[00:20-00:30] She lands, rolls, sprints toward the camera and past it; the camera whips 180° to follow her silhouette into a stairwell of light. Crowd noise and her breathing carry the audio, no music.
Physics must stay consistent: momentum, wet-surface friction, fabric weight.
```

<sub>**Run on 2.0 today:** keep the first two beats, 15s. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

### 5. Single-Take Cooking ASMR

*Exercises: macro detail retention over 30s, native foley.*

```text
One 30-second overhead-to-macro one-take, 4K, 10-bit: hand-pulled noodles from dough to bowl.
[00:00-00:08] Overhead: floured hands fold and stretch dough in hypnotic rhythm; audio: dough slaps, flour dust.
[00:08-00:18] The camera descends and tilts to eye level as strands multiply between hands — steam rises from a wok behind, out of focus.
[00:18-00:26] Noodles drop into rolling broth; macro on the boil, chili oil blooming in slow spirals.
[00:26-00:30] A porcelain bowl slides into frame, chopsticks lift one strand, steam curls. Audio: pure ASMR foley, no music, no voice.
```

<sub>**Run on 2.0 today:** first two beats as a 12s clip. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

### 6. Character-Consistent Micro-Film

*Exercises: reference-locked character across a full scene arc.*

```text
Using the attached character sheet (refs 1-6: face turnaround, wardrobe, gait study) and location refs (7-14):
A 30-second micro-film. The referenced character — same face, same coat, same walk — enters an empty train station at night, checks a paper timetable, realizes the last train is gone, and sits on the bench as the station lights shut off section by section behind him.
Tone: quiet melancholy, sodium-vapor palette from grade refs (15-18).
One slow lateral dolly the entire duration; the character's face must remain identity-consistent in every frame.
Audio: distant announcements, fluorescent buzz, his footsteps — native sync.
```

<sub>**Run on 2.0 today:** 12 refs max, 15s, cut the light-shutdown beat. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

### 7. The 4K Texture Torture Test

*Exercises: native 4K + 10-bit — the shot that exposes upscalers.*

```text
20-second slow push-in, native 4K, 10-bit, tripod-stable:
A single peacock feather stands in a glass inkwell on black velvet. Backlit by one warm tungsten beam.
The camera pushes from full frame to extreme macro on the feather's eye — every barbule individually resolved, iridescence shifting cyan→emerald→bronze as the angle changes, micro-dust drifting through the beam.
No cuts. The gradient in the dark falloff must stay smooth — no banding.
```

<sub>**Run on 2.0 today:** same prompt, 1080p, judge the difference at launch. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

### 8. Audio-Led Music Performance

*Exercises: audio-reference conditioning (feed a track, get matched visuals).*

```text
With the attached 20-second audio reference (ref 1: fingerstyle guitar, 92 BPM) and style refs (2-8):
A 20-second performance film: a guitarist on a fire-escape landing at golden hour, playing the referenced track. String vibration, fret-hand movement, and strum pattern must match the audio beat-for-beat.
Camera cuts are forbidden — one slow orbit from over-the-shoulder to front-on.
City soft-focus below, laundry lines swaying in rhythm with the wind, 4K.
```

<sub>**Run on 2.0 today:** describe the music in text instead of attaching audio, 10s. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

### 9. Architectural Walkthrough from a 3D White Model

*Exercises: 3D white-model reference input — new in 2.5.*

```text
Using the attached 3D white model of the building (ref 1) and material/mood boards (refs 2-20):
A 30-second real-estate walkthrough: the camera enters through the main door, crosses the double-height living space as morning light rakes through the referenced window mullions, ascends the floating staircase, and ends on the terrace facing the sea.
Geometry must follow the white model exactly; materials and light follow the boards.
One continuous stabilized move, 4K, interior ambience native-synced (footsteps on oak, gull cries at the terrace).
```

<sub>**Run on 2.0 today:** replace the white model with 4 elevation renders, 15s. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

### 10. The Season-Cycle Time Compression

*Exercises: long-horizon world consistency + gradual transformation.*

```text
One fixed-camera 30-second shot, 4K: the same oak tree on a hill, cycling through four seasons in one continuous take.
[00:00-00:07] Spring — buds open, rain passes, grass greens.
[00:07-00:15] Summer — full canopy, heat shimmer, cicadas in the audio bed.
[00:15-00:23] Autumn — leaves turn and stream off in gusts, light goes amber.
[00:23-00:30] Winter — bare branches gather snow, breath-fog of a passing deer, wind fades to silence.
The tree's silhouette, the hill line, and the horizon must not drift. Transitions are gradual, not crossfades.
```

<sub>**Run on 2.0 today:** two seasons, 15s. · **Placeholder** — real 2.5 clip lands here at launch.</sub>

---

## Run It on HiAPI

Seedance 2.5 will be live on HiAPI at launch — **the code below is exactly what you'll run**, and it already works today with `"model": "seedance-2-0"`. One key, no queue-jumping between vendors.

```bash
curl -X POST "https://api.hiapi.ai/v1/videos" \
  -H "Authorization: Bearer $HIAPI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "seedance-2-5",
    "prompt": "Paste a launch template from above",
    "seconds": "30",
    "resolution": "4k",
    "ratio": "16:9"
  }'
```

**Python**

```python
import os
import requests

response = requests.post(
    "https://api.hiapi.ai/v1/videos",
    headers={
        "Authorization": f"Bearer {os.environ['HIAPI_API_KEY']}",
        "Content-Type": "application/json",
    },
    json={
        "model": "seedance-2-5",  # works today with "seedance-2-0"
        "prompt": "Paste a launch template from above",
        "seconds": "30",
        "resolution": "4k",
        "ratio": "16:9",
    },
)

print(response.json())  # task id; poll the videos endpoint for the final URL
```

**Node**

```js
const response = await fetch("https://api.hiapi.ai/v1/videos", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.HIAPI_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "seedance-2-5", // works today with "seedance-2-0"
    prompt: "Paste a launch template from above",
    seconds: "30",
    resolution: "4k",
    ratio: "16:9",
  }),
});

console.log(await response.json()); // task id; poll the videos endpoint for the final URL
```

> Model slug, duration, and resolution enums will be confirmed against the shipped API at launch. `seconds` and `resolution` above reflect announced capabilities; official pricing has **not** been published — ignore any page selling "unlimited Seedance 2.5" before ByteDance ships it.

Get a free API key: [Register on HiAPI](https://www.hiapi.ai/en/register?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [API Docs](https://docs.hiapi.ai/?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [Pricing](https://www.hiapi.ai/en/pricing?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts)

## Launch Roadmap

- [x] Verified spec sheet + 2.5 vs 2.0 comparison
- [x] 10 launch templates engineered for 30s / 50-ref / native-4K / audio-sync
- [ ] **T+0:** Seedance 2.5 live on HiAPI — every template re-rendered with real clips
- [ ] **T+0:** `hiapi-seedance-2-5-video-skill` published (agent-ready, one-line install)
- [ ] **Launch week:** daily new cases with real output, community submissions open
- [ ] **T+30:** full category system (Action, Commercial, POV, Reference-Driven, …) like the [2.0 gallery](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts)

## While You Wait

- 🎬 **[Awesome Seedance 2.0 Prompts](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts)** — 163 cases, 8 categories, every one with a real rendered clip. The best 2.5 warm-up is shipping on 2.0 today.
- 🛠️ **[hiapi-seedance-2-0-video-skill](https://github.com/HiAPIAI/hiapi-seedance-2-0-video-skill)** — let your AI agent generate Seedance videos now; the 2.5 skill will install the same way.
- ✍️ **[hiapi-video-prompt-generator-skill](https://github.com/HiAPIAI/hiapi-video-prompt-generator-skill)** — turn a one-line idea into a directed, timecoded prompt (exactly what 30s scenes need).

## Contributing

Pre-launch: spec corrections and template improvements are welcome — open an issue or PR. Post-launch, this repo switches to the real-clip quality bar: every submission needs a working video URL, full prompt, and creator attribution. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Sources

Specs summarized from public coverage of ByteDance's June 23, 2026 FORCE conference announcement: [The Information](https://www.theinformation.com/briefings/bytedance-unveils-seedance-2-5-video-model), [TNW](https://thenextweb.com/news/bytedance-seedance-2-5-ai-video-4k-30-seconds), [TechTimes](https://www.techtimes.com/articles/319639/20260703/bytedance-seedance-25-launches-this-week-30-second-ai-video-carries-copyright-cloud.htm). Capabilities are ByteDance's claims until independently verified. Seedance is a ByteDance model; this is an independent community gallery, not affiliated with or endorsed by ByteDance.

## License

HiAPI-owned materials — curation, structure, original template prompts, scripts, and README layout — are released under [CC BY 4.0](LICENSE): reuse with attribution to HiAPI and a link back to this repository. Third-party brand and platform names are not covered — see [NOTICE.md](NOTICE.md).
