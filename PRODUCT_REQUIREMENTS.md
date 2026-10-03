# AJOracle Website V2 --- Product Requirements

**Document:** `PRODUCT_REQUIREMENTS.md`\
**Product:** AJOracle Website V2\
**Platform:** Web\
**Planned framework:** Next.js\
**Status:** Focused V1 scope for design and architecture planning\
**Role:** Product source of truth for the AJOracle Website V2

------------------------------------------------------------------------

## 1. Purpose

This document defines **what the AJOracle Website V2 must do**.

The website is a focused redesign and modernization of the existing
AJOracle website. It is not intended to become a browser version of the
AJOracle mobile application or a large new standalone product.

This document guides design, architecture, implementation, content
migration, QA, and Codex development. Detailed visual rules belong in
`DESIGN_SYSTEM.md`; implementation decisions belong in
`ARCHITECTURE_ENGINEERING.md`.

Codex must not expand scope beyond this document without an explicit
product decision.

------------------------------------------------------------------------

## 2. Product Context

AJOracle has three primary application surfaces:

1.  **Public Website** --- Next.js, deployed on Vercel.
2.  **Mobile Application** --- Flutter, distributed through the Apple
    App Store and Google Play Store.
3.  **Admin Dashboard / CMS** --- web application, deployed on Vercel.

Supabase provides the shared data/backend platform.

Planned repository model:

``` text
ajoracle-web
  Public Next.js website
  Website-specific server/data-access code

ajoracle-mobile
  Flutter mobile application

ajoracle-cms
  Admin dashboard
  CMS-specific server logic
  Canonical Supabase migrations/backend definitions
```

The CMS is the administration interface for shared content. It is not
intended to be a mandatory API gateway for every website or mobile read
request.

------------------------------------------------------------------------

## 3. Website Vision

AJOracle.com should become a substantially more polished, premium,
modern version of the existing artist website while preserving its
straightforward public purpose.

The rebuild should:

-   Significantly improve visual quality and UX.
-   Preserve the useful core structure and content of the existing
    website.
-   Change structure/content only where there is a genuine reason.
-   Remove weak, stale, duplicate, placeholder, or outdated
    presentation.
-   Make frequently changing content manageable through the AJOracle
    CMS.
-   Integrate naturally with the wider AJOracle ecosystem without
    duplicating the mobile app.

Target qualities: premium, elegant, spiritual, cinematic, modern, dark,
clean, calm, and content-focused.

------------------------------------------------------------------------

## 4. Scope Principle

> **Improve deeply, expand selectively.**

Website V2 is primarily a redesign and modernization project.

The website should not be expanded simply because the shared backend or
mobile app makes additional functionality technically possible. New
functionality should be introduced only when it provides clear
public-web value, solves an existing content-management problem, or is
required to support the mobile product.

------------------------------------------------------------------------

## 5. Primary Goals

Website V2 should:

1.  Give AJOracle a significantly stronger public web presence.
2.  Present AJOracle's identity, music, visual content, stories, and
    background effectively.
3.  Make current releases easy to discover.
4.  Make approved videos easy to discover.
5.  Preserve and improve the existing news/blog capability.
6.  Tell AJOracle's story with stronger visual/editorial presentation.
7.  Allow AJOracle to manage frequently changing website content without
    developer intervention.
8.  Connect naturally to the AJOracle mobile app when appropriate.
9.  Provide required public legal, privacy, support, or account-deletion
    destinations.
10. Maintain strong responsive, accessibility, SEO, and performance
    foundations.

------------------------------------------------------------------------

## 6. Website vs Mobile Application

### Website responsibilities

-   Public AJOracle brand presence
-   Public release/music discovery
-   Public video discovery
-   News/blog/editorial content
-   Artist biography/story
-   Contact
-   Search-engine discovery
-   Social sharing destinations
-   Appropriate mobile-app promotion
-   Required public legal/support/account-deletion information

