# Funny Clipper — Official Legal & Documentation Website

This repository hosts the official static legal and developer documentation website for **Funny Clipper**, an automated video clipping application.

The site is configured for direct public hosting on **GitHub Pages** and serves as the official **Terms of Service URL** and **Privacy Policy URL** for the **TikTok for Developers** application review process.

---

## 1. Live URLs (GitHub Pages)

Once deployed to GitHub Pages on this repository, the canonical public URLs are:

| Page | URL |
|---|---|
| **Homepage** | `https://muzzacky04.github.io/funny-clipper/` |
| **Terms of Service** | `https://muzzacky04.github.io/funny-clipper/terms.html` |
| **Privacy Policy** | `https://muzzacky04.github.io/funny-clipper/privacy.html` |

*(If using a different GitHub account, replace `muzzacky04` with your GitHub username).*

---

## 2. Repository Structure

```text
funny-clipper/
├── index.html              # Professional SaaS homepage & developer introduction
├── terms.html              # Complete 18-section Terms of Service
├── privacy.html            # Complete 16-section Privacy Policy for TikTok Developer integration
├── assets/
│   ├── css/
│   │   └── style.css       # Clean, modern, responsive SaaS styling (navy typography, purple/blue accents)
│   └── js/
│       └── main.js         # Accessible navigation toggle, TOC scrollspy, and back-to-top button
└── README.md               # Repository documentation & pre-launch compliance checklist
```

---

## 3. Product & Integration Overview

* **Product Description:** Funny Clipper is a video clipping automation tool that helps creators identify interesting or entertaining moments from longer videos, create short-form clips, add synchronized vertical subtitles, and stage selected clips for social media sharing.
* **TikTok Integration:**
  * Uses the official TikTok Login Kit for OAuth 2.0 authorization.
  * Requests the `video.upload` scope.
  * Uploads selected video clips exclusively to the authenticated creator's **TikTok inbox as drafts**.
  * **No automatic public publishing:** Creators must manually review, inspect, add tags, and publish drafts within the official TikTok mobile app.
* **Platform Disclaimer:** Funny Clipper is an independent application and is not affiliated with, endorsed by, sponsored by, or owned by TikTok, ByteDance, Google, or YouTube.

---

## 4. Pre-Launch Confirmation Checklist (Required Placeholders)

Before submitting your URLs to TikTok Developer Review, search the codebase for the following placeholders and update them with your confirmed details:

| Placeholder | Meaning / Recommended Action | Files Containing Placeholder |
|---|---|---|
| `[OWNER NAME]` | Your legal name or registered entity name | `index.html`, `terms.html`, `privacy.html` |
| `[CONTACT EMAIL]` | Official support / privacy contact email | `index.html`, `terms.html`, `privacy.html` |
| `[COUNTRY / JURISDICTION]` | Governing country / state / legal jurisdiction | `index.html`, `terms.html`, `privacy.html` |
| `[EFFECTIVE DATE]` | Date when policies take legal effect (e.g., `November 5, 2026`) | `terms.html`, `privacy.html` |
| `[GITHUB_USERNAME]` | Replace with `muzzacky04` in `<link rel="canonical">` and Open Graph tags | `index.html`, `terms.html`, `privacy.html` |

> **Note:** Placeholders are styled with a distinct yellow badge (`.placeholder`) in the HTML so they are easily identifiable in browser previews.

---

## 5. Technical Facts & Verification Notes

* **Local Execution:** Funny Clipper runs locally on Windows workstations. Authentication tokens (`access_token`, `refresh_token`) and media files are stored locally in the user's workspace.
* **No Unverified Security Claims:** The policies make no unverified claims of military-grade encryption, automated cloud deletion portals, or specialized data certifications (ISO/SOC).
* **Data Deletion:** The Privacy Policy clearly documents that users can revoke TikTok app permissions directly inside the TikTok mobile application (`Settings and Privacy > Security & Permissions > Manage App Permissions > Remove Access`) and delete local credential files on Windows.

---

## 6. How to Deploy on GitHub Pages

1. **Commit and Push changes to GitHub:**
   ```bash
   git add index.html terms.html privacy.html assets/ README.md
   git commit -m "feat: implement official legal website for TikTok Developer review"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   * Open your repository on GitHub: `https://github.com/muzzacky04/funny-clipper`
   * Go to **Settings** &rarr; **Pages** (under the "Code and automation" section).
   * Under **Build and deployment**:
     * **Source:** Select `Deploy from a branch`.
     * **Branch:** Select `main` branch and `/ (root)` folder.
     * Click **Save**.

3. **Verify Deployment:**
   * Within 1–3 minutes, GitHub Pages will deploy your site at:
     * `https://muzzacky04.github.io/funny-clipper/`
     * `https://muzzacky04.github.io/funny-clipper/terms.html`
     * `https://muzzacky04.github.io/funny-clipper/privacy.html`

---

## 7. Submitting to TikTok Developer Portal

When creating or updating your app in the [TikTok for Developers Portal](https://developers.tiktok.com/):

1. **Terms of Service URL:**
   ```text
   https://muzzacky04.github.io/funny-clipper/terms.html
   ```
2. **Privacy Policy URL:**
   ```text
   https://muzzacky04.github.io/funny-clipper/privacy.html
   ```
3. **Requested Scope:**
   * `video.upload` (Content Posting API - inbox draft upload)
4. **App Category / Description:**
   * Video Editing / Utility tool facilitating draft uploads for creator review.
