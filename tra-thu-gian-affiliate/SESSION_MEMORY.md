# Session Memory - Tra Thu Gian Affiliate

Last updated: 2026-07-21

## Canonical Working Location (DO NOT ASK AGAIN)
- Repo root (current, corrected): `D:\Hungniwaco\CODEX\Tra-thu-gian`
- App root: `D:\Hungniwaco\CODEX\Tra-thu-gian\tra-thu-gian-affiliate`
- Always edit inside the app root above. (Older path `D:\Hungniwaco\Claude Code\tra-thu-gian-website` is stale — do not use.)
- User's terminal opens at `C:\Users\thinh` by default (PowerShell). Since the repo is on the D: drive, any instruction must include switching drives first, e.g. `cd "D:\Hungniwaco\CODEX\Tra-thu-gian\tra-thu-gian-affiliate"` works directly in PowerShell (full path jumps drives), but a bare `cd tra-thu-gian-affiliate` from `C:\Users\thinh` will fail with PathNotFound. Always give the full absolute path.
- User is not deeply familiar with git — always give exact, literal, copy-pasteable commands, not abstract instructions.

## Sandbox / Build Environment Limitation (IMPORTANT)
- The agent's bash sandbox is Linux, but `node_modules` here was installed on the user's Windows machine — only `@next/swc-win32-x64-msvc` is present, no Linux SWC binary, and the sandbox has no network access to fetch one from npm registry (`EAI_AGAIN` on registry.npmjs.org).
- Result: running `next build` (or `npm run build`) inside this sandbox hangs indefinitely after printing only the "▲ Next.js 14.2.5" banner. Do NOT attempt full `next build` in the sandbox — it will not complete.
- Correct validation strategy from the sandbox: run `npx tsc --noEmit -p tsconfig.json`. This is fast, type-checks all changes, and reliably catches errors without needing the native SWC binary.
- Full `next build` only needs to run on the user's actual Windows machine (has the matching win32 binary) or on GitHub Actions' `ubuntu-latest` runner (installs matching linux binary via `npm ci`). Both work fine — this is purely a sandbox constraint, not a real project issue.
- Occasionally a stray `.git/index.lock` or `tsconfig.tsbuildinfo` may appear un-removable from the sandbox (`Operation not permitted`) due to the live Dropbox/network-mount nature of the folder — this is transient and resolves on the user's own machine; don't fight it from the sandbox.

## Repo / Deploy (Locked)
- Remote: `https://github.com/hungniwaco-stack/trathugian.git`
- Branch: `main`
- Public URL: `https://hungniwaco-stack.github.io/trathugian/`
- Deploy via GitHub Actions (Pages).
- Typical propagation time: 1-3 minutes after push.

## User Preferences (Locked)
- Execute directly, minimal back-and-forth.
- Push immediately when user asks.
- Keep confirmations concise.
- Vietnamese content, correct diacritics, readable typography.

## Branding (Final)
- Header logo image source: `public/images/brand/logo.png`.
- Header text must show: `TRÀ THƯ GIÃN` (uppercase, bold, prominent).
- Current logo source file originally provided: `Logo.png` at app root.

## Typography (Final)
- Vietnamese typography standardized globally in `app/globals.css`:
  - VN-safe font stack
  - unified H1/H2/H3 hierarchy
  - improved line-height for long headings
  - overflow-wrap to prevent breakage
- Navbar text style:
  - bold, high contrast
  - hover underline accent

## Homepage Design (Final)
- Keep hero banner + mini weekly banner.
- Do not show internal changelog/dev update block on homepage.

## Product Image Mapping (Locked Order)
Folder: `public/images/products/`
1. `01.webp` -> Trà Tâm Sen (`tam-sen-say-kho`)
2. `02.webp` -> Trà Hoa Cúc Mật Ong (`tra-hoa-cuc-mat-ong`)
3. `03.webp` -> Lavender (`tra-lavender-ngu-ngon`)
4. `04.webp` -> Gạo Lứt Đậu Đỏ (`tra-gao-lut-dau-do`)
5. `05.webp` -> Hoa Nhài Nở (`tra-hoa-nhai-goji`)
6. `06.jpg` -> Cam Quế Hoa Hồng (`tra-cam-thao-tao-do`)