### Mobile-app responsibilities

The website should not duplicate:

-   General website user accounts
-   Favorites
-   User playlists
-   Playback history
-   Personal library
-   Premium entitlement management
-   In-app subscription flows
-   Offline downloads
-   Push-notification preferences
-   Other personalized streaming-app functionality

These remain mobile/backend responsibilities unless the product scope is
explicitly expanded.

------------------------------------------------------------------------

## 7. V1 Sitemap

Keep the useful structure of the existing AJOracle website.

``` text
/
|-- /releases
|-- /videos
|-- /news
|   `-- /news/[slug]
|-- /about
`-- /contact
```

Utility/product pages should be added only where required:

``` text
/privacy
/terms
/account-deletion
/support
```

A dedicated `/app` marketing page is not required for V1. The mobile app
can be promoted through appropriate website sections/CTAs once the app
and store destinations are ready.

Final route naming should consider existing URLs and redirect
requirements.

------------------------------------------------------------------------

## 8. Homepage `/`

### Purpose

Create a much stronger first impression while retaining the existing
homepage's core purpose: introduce AJOracle and guide visitors toward
current music, selected content, stories, and contact/discovery.

### Direction

The homepage requires a major visual/UX redesign but not a large
functional expansion.

Potential core sections:

-   Hero / AJOracle introduction
-   Latest or featured release
-   Selected music / Oracle Picks
-   Featured video or visual content
-   Latest news/blog posts
-   Short artist/story introduction where useful
-   Mobile-app promotion when ready
-   Final CTA / contact or discovery section

Final order/composition belongs to the design phase.

Existing concepts worth evaluating for preservation include Latest
Release, Oracle Picks, featured visual/video content, news/posts, artist
identity, and contact/discovery CTA.

Do not copy the existing layout directly.

------------------------------------------------------------------------

## 9. Releases `/releases`

### Purpose

Improve the existing Latest Releases experience with a cleaner, scalable
presentation of approved AJOracle releases.

### Requirements

-   Display approved published releases.
-   Clearly identify recent/latest content.
-   Present high-quality artwork.
-   Include relevant release information.
-   Include approved listening/platform links.
-   Use CMS-managed release data.
-   Routine publishing must not require a website code change or manual
    Vercel deployment.
-   Work well across mobile and desktop.
-   Support appropriate page-level SEO/social metadata.

### Release detail pages

Dedicated `/releases/[slug]` pages are **not mandatory for V1**. Add
them only if design/content planning establishes clear value for
storytelling, SEO, sharing, or linking.

Codex must not assume they are required.

------------------------------------------------------------------------

## 10. Videos `/videos`

### Purpose

Provide a polished destination for approved AJOracle public video
content.

### Requirements

-   Present approved videos dynamically from CMS-managed data.
-   Support featured-video presentation where useful.
-   Show appropriate title, thumbnail, description, date, or related
    metadata where available.
-   Use an approved video source/delivery method.
-   Remove production-facing placeholder content unless explicitly
    approved.
-   Routine publishing must not require website code changes.

Videos should be CMS-managed because they are recurring content.

The CMS may store video metadata and an approved source/reference rather
than requiring the website to host raw video files.

Dedicated `/videos/[slug]` pages are optional, not mandatory for V1.

------------------------------------------------------------------------

## 11. News / Blog `/news`

### Purpose

Preserve and improve the existing editorial/news capability.

### Requirements

-   List approved published posts.
-   Be CMS-driven.
-   Support featured imagery.
-   Show relevant publication metadata.
-   Navigate clearly to individual posts.
-   Support responsive layouts.
-   Scale to more content over time.

The public label may remain **News** unless another label is explicitly
approved. Renaming it is not required merely because the website is
being redesigned.

------------------------------------------------------------------------

## 12. News Detail `/news/[slug]`

Individual posts are a required dynamic content type.

Support:

