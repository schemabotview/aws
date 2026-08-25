# aws — GraphL concept repo

The **AWS** concept app for [GraphL](https://graphl.in). One section = a left **scene** (react-flow
diagram or code snippet) + a right **slide** (markdown) + a **narration** script, rendered
responsively (4K capture · laptop web app · mobile) and captured to video.

Workspace-wide model, pipeline, and conventions: see the workspace [`README.md`](../README.md).

## The course arc (10 courses)

| # | Course | What it covers |
|--:|--------|----------------|
| 1 | **foundations** | Cloud, regions & AZs, high availability, shared responsibility, the cost model. |
| 2 | **identity** | IAM — users, roles, policies, and the request-authorization flow. |
| 3 | **compute** | EC2 and the compute family — instances, images, scaling. |
| 4 | **storage** | S3, EBS, and the storage tiers. |
| 5 | **networking** | VPCs, subnets, routing, and the network edge. |
| 6 | **databases** | Relational and non-relational managed data stores. |
| 7 | **serverless** | Lambda and the event-driven building blocks. |
| 8 | **data-engineering** | Ingest → store → process → serve pipelines. |
| 9 | **security** | Encryption, secrets, and the defensive controls. |
| 10 | **governance** | Accounts, org-wide policy, and cost/compliance guardrails. |

A **project** capstone weaves the courses together end to end.

## Layout

```
src/
  render-engine/   layout + react-flow / code-snippet renderer (folder, not a package)
  scenes/          hand-authored scenes + registry
  content/         courses → sections (one file per section) + registry
  section/         composited scene-left / slide-right view (responsive)
  App.tsx          hash router — section (whole-scene) view · scene (individual) view
scripts/
  record-course.mjs / record-reels.mjs   capture → mp4 (landscape / portrait)
  thumb.mjs / gen-descriptions.mjs        thumbnails / video descriptions
  colab_generate_audio.ipynb              Colab + Chatterbox TTS → .wav
```

## Run

```bash
npm install
npm run dev                       # open the printed URL, try #/foundations-what-is-cloud
npm run build                     # tsc + vite build (must stay clean)
npm run record foundations        # 4K video → scripts/out/foundations.mp4
npm run record:reels foundations  # portrait reels
```