## Affiliate Links (Locked)
- Tam sen: `https://s.shopee.vn/5ApfBMndXs`
- Hoa cúc mật ong: `https://s.shopee.vn/70HK7MPvCJ`
- Lavender: `https://s.shopee.vn/8KmhiWBfIX`
- Gạo lứt đậu đỏ: `https://s.shopee.vn/5q5MkQnhX2`
- Hoa nhài nở: `https://s.shopee.vn/110704kJcg`
- Cam quế hoa hồng: `https://s.shopee.vn/2LVUgtdj5Y`

## Content / SEO-GEO Rules (Locked)
- Avoid prefixing every title with "Review".
- Article template should include:
  - direct intro
  - TOC
  - quick summary
  - suitability blocks
  - FAQ
  - compare/checklist blocks for review intent
- Structured data enabled for current strategy: `Article`, `FAQPage`, `BreadcrumbList`.
- Do not use `Product` schema on affiliate review posts unless full merchant fields are available, to avoid invalid rich result items in Search Console.
- `robots.ts` + `sitemap.ts` are required and present.
- Date display format must be: `dd/mm/yyyy`.

## Contact (Locked)
- Contact email in `/lien-he`: `hatmuadem@gmail.com`.

## 10-Day SEO Sprint Status
- Plan chosen: 10-day sprint (not 30-day).
- Day 1 completed and pushed in commit: `8c5d944`
  - title/meta intent optimization
  - internal linking map via `relatedSlugs`
  - category SEO description improvements
- Day 2 completed (local, pending push)
  - upgraded Article schema `dateModified` to ISO format (`yyyy-mm-dd`) for machine readability
  - added conditional `Product` JSON-LD on review posts in `app/bai-viet/[slug]/page.tsx`
  - kept UI date format `dd/mm/yyyy` unchanged for Vietnamese readability
  - follow-up fix pushed: removed `Product` JSON-LD to avoid invalid merchant snippet requirements on affiliate pages
- Day 3 completed (content optimization)
  - refined review support data in `data/site.ts` with `bestFor` / `notFor` across review posts
  - improved category/trust page readability and Vietnamese typography consistency
- Day 6 partially completed (trust signals)
  - refreshed `/ve-chung-toi`, `/lien-he`, `/dieu-khoan-su-dung`, `/chinh-sach-affiliate` with clearer policy language
- Day 7 check completed
  - production build passed successfully (`npm run build`)
  - `robots.ts` and `sitemap.ts` validated as present and serving static output
- Day 4 completed (topic cluster hub-spoke)
  - added hub-spoke blocks in category pages (`Bài trụ cột`, `Lộ trình đọc`, `Khám phá cụm liên quan`)
  - added homepage section `Cụm nội dung theo mục tiêu` linking to pillar posts
  - pushed in commit `950adb6`
- Day 5 completed (CTR optimization)
  - rewrote metadata title/description for key categories: `/tra-ngu-ngon`, `/giam-stress`, `/review-tra`
  - improved snippet descriptions for 3 pillar posts in `data/site.ts`
  - pushed in commit `6b94e74`
- Day 6 completed (trust / transparency)
  - improved trust pages copy and added `Cập nhật lần cuối: 30/05/2026`
  - synchronized affiliate transparency in footer
  - pushed in commit `e3542a2`
- Day 7 round 2 completed (technical cleanup)
  - removed legacy route `/review/tra-tam-sen-say-kho-giup-ngu-ngon-thanh-nhiet/`
  - removed legacy URL from sitemap
  - pushed in commit `0efa003`
  - fixed canonical tags for top-level pages (moved away from inherited `/`)
  - pushed in commit `076d0ad`
  - updated article displayed date to `30/05/2026`
  - pushed in commit `43f9796`