-   Title
-   Slug
-   Featured image where provided
-   Publication date
-   Article content
-   Author information if required
-   SEO title/description where supported
-   Social-sharing metadata
-   Related content only if justified
-   Strong long-form readability

Existing WordPress articles must be reviewed individually before
migration.

------------------------------------------------------------------------

## 13. About `/about`

### Purpose

Preserve AJOracle's existing story while substantially improving visual
presentation, readability, hierarchy, and content quality.

Existing themes to review for preservation include:

-   Story Behind the Voice
-   Artist identity
-   Faith
-   Music
-   Heritage
-   Purpose
-   Family, love, and legacy
-   Existing tribute/memory content

Requirements:

-   Review existing content before migration.
-   Do not carry forward duplicate text.
-   Correct typographical/formatting problems.
-   Keep personal/story content subject to client approval.
-   Do not invent new biographical claims.

The About page does not need CMS editing in V1 unless a clear recurring
editing requirement emerges.

------------------------------------------------------------------------

## 14. Contact `/contact`

Provide a simple, professional official contact route.

Baseline requirements:

-   Name
-   Email
-   Message
-   Validation
-   Accessible labels/error states
-   Spam/abuse protection
-   Clear success/failure feedback
-   Secure server-side handling

Additional inquiry categories should only be added if confirmed by the
client.

A complex CRM/CMS workflow is not required.

------------------------------------------------------------------------

## 15. Mobile App Promotion

Support promotion of the AJOracle mobile app once appropriate assets and
store links are available.

This does not require a dedicated app microsite.

Possible placements:

-   Homepage section
-   Header CTA
-   Footer CTA
-   Relevant content areas
-   Promotional banner/block

Final placement belongs to design.

Do not display unconfirmed store availability.

------------------------------------------------------------------------

## 16. Utility, Legal, and App-Support Pages

These exist to satisfy real product/legal requirements, not to expand
the marketing site.

### `/privacy`

Publish approved privacy policy content when required. Codex must not
invent legal copy.

### `/terms`

Publish approved terms if required.

### `/account-deletion`

Provide the public destination required by the approved account-deletion
process. It may explain or initiate the workflow depending on final
mobile/backend requirements. Any action must use a secure approved
backend flow.

### `/support`

Create a dedicated support page only if the mobile product/client
requires it. Otherwise support may use existing contact/legal flows.

------------------------------------------------------------------------

## 17. CMS Scope for the Website

Keep website CMS integration intentionally focused.

The three primary recurring website content types are:

``` text
CMS
|
|-- Releases
|-- Posts
`-- Videos
```

### Releases

AJOracle should be able to create/edit release metadata, artwork and
platform links; save draft where supported; publish; update;
unpublish/archive where supported; and control appropriate featured
state if included in the final model.

Published release data should become available to the website
automatically and to mobile where relevant.

### Posts

AJOracle should be able to create/edit title, content, featured image,
slug/SEO fields where supported; save draft; publish; update; and
unpublish/archive.

Published posts should update the website without developer
intervention.

### Videos

AJOracle should be able to create/edit title, thumbnail/artwork,
approved video source/reference, description and relevant metadata; save
draft; publish; update; unpublish/archive; and mark featured where
supported.

Published videos should update the website automatically and be
available to mobile where applicable.

------------------------------------------------------------------------

## 18. What Should Not Be CMS-Managed by Default

Do not recreate a general-purpose WordPress page builder.

Unless a real requirement emerges, keep these code/config-managed:

-   Main navigation
-   Footer structure
-   Homepage layout
-   Homepage evergreen marketing copy
-   About page structure/content
-   Contact page layout
-   Static CTA wording
-   General website section arrangement
-   Design-system settings
-   Arbitrary page creation

The CMS manages **content that changes regularly**, not the website's
design.

------------------------------------------------------------------------

## 19. Admin Publishing Workflow

Routine publishing follows:

> **Create once, publish once, make the content available to the
> relevant AJOracle products.**

Example release flow:

``` text
AJOracle Admin
      |
      v
