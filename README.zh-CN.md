<div align="center">

<a href="https://www.hiapi.ai/zh?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts"><img src="./assets/cover.zh-CN.svg" alt="Awesome Seedance 2.5 Prompts" width="100%"></a>

[![HiAPI](https://img.shields.io/badge/HiAPI-One%20API%2C%20All%20AI%20Models-f97316?style=for-the-badge)](https://www.hiapi.ai/zh?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) [![API Key](https://img.shields.io/badge/API%20Key-Free-111827?style=for-the-badge)](https://www.hiapi.ai/zh/register?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) [![Seedance 2.5](https://img.shields.io/badge/Seedance%202.5-Launching-f97316?style=for-the-badge)](https://www.hiapi.ai/zh/models?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) [![Docs](https://img.shields.io/badge/Docs-HiAPI-111827?style=for-the-badge)](https://docs.hiapi.ai/?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts)

![Launch Tracking](https://img.shields.io/badge/%E4%B8%8A%E7%BA%BF%E8%BF%BD%E8%B8%AA-f59e0b) ![10](https://img.shields.io/badge/10%20%E4%B8%AA%E9%A6%96%E5%8F%91%E6%A8%A1%E6%9D%BF-f97316) ![Day One](https://img.shields.io/badge/%E4%B8%8A%E7%BA%BF%E6%97%A5%E6%9B%B4%E6%96%B0%E7%9C%9F%E5%AE%9E%E8%A7%86%E9%A2%91-16a34a) ![Bilingual](https://img.shields.io/badge/EN%20%2F%20%E4%B8%AD%E6%96%87-111827)

# Awesome Seedance 2.5 Prompts

**Seedance 2.5 提示词库 —— 30 秒单镜头 · 原生 4K · 50 个参考输入 · 音画同步**

[HiAPI](https://www.hiapi.ai/zh?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [API Key](https://www.hiapi.ai/zh/register?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [Seedance 2.0 案例库](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts) · [Docs](https://docs.hiapi.ai/?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [English](README.md)

*今天就有准确规格 · 上线日换真实视频 · 一个 API Key 全部跑通*

</div>

> **HiAPI Matrix:** 🎨 [Image Prompts](https://github.com/HiAPIAI/awesome-gpt-image-2-prompts) · 🎬 [Seedance 2.0 Prompts](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts) · 🎬 **Seedance 2.5 Prompts(当前仓库)** · 🛠️ [Agent Skills](https://github.com/HiAPIAI/hiapi-skills) · 🤖 [Remote MCP](https://docs.hiapi.ai/for-ai/) · 📖 [API Docs](https://docs.hiapi.ai)

> ⭐ **Star + Watch 本仓库** —— Seedance 2.5 在 HiAPI 开放的那一刻,下面每个模板都会换成真实渲染视频,上线周每天新增案例。

---

## 这是什么

Seedance 2.5 是字节跳动的下一代视频模型,2026 年 6 月 23 日在火山引擎 FORCE 大会官宣,目前正在开放中。本仓库是为它准备的**首发提示词库**:

- **现在(上线前):** 已核实的规格表、2.5 vs 2.0 对比,以及 10 个针对 2.5 头牌能力设计的首发模板 —— 30 秒单镜头、最多 50 个多模态参考、原生 4K、音画同步。
- **上线时:** 每个模板都会通过 [HiAPI](https://www.hiapi.ai/zh?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) 重新渲染成真实视频,并切换到与 [163 案例的 Seedance 2.0 库](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts)相同的真实视频质量标准。

在 2.5 开放之前,这里的每个模板**今天就能在 Seedance 2.0 上跑**——把时间线裁到 ≤ 15 秒、参考图减到 12 个以内即可,每张卡片都标了怎么改。

## Seedance 2.5 规格速览

以下为发布会及媒体报道的官宣规格,尚未经独立验证——在真实视频落地前请视为厂商声明。

| 能力 | Seedance 2.5(官宣) | Seedance 2.0(HiAPI 在售) |
|---|---|---|
| 最长单镜头时长 | **30 秒一次生成,无拼接** | 15 秒 |
| 分辨率 | **原生 4K**(非放大) | HiAPI 当前最高 1080p(模型 4K 更新放开中) |
| 参考输入 | **最多 50 个**(图片、音频、3D 白模、风格参考) | 12 个 |
| 色深 | **10-bit** | 8-bit |
| 音频 | **同潜空间共生成**(原生同步) | 支持 |
| 提示词遵循度 | 官方称 **+20%** | 基准 |
| 架构 | Sparse Diffusion Transformer | Diffusion Transformer |
| 定价 | **未公布** —— 别信任何"免费无限"页面 | 按秒计费,见 [HiAPI 定价](https://www.hiapi.ai/zh/pricing?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) |

**30 秒单镜头真正改变的是提示词结构:** 15 秒的提示词写的是一个*镜头*,30 秒写的是一场*戏*——你要用时间码去导一条完整的弧线(铺垫 → 转折 → 收束),而不是描述一段连续动作。下面的模板全部围绕这个转变设计。

## 首发模板

10 个为 2.5 新能力设计的原创提示词脚手架,**API 开放的那一小时就能直接跑**,每个都附"今天先在 2.0 上跑"的降级方案。上线后占位符会替换为真实视频。完整模板见 [English README](README.md#launch-templates) 与 [`data/templates.json`](./data/templates.json)(双语结构化数据)。

| # | 模板 | 练的是什么 |
|---|---|---|
| 1 | 30 秒一镜到底产品故事 | 30s 单镜头 · 时间码导演 · 音画同步 |
| 2 | 50 参考图品牌世界 | 其他模型给不了的多参考条件控制 |
| 3 | 原生音频同步对话戏 | 共生成音频 · 口型 · 场景表演 |
| 4 | 不可能的体育转播 | 长时程运动连贯性 · 镜头语言 |
| 5 | 一镜到底料理 ASMR | 30 秒微距细节保持 · 原生拟音 |
| 6 | 角色一致性微电影 | 参考锁定角色跑完整场戏 |
| 7 | 4K 纹理拷问测试 | 原生 4K + 10-bit,一眼识破放大器 |
| 8 | 音频驱动音乐演出 | 音频参考条件控制(2.5 新能力) |
| 9 | 3D 白模建筑漫游 | 3D 白模参考输入(2.5 新能力) |
| 10 | 四季轮转时间压缩 | 长时程世界一致性 · 渐变形变 |

## 在 HiAPI 上运行

Seedance 2.5 上线即接入 HiAPI——**下面的代码就是届时要跑的代码**,而且今天把 model 换成 `"seedance-2-0"` 就能立即使用。一个 Key,不用在各家排队。

```bash
curl -X POST "https://api.hiapi.ai/v1/videos" \
  -H "Authorization: Bearer $HIAPI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "seedance-2-5",
    "prompt": "粘贴上面的首发模板",
    "seconds": "30",
    "resolution": "4k",
    "ratio": "16:9"
  }'
```

> 模型 slug、时长与分辨率枚举将在上线时按实际 API 校准;`seconds`/`resolution` 反映官宣能力。官方定价**尚未公布**——上线前任何售卖"无限 Seedance 2.5"的页面都不要信。

免费获取 API Key:[注册 HiAPI](https://www.hiapi.ai/zh/register?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [API 文档](https://docs.hiapi.ai/?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts) · [定价](https://www.hiapi.ai/zh/pricing?utm_source=github&utm_medium=readme&utm_campaign=awesome-seedance-2-5-prompts)

## 上线路线图

- [x] 已核实规格表 + 2.5 vs 2.0 对比
- [x] 10 个首发模板(30s / 50 参考 / 原生 4K / 音画同步)
- [ ] **T+0:** Seedance 2.5 在 HiAPI 上线——全部模板重渲染为真实视频
- [ ] **T+0:** 发布 `hiapi-seedance-2-5-video-skill`(Agent 一行安装)
- [ ] **上线周:** 每天新增真实输出案例,开放社区投稿
- [ ] **T+30:** 建立完整分类体系(动作、商业、POV、参考驱动……),对齐 [2.0 案例库](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts)

## 等待期间

- 🎬 **[Awesome Seedance 2.0 Prompts](https://github.com/HiAPIAI/awesome-seedance-2-0-prompts)** —— 163 个案例、8 个分类,每个都有真实渲染视频。最好的 2.5 热身就是今天先跑 2.0。
- 🛠️ **[hiapi-seedance-2-0-video-skill](https://github.com/HiAPIAI/hiapi-seedance-2-0-video-skill)** —— 让 AI Agent 现在就能生成 Seedance 视频;2.5 技能将以同样方式安装。
- ✍️ **[hiapi-video-prompt-generator-skill](https://github.com/HiAPIAI/hiapi-video-prompt-generator-skill)** —— 把一句话想法变成带时间码的导演级提示词(30 秒场景正需要这个)。

## 参与共建

上线前:欢迎规格勘误与模板改进,直接开 issue 或 PR。上线后本仓库切换到真实视频质量标准:每条投稿都需要可用的视频 URL、完整提示词和创作者署名,见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 来源

规格整理自字节跳动 2026 年 6 月 23 日 FORCE 大会发布的公开报道:[The Information](https://www.theinformation.com/briefings/bytedance-unveils-seedance-2-5-video-model)、[TNW](https://thenextweb.com/news/bytedance-seedance-2-5-ai-video-4k-30-seconds)、[TechTimes](https://www.techtimes.com/articles/319639/20260703/bytedance-seedance-25-launches-this-week-30-second-ai-video-carries-copyright-cloud.htm)。所有能力在独立验证前均为字节跳动的官方声明。Seedance 是字节跳动的模型;本仓库为独立社区整理,与字节跳动无隶属或背书关系。

## 许可

HiAPI 拥有的部分——整理结构、原创模板提示词、脚本与 README 排版——以 [CC BY 4.0](LICENSE) 发布:转载或改编请署名 HiAPI 并附本仓库链接。第三方品牌与平台名称不在授权范围内,见 [NOTICE.md](NOTICE.md)。