## Encoding / Quality Guardrails
- If any Vietnamese text appears mojibake (e.g. `trÃ `, `Vá»`), rewrite file content in UTF-8 immediately.
- Keep diacritics correct in all metadata titles/descriptions and visible headings.

## Canonical Rules (Locked)
- Do NOT set `alternates.canonical: "/"` in `app/layout.tsx` (causes wrong canonical inheritance).
- Set canonical per top-level page explicitly:
  - `/` -> `/`
  - `/tra-ngu-ngon/`, `/giam-stress/`, `/review-tra/`, `/healthy-lifestyle/`, `/kien-thuc-tra/`
  - `/ve-chung-toi/`, `/chinh-sach-affiliate/`, `/lien-he/`, `/dieu-khoan-su-dung/`
- Dynamic article pages keep canonical via `generateMetadata` in `app/bai-viet/[slug]/page.tsx`.

## Production Verification Playbook (Locked)
- Primary public domain for runtime checks: `https://trathugian.shop` (not GitHub Pages URL).
- After each push, validate on production:
  1) One category page (`/review-tra/`) for metadata/canonical/hub-spoke
  2) One article page (`/bai-viet/...`) for date + schema (`Article`, `FAQPage`, `BreadcrumbList`)
  3) `sitemap.xml` for legacy URL cleanup
- If user still sees old content: ask for `Ctrl + F5` or Incognito check due to browser/CDN cache.

## Current Git Context
- Ignore untracked files unless user asks: `AGENTS.md`, `tra-thu-gian-affiliate/Logo.png`.

## Operational Playbook
- If user says "chưa cập nhật":
  1) confirm commit on `main`
  2) remind 1-3 min deploy delay
  3) hard refresh public URL
- Prefer public URL validation over localhost when in-app loopback is unstable.
- To confirm a deploy actually succeeded, fetch `https://github.com/hungniwaco-stack/trathugian/actions` directly (mcp__workspace__web_fetch works fine on this public page) and check the top run for a green check + matching commit message, instead of asking the user to screenshot every time. Typical run time is 35s-1m20s.
- Standard deploy instruction sequence to give the user (always full paths, always in this order):
  ```
  cd "D:\Hungniwaco\CODEX\Tra-thu-gian\tra-thu-gian-affiliate"
  npm run build
  cd ..
  git add .
  git commit -m "..."
  git push
  ```

## Content Model (2026-07-21 rewrite — E-E-A-T overhaul)

`data/site.ts` is the single source of truth for all article content and product data.

