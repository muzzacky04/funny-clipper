# Funny Clipper — Official Legal & Documentation Website

This repository hosts the official static legal and developer documentation website for **Funny Clipper**, an automated video clipping application developed and maintained by **Moh Fahmi Muzaki**.

The site is hosted publicly via **GitHub Pages** and serves as the official **Terms of Service URL** and **Privacy Policy URL** for third-party developer reviews, including the **TikTok for Developers** application review and **Google / YouTube API Services verification**.

---

## 1. Live URLs (GitHub Pages)

| Page | URL | Status |
|---|---|---|
| **Homepage** | [https://muzzacky04.github.io/funny-clipper/](https://muzzacky04.github.io/funny-clipper/) | Production Ready |
| **Terms of Service** | [https://muzzacky04.github.io/funny-clipper/terms.html](https://muzzacky04.github.io/funny-clipper/terms.html) | Production Ready |
| **Privacy Policy** | [https://muzzacky04.github.io/funny-clipper/privacy.html](https://muzzacky04.github.io/funny-clipper/privacy.html) | Production Ready |

---

## 2. Confirmed Application Information

* **Application Name:** Funny Clipper
* **Application Operator / Maintainer:** Moh Fahmi Muzaki
* **Contact Email:** [mfmzacky4@gmail.com](mailto:mfmzacky4@gmail.com)
* **Jurisdiction & Governing Law:** Republic of Indonesia (including compliance with Personal Data Protection Law / Law No. 27 of 2022)
* **Effective Date:** November 5, 2026
* **Last Updated:** November 5, 2026

---

## 3. Product Architecture & Actual Publishing Workflow

Funny Clipper operates as a **local Windows desktop application** orchestrated through a **local n8n workflow pipeline**. It is not a centralized SaaS platform.

### Local Processing Components:
* **FFmpeg:** Executes local video cutting, audio extraction, vertical reformatting, and subtitle burning.
* **Faster Whisper:** Transcribes speech audio locally on the workstation without transmitting audio to cloud speech vendors.
* **Ollama:** Analyzes transcripts locally to identify engaging moments and punchlines without sending text to external cloud AI models.
* **Local n8n:** Orchestrates the multi-stage pipeline on the local machine.

### Publishing Integrations:
1. **TikTok Content Posting API:**
   * **Authentication:** TikTok Login Kit (OAuth 2.0).
   * **Requested Scope:** `video.upload` (no active `video.publish` scope).
   * **Workflow:** Video clips are uploaded strictly to the creator's **TikTok inbox as drafts**.
   * **Human-in-the-Loop:** Funny Clipper does not publish publicly on TikTok. Creators must open the official TikTok mobile app to inspect, edit captions, and manually publish.
   * **Token File:** Stored locally in `secrets/tiktok_token.json`.

2. **YouTube Data API v3:**
   * **Authentication:** Google OAuth 2.0.
   * **Requested Scope:** `https://www.googleapis.com/auth/youtube.upload`.
   * **Workflow:** Video clips are uploaded with **private visibility** (`privacyStatus: "private"`).
   * **Human-in-the-Loop:** Videos remain private until the creator inspects and publishes or changes visibility in YouTube Studio.
   * **Google API Services User Data Policy:** Access to Google user data is strictly limited to video uploads requested by the user. Data is never used for advertising, profiling, or resale.
   * **Token File:** Stored locally in `secrets/youtube_token.json`.

---

## 4. Repository Structure

```text
funny-clipper/
├── index.html              # Homepage: Product capabilities, local pipeline & publishing workflow
├── terms.html              # 18-Section Terms of Service (TikTok & YouTube integrations, Indonesian law)
├── privacy.html            # 18-Section Privacy Policy (Local processing, Google User Data Policy, UU PDP)
├── assets/
│   ├── css/
│   │   └── style.css       # Clean SaaS typography (navy typography, purple/blue accents, responsive)
│   └── js/
│       └── main.js         # Mobile nav toggle, Table of Contents scrollspy & back-to-top button
└── README.md               # Repository documentation & compliance summary
```

---

## 5. Audit & Compliance Status

All initial draft placeholders have been replaced with confirmed application data:

* [x] **Owner Identity:** Moh Fahmi Muzaki
* [x] **Contact Email:** `mfmzacky4@gmail.com`
* [x] **Country / Jurisdiction:** Indonesia (UU PDP Law No. 27 of 2022)
* [x] **Effective & Last Updated Date:** November 5, 2026
* [x] **Canonical & Open Graph URLs:** `https://muzzacky04.github.io/funny-clipper/`
* [x] **YouTube API Integration:** Documented with `https://www.googleapis.com/auth/youtube.upload`, private visibility, and Google User Data Policy Limited Use compliance.
* [x] **TikTok API Integration:** Documented with `video.upload`, inbox draft destination, and TikTok Login Kit.
* [x] **Local Execution Boundary:** Accurately documents FFmpeg, Faster Whisper, Ollama, and n8n running locally.

---

## 6. Submitting URLs to Developer Portals

### For TikTok Developer Review:
* **Terms of Service URL:** `https://muzzacky04.github.io/funny-clipper/terms.html`
* **Privacy Policy URL:** `https://muzzacky04.github.io/funny-clipper/privacy.html`
* **Scope requested:** `video.upload` (inbox draft mode)

### For Google Cloud Console / YouTube API Verification:
* **Application Homepage:** `https://muzzacky04.github.io/funny-clipper/`
* **Privacy Policy URL:** `https://muzzacky04.github.io/funny-clipper/privacy.html`
* **Terms of Service URL:** `https://muzzacky04.github.io/funny-clipper/terms.html`
* **Authorized redirect URIs (local desktop app):** `http://127.0.0.1:8080`

---

## 7. Deployment Commands

To deploy updates to GitHub Pages:

```powershell
# Review git status
git status

# Stage updated legal files
git add index.html terms.html privacy.html assets/ README.md

# Commit revisions
git commit -m "docs: audit and update legal website for TikTok and YouTube API compliance"

# Push to GitHub
git push origin main
```