Admin Dashboard
      |
      v
Create / Edit Release
      |
      v
Draft / Review
      |
      v
Publish
      |
      v
CMS server validation
      |
      +--------------------+
      |                    |
      v                    v
Media services          Supabase
                       metadata/data
                            |
                 +----------+----------+
                 |                     |
                 v                     v
            Flutter App           Next.js Website
            refresh/query         revalidate/cache
                 |                     |
                 v                     v
            Release appears       Release appears
```

The CMS should not manually send separate copies to the website and
mobile app.

The website should normally consume approved shared data through its own
server/data-access layer rather than calling the CMS application as its
public data API.

------------------------------------------------------------------------

## 20. Repository and Backend Ownership

### `ajoracle-web`

Owns:

-   Public Next.js frontend
-   Website-specific server logic
-   Website data-access/query layer
-   Contact handling
-   Web caching/revalidation
-   Web SEO implementation
-   Web analytics integration

### `ajoracle-mobile`

Owns:

-   Flutter mobile application
-   Mobile-specific data/repository layer
-   Mobile UI/application functionality

### `ajoracle-cms`

Owns:

-   Admin dashboard
-   Privileged content-management workflows
-   CMS server-side logic
-   Canonical Supabase project/migrations
-   Shared schema evolution
-   Appropriate trusted backend functions

### Supabase

Provides shared backend services/data.

There must be **one canonical migration history** for the shared
production database. Website and mobile repositories must not
independently maintain competing migration histories.

------------------------------------------------------------------------

## 21. Content Ownership

  ----------------------------------------------------------------------------------------
  Content / Capability                       Website               Mobile Primary
                                                                          Management
  ----------------------------- -------------------- -------------------- ----------------
  Releases metadata                              Yes                  Yes CMS/shared
                                                                          backend

  Release artwork                                Yes                  Yes CMS/shared media

  Audio/media references                 As required                  Yes CMS/shared
                                                                          backend/media

  Videos metadata                                Yes Yes where applicable CMS/shared
                                                                          backend

  Blog/news posts                                Yes         Not required CMS/shared
                                                                          backend

  Artist biography                               Yes            As needed Website/code
                                                                          unless changed

  Homepage structure                             Yes                   No Website/code

  Website SEO implementation                     Yes                   No Website

  User profiles                                   No                  Yes Mobile/backend

  Favorites/playlists/history                     No                  Yes Mobile/backend

  Membership/entitlements                         No                  Yes Mobile/backend

  Offline downloads                               No                  Yes Mobile/backend

  Contact form                                   Yes                   No Website/server

  Privacy/legal content                          Yes     Linked as needed Approved
                                                                          legal/product
                                                                          content

  Account deletion              Public entry/info as                  Yes Secure shared
                                            required                      backend workflow
  ----------------------------------------------------------------------------------------

This is a product responsibility model, not a finalized database schema.

------------------------------------------------------------------------

## 22. WordPress Content Migration

The existing WordPress site is a **content and brand reference**, not an
automatic migration source.

### Review for preservation

-   AJOracle biography/story
-   Approved artist imagery
-   Existing release information
-   Oracle Picks concept
-   Approved videos
-   Existing news/articles
-   Contact information
-   Existing URLs with search value

### Improve during migration

Resolve:

-   Duplicate copy
-   Typographical errors
-   Formatting problems
-   Stale release information
-   Placeholder content
-   Outdated links
-   Inconsistent naming
-   Weak content hierarchy

### Do not automatically migrate

-   Unapproved content
-   Placeholder content
-   Obsolete content
-   WordPress-specific layout markup
-   Duplicate data
-   Anything excluded from the approved production catalog

Prepare redirects for valuable legacy URLs that change.

------------------------------------------------------------------------

## 23. Brand and Visual Experience

The website should share AJOracle's wider identity while being
intentionally designed for responsive web.

Target qualities:

-   Premium
-   Elegant
-   Spiritual
-   Cinematic
-   Modern
-   Dark
-   Clean
-   Calm
-   Content-focused
-   Strong imagery/artwork

Use gold intentionally and with restraint.

Avoid:

-   Generic WordPress/template appearance
-   Generic AI-generated music-app appearance
-   Gaming aesthetics
-   Neon/cyberpunk styling
-   Flashy/excessive gold
-   Excessive cards/clutter
-   Copying Flutter screen layouts onto web pages
-   Unnecessary over-design

Final web visual rules belong in `DESIGN_SYSTEM.md`.

------------------------------------------------------------------------

## 24. Responsive and Accessibility Requirements

Provide a strong experience across mobile, tablet, laptop, and desktop.

Baseline requirements:

-   Semantic HTML
-   Keyboard-accessible interactions
-   Visible focus states
-   Accessible navigation
-   Accessible forms/validation
-   Appropriate contrast
-   Alternative text for meaningful images
-   Logical heading hierarchy
-   Responsive media
-   Appropriate touch targets
-   Reduced-motion consideration
-   No essential interaction dependent only on hover

------------------------------------------------------------------------

## 25. SEO Requirements

Preserve or improve the site's search foundation without unnecessary
complexity.

Requirements:

-   Crawlable public pages
-   Unique titles/descriptions where appropriate
-   Canonical URL handling
-   Open Graph/social metadata
-   XML sitemap
-   Appropriate robots configuration
-   Semantic headings
-   Indexable news posts
-   Clean URLs
-   Redirects for changed legacy URLs
-   Appropriate structured data
-   Internal linking
-   Image metadata/alt strategy
-   Correct status codes

CMS-driven content must generate appropriate web metadata without
routine code changes.

------------------------------------------------------------------------

## 26. Performance Requirements

The site should remain fast despite premium imagery/media.

Expect:

-   Optimized responsive images
-   Controlled video/media loading
-   Minimal unnecessary client-side JavaScript
-   Stable layouts
-   Lazy loading where appropriate
-   Efficient caching
-   Static/cached rendering where appropriate
-   Revalidation when CMS content changes
-   No unnecessary WordPress runtime dependency

Exact budgets/rendering strategy belong in
`ARCHITECTURE_ENGINEERING.md`.

------------------------------------------------------------------------

## 27. Security and Privacy Principles

-   Never expose privileged Supabase credentials to the browser.
-   Public website access must not grant privileged backend access.
-   CMS administrative operations must be authenticated/authorized.
-   Contact forms require validation and abuse protection.
-   Account deletion must use an approved secure backend workflow.
-   Shared catalog metadata must not accidentally expose private/premium
    media.
-   Mobile-user personal data must not be exposed through public website
    routes.

Detailed implementation belongs in the engineering specification.

------------------------------------------------------------------------

## 28. Analytics

Support lightweight analytics for useful public journeys, potentially
including:

-   Page traffic
-   Release engagement
-   Video engagement
-   News/blog readership
-   Outbound music-platform clicks
-   Mobile-app CTA clicks
-   Contact-form conversion

Final provider/event taxonomy belongs to architecture/implementation
planning.

------------------------------------------------------------------------

## 29. Explicit V1 Exclusions

Unless this PRD is revised, V1 does **not** include:

-   Full web streaming application
-   General website registration/login
-   Favorites
-   User playlists
-   Playback history
-   Personal library
-   Offline downloads
-   Web subscription checkout
-   Premium entitlement management
-   Push-notification management
-   Large teaching-content architecture
-   Dedicated teaching detail pages
-   Full app marketing microsite
-   Complex support knowledge base
-   General-purpose page builder
-   Arbitrary CMS-created website pages
-   CMS control over the entire website layout
-   Mandatory release detail pages
-   Mandatory video detail pages
-   Automatic Spotify catalog import
-   Automatic WordPress content migration
-   Separate website-specific content database
-   A fourth repository solely because Supabase is used

------------------------------------------------------------------------

## 30. V1 Acceptance Criteria

Website V2 is product-complete when:

1.  The approved core sitemap is implemented.
2.  The visual experience is substantially improved over the existing
    website.
3.  Home presents AJOracle and key content clearly.
4.  CMS-published releases appear on the website.
5.  CMS-published videos appear on the website.
6.  CMS-published news/blog posts appear on the website.
7.  Individual news/blog posts render correctly.
8.  About content is reviewed and presented cleanly.
9.  Contact works securely end to end.
10. App promotion is supported when assets/store links are ready.
11. Required privacy/legal/account-deletion destinations exist when
    applicable.
12. Routine content publication does not require website code changes.
13. Mobile-only/private functionality remains outside public website
    scope.
14. Important legacy URLs are redirected where necessary.
15. Core SEO/social metadata is implemented.
16. Responsive behavior is validated.
17. Accessibility fundamentals are validated.
18. Production content passes QA/approval.
19. Placeholder/unapproved content is absent.
20. The site is production-ready on Vercel.

------------------------------------------------------------------------

## 31. Remaining Product Decisions

Codex must not silently decide:

1.  Final label/route for **Latest Releases** versus **Releases**.
2.  Final homepage section order.
3.  Whether **Oracle Picks** remains.
4.  Exact web music playback versus external listening behavior.
5.  Exact video playback/delivery experience.
6.  Whether release detail pages belong in V1.
7.  Whether video detail pages belong in V1.
8.  Final CMS fields for releases.
9.  Final CMS fields for posts.
10. Final CMS fields for videos.
11. Exact featured-content controls between web/mobile.
12. Final app-promotion placement.
13. Contact inquiry categories, if any.
14. Exact support requirement.
15. Final account-deletion web workflow.
16. Final privacy/terms content.
17. Final analytics provider.
18. Final legacy redirect map.
19. Final approved migration content.
20. Final global use of `AJOracle` versus historical `AJ Oracle` naming.

Resolve these only when needed through explicit project/client
decisions.

------------------------------------------------------------------------

## 32. Documentation Hierarchy

``` text
PRODUCT_REQUIREMENTS.md
    WHAT the website must do.