- **Author persona (locked):** Minh Thư — nhân viên văn phòng 28 tuổi, từng mất ngủ 2 năm vì stress công việc. `export const author` object with `name`, `url` (`/tac-gia/minh-thu/`), `bio`, `avatar`. All articles write in first person ("mình"), signed by this persona. Do not invent a different persona — this one is final.
- **BlogPost type fields:** `slug, title, description, category, productId?, relatedSlugs?, intro, toc, quickSummary?, bestFor?, notFor?, body (BodySection[]: heading + paragraphs[]), comparisonTable?, rating?, pros?, cons?, priceNote?, datePublished, dateModified, faqs`.
- **Categories:** `tra-ngu-ngon | giam-stress | review-tra | healthy-lifestyle | kien-thuc-tra`.
- **Current post count: 16** — 11 original articles rewritten from thin/outline content into full first-person E-E-A-T prose (deployed as commit `73d8242`, run #31), plus 5 new Phase 3 "satellite" articles added 2026-07-21 (commit `c699253`, run #33) to deepen the hub-and-spoke topic cluster:
  1. `vi-sao-dan-van-phong-mat-ngu-kinh-nien-5-cach-khong-dung-thuoc` (tra-ngu-ngon)
  2. `so-sanh-tra-hoa-cuc-va-lavender-nen-chon-loai-nao` (review-tra)
  3. `cach-pha-tra-tam-sen-khong-bi-dang` (kien-thuc-tra)
  4. `dau-hieu-stress-vi-cong-viec-va-cach-xu-ly` (giam-stress)
  5. `ca-phe-chieu-gay-mat-ngu-nen-thay-bang-tra-gi` (giam-stress)
- **Hub-and-spoke cross-linking:** each post's `relatedSlugs` should point to its hub + closest siblings. The per-category "Lộ trình đọc theo nhu cầu" block on category pages comes from a hardcoded `clusterMap` in `components/CategoryPage.tsx` (hubSlug + 3 spokeSlugs per category, manually curated) — when adding new posts, update both `relatedSlugs` on nearby existing posts AND the relevant category's `spokeSlugs` in that clusterMap, don't rely on automatic inclusion.
- **Article page rendering:** `app/bai-viet/[slug]/page.tsx` — per-article `generateMetadata` with real `openGraph`/`twitter` (previously all articles wrongly inherited the homepage's static OG — this was the documented bug, now fixed). Article JSON-LD includes `image` (built from `productForPost.image`, fell back to logo), `author: Person` (not Organization), `publisher.logo` — these were added specifically to satisfy a Google Rich Results Test "non-critical issue" flag; keep them.
- **Schema constraint (locked, do not violate):** Never add full `Product` schema with fake price/availability to affiliate posts — removed deliberately in commit `24bdf8dcb` ("fix: remove Product schema from affiliate posts to avoid invalid merchant snippets"). `FAQPage` schema stays even though Google restricts FAQ rich results to authoritative sites since 2023 — it's still valid for GEO/AI-engine citability, not a bug that it doesn't show as a Google rich result.
- **Organization schema** (`app/page.tsx`) has no `sameAs` yet — no real Facebook/Shopee page links exist yet. Add them the moment the user provides real URLs.
- **llms.txt** exists at `public/llms.txt` for GEO — update its featured-articles list if the featured posts change materially.

## Outstanding Backlog (updated 2026-07-22)

Source of truth for the full plan: `D:\Dropbox\01. DỰ ÁN 2026\INDEX\trathugian.shop\ke-hoach-toi-uu-trathugian.md` (Phases 0-5 + appendices).

**Done 2026-07-22 (technical quick-wins batch, pushed after this):**
- Added `width`/`height`/`loading` to all 4 remaining raw `<img>` tags (`components/CardSet.tsx` product-image now `1024x1024`, `components/LayoutBits.tsx` logo now `84x56` eager, `app/tac-gia/minh-thu/page.tsx` avatar `56x56` lazy, `app/bai-viet/[slug]/page.tsx` author box avatar `56x56` lazy). Real source image dims verified via PIL before choosing values (products are ~1024x1024 square except 06.jpg at 469x467; logo.png is 1536x1024).
- Rewrote meta descriptions to land in 140-160 chars on: `app/page.tsx`, `app/healthy-lifestyle`, `app/kien-thuc-tra`, `app/review-tra`, `app/tra-ngu-ngon`, `app/giam-stress`, and trimmed `app/ve-chung-toi` down from 162 to 147.
- Validated via `tsc --noEmit` (clean) before handing off to user for build/push.

**Needs user input first:**
- Real Facebook/Shopee page links → add to `sameAs` in Organization schema.
- `public/images/products/06.jpg` still not converted to WebP (01-05 already are).
- Real self-shot experience photos (product in hand, brewed tea, cup next to laptop) — Phase 0 of the original plan called for these; site still uses product stock photos, not real experience photos. This is the single biggest remaining E-E-A-T gap.

**User must do outside code:**
- www→non-www redirect: not possible from Next.js static export config; needs a DNS/registrar-level rule.
- Register Google Search Console + submit sitemap if not already done (needed for Phase 5 measurement).

**Not started at all:**
- Phase 4 (social distribution): TikTok cut-downs, Pinterest, Facebook Page.
- Phase 5 (measurement): PageSpeed Insights check, Facebook Sharing Debugger real test, 30-day re-audit against original SEO(44)/GEO(50) baseline, target ≥70/≥75.
