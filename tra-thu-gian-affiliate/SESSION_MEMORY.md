# Session Memory - Tra Thu Gian Affiliate

Last updated: 2026-05-30

## Canonical Working Location (DO NOT ASK AGAIN)
- Standalone root: `D:\Hungniwaco\Claude Code\tra-thu-gian-website`
- App root: `D:\Hungniwaco\Claude Code\tra-thu-gian-website\tra-thu-gian-affiliate`
- Always edit inside the app root above.

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