DESIGN_SYSTEM.md
    HOW the website should look and visually behave.

ARCHITECTURE_ENGINEERING.md
    HOW the website should be engineered.

AGENTS.md
    HOW Codex should work inside the repository.
```

Add focused documents only where they solve a real project need, such as
a migration/redirect plan or shared CMS/backend contract specification.

Avoid documentation for documentation's sake.

------------------------------------------------------------------------

## 33. Codex Instructions

When this document is placed in `ajoracle-web`:

-   Treat it as the website product source of truth.
-   Preserve the intentionally focused scope.
-   Do not turn the website into the mobile app.
-   Do not expand the sitemap without approval.
-   Do not assume every mobile/CMS content type needs a website
    equivalent.
-   Do not create a general-purpose CMS/page builder.
-   Do not automatically migrate WordPress content.
-   Do not automatically import Spotify content.
-   Do not silently resolve Remaining Product Decisions.
-   Use CMS-driven data for Releases, Posts, and Videos according to
    approved backend contracts.
-   Keep static/evergreen website content code-managed unless
    requirements change.
-   Follow `DESIGN_SYSTEM.md` and `ARCHITECTURE_ENGINEERING.md` once
    available.
-   Surface missing product decisions rather than inventing them.

------------------------------------------------------------------------

## 34. Next Phase

With this focused product scope established, the next major website
phase is:

**Website V2 Design Direction and Design System**

After design decisions stabilize:

1.  Create/finalize `DESIGN_SYSTEM.md`.
2.  Define `ARCHITECTURE_ENGINEERING.md`.
3.  Create `AGENTS.md`.
4.  Begin substantial Codex implementation.
