# AJOracle Website V2 --- AGENTS.md

**Repository:** `ajoracle-web`\
**Product:** AJOracle Website V2\
**Purpose:** Operating rules for Codex and other coding agents working
in this repository\
**Status:** Repository-level implementation instructions

------------------------------------------------------------------------

## 1. Mission

Build and maintain **AJOracle Website V2** as a focused, premium public
artist website.

The website is a significant visual redesign of the existing AJOracle
website, not a second implementation of the AJOracle mobile app.
Preserve the approved website scope and improve structure/content only
where the project requirements justify it.

The mobile app is the client's primary product. Do not expand the
website into a streaming application, account product, or broad platform
unless a later explicit requirement changes the scope.

------------------------------------------------------------------------

## 2. Read Before Working

Before making a meaningful change, read the parts of these files
relevant to the task:

1.  `PRODUCT_REQUIREMENTS.md`
2.  `DESIGN_SYSTEM.md`
3.  `ARCHITECTURE_ENGINEERING.md`
4.  this `AGENTS.md`
5.  relevant existing code, tests, assets, and configuration

For visual work, inspect the approved AJOracle production assets and
current approved design direction before implementing the affected
section.

Do not generate an isolated solution from the prompt alone when
repository context already defines the behavior.

------------------------------------------------------------------------

## 3. Source-of-Truth Priority

When sources conflict, use this order:

1.  Latest explicit written client/project decision
2.  Approved production content/assets
3.  `PRODUCT_REQUIREMENTS.md`
4.  `DESIGN_SYSTEM.md` for visual decisions
5.  `ARCHITECTURE_ENGINEERING.md` for engineering decisions
6.  This `AGENTS.md`
7.  Existing implementation patterns
8.  Reasonable engineering judgment

Do not silently resolve a **material** contradiction.

If a conflict affects product scope, shared data contracts, security,
content truth, or a major visual decision, stop the affected work and
surface the conflict.

Small implementation details may be resolved with engineering judgment
when they remain fully inside the documented intent.

------------------------------------------------------------------------

## 4. Requirement Language

Interpret documentation language consistently:

-   **MUST** --- required boundary.
-   **SHOULD** --- preferred approach unless a concrete documented
    reason justifies another implementation.
-   **MAY** --- allowed option within approved scope.
-   **Open Decision** --- unresolved; do not silently convert it into a
    product/business decision.

A concept, example, possible field, or possible section is not
automatically a requirement.

------------------------------------------------------------------------

## 5. Scope Guardrail

The website should remain a focused public artist/content website.

Current core website areas are centered on:

-   Home
-   Releases / music discovery
-   Videos
-   News / posts
-   About
-   Contact
-   Required legal/support destinations where approved
-   A restrained mobile-app promotion when real assets and destinations
    are ready

CMS-driven website content is intentionally focused on:

-   Releases
-   Posts
-   Videos, if retained as dynamic website content
-   Approved featured/homepage selections

Do not add functionality simply because the Flutter app has it.

### Do not introduce without explicit approval

-   General website accounts
-   Website signup/login
-   Favorites
-   Personal playlists
-   Listening history
-   Personal library
-   Subscription/entitlement UI
-   Premium offline downloads
-   Push-notification preferences
-   A full web streaming product
-   Teachings as a new website product area unless the website scope
    changes
-   Search merely because mobile has search
-   Merchandise/store
-   Tour/events
-   Testimonials
-   Statistics sections
-   Newsletter capture
-   Generic page builder
-   Social/community functionality

If a task would materially expand scope, identify it before implementing
it.

------------------------------------------------------------------------

## 6. Repository Boundaries

The AJOracle ecosystem uses three application repositories:

``` text
ajoracle-web
ajoracle-mobile
ajoracle-cms
```

This repository owns only the public website and its website-specific
server behavior.

### `ajoracle-web` may own

-   Next.js routes/layouts
-   Website UI/components
-   Website data-access layer
-   Website SEO
-   Website caching/revalidation
-   Website contact handling
-   Website analytics integration
-   Website tests
-   Website assets/configuration
-   Vercel website configuration

### This repository does not own

-   Flutter/mobile code
-   CMS/admin UI
-   Canonical Supabase migration history
-   Mobile subscriptions
-   Mobile favorites/playlists/history
-   Mobile offline behavior
-   CMS privileged content-management implementation

Do not edit another repository unless the user explicitly authorizes
work there.

------------------------------------------------------------------------

## 7. Shared Backend Ownership

`ajoracle-cms` is the canonical owner of shared Supabase infrastructure
and schema migrations.

Do **not** create an independent competing Supabase migration history
inside `ajoracle-web`.

If website work requires a shared schema change:

1.  identify the required contract change;
2.  determine CMS/mobile impact;
3.  document or surface the dependency;
4.  have the canonical migration added through the agreed `ajoracle-cms`
    workflow;
5.  update website types/queries only against the agreed contract.

Do not invent shared fields merely to unblock the website.

Prefer additive/backward-compatible shared-schema evolution.

------------------------------------------------------------------------

## 8. CMS Is Not the Website API Gateway

Normal website reads should not be architected as:

``` text
Website → CMS application → Supabase
```

Preferred architecture:

``` text
Website server/data layer → Supabase
CMS server/admin layer    → Supabase
Mobile data layer         → Supabase / approved trusted functions
```

The CMS is the administration/control surface.

Do not couple public website availability to the CMS frontend being
online.

------------------------------------------------------------------------

## 9. Confirmed Website Technology Direction

Use the stack defined by project architecture:

-   Next.js App Router
-   React
-   TypeScript
-   Tailwind CSS
-   Vercel
-   Supabase for approved shared structured content
-   Next.js server capabilities for website-specific backend behavior

Use current stable compatible package versions when initializing or
adding dependencies.

Do not add a standalone Express API, a second frontend framework, or a
separate website backend service without a concrete approved need.

------------------------------------------------------------------------

## 10. Server-First Rule

Prefer server rendering and server-side data access.

Use React Server Components by default.

Use Client Components only where interaction actually requires them, for
example:

-   mobile navigation
-   interactive media controls
-   contact-form client UX where useful
-   an approved carousel
-   motion that genuinely needs client execution

Do not mark large page trees `"use client"` for convenience.

Do not fetch ordinary public CMS content in the browser after page load
when it can be rendered on the server.

------------------------------------------------------------------------

## 11. Data-Access Boundary

Do not place raw Supabase queries inside arbitrary UI components.

Centralize shared data access in a small typed website query/service
layer.

Desired flow:

``` text
Route / Server Component
        ↓
Website query/service layer
        ↓
Shared contract mapping
        ↓
Supabase / approved provider
```

UI should consume website-facing data models rather than arbitrary
database rows.

Keep abstractions proportional to this website. Do not build enterprise
repository/use-case layers for trivial reads.

------------------------------------------------------------------------

## 12. Dynamic Content Rule

Routine content publishing must not require:

-   editing website source code;
-   a Codex session;
-   a Git commit;
-   a new Vercel deployment.

For CMS-managed releases, posts, videos, and approved featured content,
the website should consume published shared data and update through the
documented cache/revalidation flow.

Do not hardcode current releases/posts/videos into production components
as the long-term content source.

Controlled temporary data may be used during early visual implementation
only when clearly non-production and easy to replace.

------------------------------------------------------------------------

## 13. Publication and Visibility

A database row existing does not mean it is public.

Website queries must respect the agreed publication/visibility contract.

Do not:

-   expose drafts;
-   expose unpublished content;
-   expose mobile-private/premium content;
-   infer publication from incomplete data;
-   bypass access rules for convenience.

If the final shared publication fields are not yet agreed, keep the
dependency explicit rather than inventing production semantics.

------------------------------------------------------------------------

## 14. Caching and Revalidation

CMS-driven content should not force uncached database work on every
visitor.

Use the framework's stable caching/revalidation mechanisms appropriate
to the selected Next.js version.

Conceptually group invalidation by content domain, such as:

``` text
homepage
releases
posts
videos
```

When a CMS webhook/revalidation endpoint is implemented:

-   authenticate it;
-   keep secrets server-only;
-   validate allowed operations;
-   do not accept arbitrary untrusted paths;
-   return safe errors;
-   protect against abuse as appropriate.

Do not expose a revalidation secret to browser code.

------------------------------------------------------------------------

## 15. Design Direction

Implement the visual system defined in `DESIGN_SYSTEM.md`.

Core direction:

> **Cinematic editorial artist experience with spiritual warmth.**

The site should feel:

-   premium;
-   elegant;
-   spiritual;
-   cinematic;
-   modern;
-   dark;
-   warm;
-   calm;
-   content-focused;
-   artistic.

Avoid:

-   generic WordPress music-theme styling;
-   streaming-dashboard UI;
-   SaaS aesthetics;
-   neon/cyberpunk;
-   flashy gold;
-   excessive glassmorphism;
-   excessive rounded cards;
-   AI-template appearance.

------------------------------------------------------------------------

## 16. Design Tokens

Centralize design values.

Do not scatter arbitrary colors, typography, spacing, radii, shadows, or
animation values through components.

The approved foundation begins with:

``` css
--color-bg: #07080B;
--color-bg-secondary: #0E1014;
--color-surface: #15171C;
--color-surface-elevated: #1C1E24;

--color-text: #F7F5F0;
--color-text-muted: #A7A7AA;

--color-gold: #AE8514;
--color-gold-highlight: #D4AC32;
--color-gold-deep: #7A5B0D;

--color-border: #2A261C;
--color-error: #E45858;
--color-success: #5FB878;
```

Typography direction:

-   **Cormorant Garamond** --- editorial/display
-   **Manrope** --- functional UI/body

Use semantic tokens/components rather than repeating raw values.

Exact responsive tuning may be refined against real content and assets
without changing the overall design direction.

------------------------------------------------------------------------

## 17. Gold and Atmospheric Effects

Gold is an accent, not the interface default.

Do not:

-   make body copy gold;
-   outline every card in gold;
-   add glow to every control;
-   cover entire sections in gold gradients without reason.

Atmosphere should be subtle and selective.

Prefer:

1.  CSS radial gradients
2.  CSS linear gradients
3.  masks/vignettes
4.  small reusable noise/texture assets
5.  optimized decorative particles only when genuinely needed

Do not export or ship entire generated concept sections as raster
backgrounds.

------------------------------------------------------------------------

## 18. Production Asset Rule

Use real, approved AJOracle assets in production.

This includes:

-   AJOracle photography
-   release artwork
-   article imagery
-   approved video posters/thumbnails
-   real app screenshots when available

Generated homepage concepts are **visual-direction references**, not
production asset sources.

Do not:

-   substitute a generated person for AJOracle;
-   regenerate the artist to fill missing image space;
-   invent release covers;
-   invent article imagery as though client-approved;
-   ship fake app screenshots;
-   crop generated mockups into production backgrounds.

When an approved source image does not fit a layout naturally, adapt the
composition with crop, position, mask, gradient, and atmosphere while
preserving the authentic asset.

If a required production asset is missing, surface the missing asset or
use an explicitly approved fallback.

------------------------------------------------------------------------

## 19. Homepage Direction

Preserve the approved working hierarchy unless a later explicit decision
changes it:

``` text
01 Header + Hero
02 Latest Release
03 Featured Video
04 Oracle Picks
05 Latest Stories
06 App Promotion
07 Footer / Contact conclusion
```

Do not add sections merely to make the page longer.

### Hero

-   real AJOracle imagery;
-   dominant artist identity;
-   strong editorial typography;
-   minimal copy;
-   one primary action;
-   restrained atmosphere.

### Latest Release

-   large real artwork;
-   strong release-title hierarchy;
-   concise copy;
-   approved listen/platform actions;
-   CMS-driven.

### Featured Video

-   real approved poster/frame;
-   substantial visual treatment;
-   clear watch action;
-   minimal supporting UI.

### Oracle Picks

-   preserve as a distinctive AJOracle concept;
-   curated rather than full catalog;
-   approved artwork;
-   minimal UI;
-   may carry stronger cosmic atmosphere.

### Latest Stories

-   editorial rather than generic blog-card treatment;
-   approved article imagery;
-   focused recent/featured set.

### App Promotion

-   secondary to artist/content experience;
-   real app screenshots;
-   real store links only;
-   may remain hidden until assets/destinations are ready.

------------------------------------------------------------------------

## 20. Cards and Components

Do not turn every content item into a card.

Prefer open editorial composition:

``` text
artwork
title
metadata
action
```

without a surface rectangle when grouping is unnecessary.

Create reusable primitives when they genuinely improve consistency, but
do not force visually different sections into one over-generic
component.

Avoid both extremes:

-   giant one-off page files;
-   a separate abstraction for every trivial element.

------------------------------------------------------------------------

## 21. Responsive Implementation

Recompose; do not merely shrink desktop.

For each significant section:

-   test real content at desktop, laptop, tablet, and mobile widths;
-   preserve image focal points;
-   intentionally stack/reorder split layouts;
-   keep readable line lengths;
-   maintain generous but reduced mobile spacing;
-   keep actions usable by touch;
-   avoid tiny multi-column mobile layouts.

Do not reproduce a desktop screenshot literally when it creates a broken
responsive result.

------------------------------------------------------------------------

## 22. Accessibility

Accessibility is part of completion, not a later polish task.

Implement:

-   semantic landmarks;
-   logical headings;
-   keyboard navigation;
-   visible focus;
-   accessible mobile-menu behavior;
-   meaningful alt text;
-   decorative-image handling;
-   persistent form labels;
-   accessible validation/errors;
-   adequate touch targets;
-   sufficient contrast;
-   reduced-motion support;
-   accessible media controls where applicable.

Do not sacrifice readability/contrast to match a cinematic reference.

------------------------------------------------------------------------

## 23. Motion

Motion should be restrained and atmospheric.

Prefer CSS for simple transitions.

Appropriate:

-   gentle reveal;
-   small image hover scale;
-   underline/rule movement;
-   subtle arrow translation;
-   restrained background drift.

Avoid:

-   bouncing;
-   aggressive scroll choreography;
-   constant particle motion;
-   excessive parallax;
-   spinning decoration;
-   animation that delays usability.

Respect `prefers-reduced-motion`.

Do not add a motion library until approved interactions justify it.

------------------------------------------------------------------------

## 24. Images and Performance

For production images:

-   use responsive image optimization where appropriate;
-   define dimensions/aspect ratios;
-   provide accurate `sizes`;
-   prioritize only genuinely critical above-the-fold imagery;
-   lazy-load below-the-fold media;
-   preserve focal positions;
-   avoid delivering unnecessarily large sources to small screens.

Do not autoplay heavy video backgrounds by default.

Premium appearance must not depend on poor performance.

------------------------------------------------------------------------

## 25. SEO Rules

Important public content must be crawlable without client-side
JavaScript.

Implement approved SEO through framework-supported mechanisms:

-   metadata;
-   canonical URLs;
-   Open Graph/social metadata;
-   sitemap;
-   robots;
-   structured data where supported by real content;
-   permanent redirects from old WordPress URLs where needed.

Do not fabricate structured-data fields.

Draft/unpublished/private content must not appear in the sitemap.

Preserve existing useful URLs where sensible; otherwise use explicit
redirects and avoid redirect chains.

------------------------------------------------------------------------

## 26. Contact and Server Mutations

All website mutations must use a trusted server boundary.

For contact:

``` text
Browser
  ↓
Server Action / Route Handler
  ↓
validate
  ↓
abuse protection
  ↓
approved provider
  ↓
safe response
```

Always validate server-side.

Never expose provider secrets.

Do not build a CRM unless separately required.

Avoid logging full private contact messages unnecessarily.

------------------------------------------------------------------------

## 27. Security

Always:

-   keep secrets out of Git;
-   keep privileged credentials server-only;
-   validate untrusted input;
-   use least privilege;
-   protect webhook/revalidation endpoints;
-   avoid unsafe raw HTML rendering;
-   respect shared backend access controls;
-   prevent private/premium mobile media from becoming public website
    content.

Never place privileged values in public environment variables.

If rich HTML is introduced from the CMS, use a deliberate
validated/sanitized rendering boundary.

------------------------------------------------------------------------

## 28. Error and Empty States

Implement meaningful states for:

-   missing content;
-   unpublished content;
-   failed CMS/backend reads;
-   unavailable media;
-   malformed optional data;
-   contact submission failure;
-   404s.

Do not expose raw backend errors or stack traces.

Optional malformed content should be handled intentionally where
possible rather than crashing an entire public page.

------------------------------------------------------------------------

## 29. Dependency Discipline

Before adding a dependency, determine:

1.  whether Next.js/React/CSS already solves the need;
2.  whether an existing dependency solves it;
3.  whether the package is maintained;
4.  whether it adds meaningful runtime/bundle cost;
5.  whether the feature actually belongs in scope.

Do not install packages speculatively.

Use current stable compatible versions at implementation time.

------------------------------------------------------------------------

## 30. TypeScript and Code Quality

Use strict TypeScript.

-   Avoid `any` unless a boundary genuinely requires it.
-   Validate unknown external input.
-   Model shared content explicitly.
-   Keep functions/components focused.
-   Keep server-only modules clearly server-only.
-   Avoid duplicate query/data-mapping logic.
-   Prefer clear names over abbreviations.
-   Do not silence important lint/type errors to make checks pass.

Preserve working behavior during refactors unless the task explicitly
changes it.

------------------------------------------------------------------------

## 31. Implementation Workflow

For each meaningful task:

### 1. Understand

-   Read the user request.
-   Read relevant requirements/design/architecture.
-   Inspect existing code/assets.
-   Check for blocking Open Decisions.

### 2. Inspect

-   Review current repository status.
-   Find existing patterns/components before creating new ones.
-   Identify whether the task affects shared CMS/backend contracts.

### 3. Plan

-   Define the smallest coherent implementation.
-   Keep the task within current scope.
-   Identify validation needed.

### 4. Implement

-   Make focused changes.
-   Reuse existing tokens/components/contracts.
-   Keep server/client boundaries intentional.
-   Preserve accessibility and responsive behavior.

### 5. Validate

Run the repository's configured equivalents of:

``` text
lint
typecheck
tests
build
```

Also run focused checks appropriate to the change.

### 6. Review

Before declaring completion:

-   inspect the diff;
-   check for accidental scope expansion;
-   check for secrets;
-   check for unrelated file changes;
-   verify real assets/content;
-   verify responsive states when UI changed;
-   verify accessibility where interaction changed;
-   verify production build when the change can affect it.

### 7. Report

Summarize:

-   what changed;
-   important decisions;
-   validation performed;
-   any unresolved dependency/open decision.

Do not claim validation that was not actually run.

------------------------------------------------------------------------

## 32. One Task at a Time

Prefer one well-defined implementation task or phase at a time.

Do not attempt to build the entire website from one broad instruction
unless the user explicitly requests that workflow.

For example, a good sequence is:

``` text
Foundation
→ Header/navigation
→ Homepage hero
→ Latest Release
→ Featured Video
→ Oracle Picks
→ Latest Stories
→ Footer
→ responsive refinement
→ shared content integration
→ remaining pages
```

The exact implementation sequence may vary, but changes should remain
reviewable.

------------------------------------------------------------------------

## 33. Do Not Over-Scaffold

Do not create:

-   empty feature directories for hypothetical features;
-   unused interfaces;
-   placeholder services with no consumer;
-   speculative abstractions;
-   future APIs;
-   generic CMS/page-builder systems;
-   microservice-style layers.

Create structure as real implementation requires it.

------------------------------------------------------------------------

## 34. Git Working Rules

Before editing:

-   inspect `git status`;
-   understand existing uncommitted work;
-   do not overwrite unrelated user/team changes.

During work:

-   keep changes scoped;
-   avoid unrelated formatting churn;
-   do not rewrite history;
-   do not force-push;
-   do not delete branches;
-   do not run destructive cleanup commands without explicit
    authorization.

Do not commit or push unless the user/task explicitly authorizes it or
the repository's established workflow clearly instructs it.

When commits are authorized, keep them logical and descriptive.

Never commit secrets or local environment values.

------------------------------------------------------------------------

## 35. Existing Work and Concurrent Changes

Treat existing modifications as potentially intentional.

Do not:

-   reset them;
-   revert them;
-   stash them;
-   overwrite them;
-   include them in your own change

unless explicitly instructed.

If an existing change blocks the requested task, surface the conflict
rather than destroying work.

------------------------------------------------------------------------

## 36. Documentation Changes

Update existing documentation when a confirmed reusable decision changes
project truth.

Do not create a new Markdown document for every task.

Prefer the established source:

-   product behavior → `PRODUCT_REQUIREMENTS.md`
-   visual system → `DESIGN_SYSTEM.md`
-   engineering architecture → `ARCHITECTURE_ENGINEERING.md`
-   agent workflow → `AGENTS.md`

Do not document temporary debugging details as permanent architecture.

------------------------------------------------------------------------

## 37. Open Decisions

Do not settle unresolved business/product decisions merely to make
implementation easier.

Examples currently expected to require confirmation/coordination
include:

-   exact shared publication/visibility field names;
-   exact rich-text format;
-   final dynamic-video behavior on web;
-   final contact provider/configuration;
-   final analytics/consent setup;
-   preview workflow if required;
-   final old-WordPress redirect inventory;
-   final public audio behavior;
-   legal/privacy/terms content;
-   app-store promotion timing/URLs.

When work depends on one of these, either:

-   implement only the independent portion; or
-   surface the blocking decision.

Do not silently invent a client preference.

------------------------------------------------------------------------

## 38. Shared Contract Changes

If a website task needs shared backend changes:

1.  identify the exact website need;
2.  check whether the entity is shared with CMS/mobile;
3.  define the desired contract;
4.  coordinate the canonical migration in `ajoracle-cms`;
5.  consider deployment sequencing;
6.  update website types/queries after the contract is available;
7.  check mobile impact where applicable.

Do not deploy website code that assumes a shared field has already been
deployed when it has not.

------------------------------------------------------------------------

## 39. Content Integrity

Do not fabricate production content.

Use only approved AJOracle information/assets.

If real content is missing:

-   use an explicitly marked development placeholder when appropriate;
-   keep it easy to replace;
-   do not present it as client-approved;
-   never let placeholder/demo content accidentally become production
    content.

Do not rewrite artist biography, release facts, dates, links, or other
factual content merely to fit a layout without approval.

------------------------------------------------------------------------

## 40. Existing Website Migration

The current WordPress site is a content/brand reference, not an
instruction to reproduce its implementation.

During migration:

-   preserve approved useful content;
-   correct only approved/verified issues;
-   do not migrate placeholders automatically;
-   preserve established URLs where sensible;
-   define redirects where URLs change;
-   keep the old production site available until V2 is ready for
    cutover.

Do not delete/replace the current production site prematurely.

------------------------------------------------------------------------

## 41. App Promotion

Do not fabricate the app launch state.

Before showing active store CTAs in production:

-   real store destination must exist;
-   real app screenshots should be available;
-   copy must reflect actual availability.

The app section may remain hidden until those requirements are
satisfied.

------------------------------------------------------------------------

## 42. Testing Expectations by Change Type

### Pure visual change

At minimum: - lint/typecheck as configured; - relevant component/page
rendering; - responsive visual review; - keyboard/focus review if
interaction is affected.

### Data/query change

Also: - mapping/validation tests where useful; - publication/visibility
behavior; - loading/error/empty states; - caching implications.

### Server mutation/security change

Also: - server validation; - failure cases; - secret boundary; -
abuse/authentication behavior where applicable.

### Route/SEO change

Also: - metadata; - canonical behavior; - sitemap/robots impact; -
redirects/404 behavior.

### Pre-merge/release

Run the full configured quality gate, including production build.

------------------------------------------------------------------------

## 43. Completion Standard

A task is not complete merely because the UI renders.

A task is complete when:

-   requested behavior is implemented;
-   it remains within scope;
-   it follows the design system;
-   server/client boundaries are correct;
-   real content/assets are handled correctly;
-   responsive behavior is acceptable;
-   accessibility is considered;
-   relevant errors/empty states are handled;
-   appropriate validation passes;
-   no secrets or unrelated changes are introduced;
-   documentation is updated if the task changed a reusable project
    decision.

------------------------------------------------------------------------

## 44. Architectural Anti-Patterns

Never introduce these without an explicit architecture change:

-   Website → CMS frontend → Supabase for normal reads
-   duplicated Supabase migrations in this repository
-   fourth backend repository
-   standalone Express server for ordinary website behavior
-   raw Supabase queries scattered through UI
-   all content fetched client-side
-   entire site forced dynamic without need
-   generic public API
-   generic page builder
-   website account system
-   web streaming clone
-   private mobile media exposed publicly
-   giant client-side page trees
-   speculative microservices
-   hardcoded production catalog
-   AI-generated production artist imagery

------------------------------------------------------------------------

## 45. Initial Development Sequence

Once this file is approved, implementation should generally begin with:

### Phase 0 --- Repository foundation

-   initialize Next.js + TypeScript + Tailwind;
-   configure lint/typecheck/build;
-   configure fonts;
-   establish semantic design tokens;
-   establish base layout/container primitives;
-   add safe environment configuration;
-   configure Vercel preview when appropriate.

### Phase 1 --- Visual shell and homepage

-   header/navigation;
-   hero;
-   latest release;
-   featured video;
-   Oracle Picks;
-   latest stories;
-   app promotion only when appropriate;
-   footer;
-   responsive refinement.

Use approved real assets wherever available.

### Phase 2 --- Shared content

-   Supabase server data layer;
-   releases;
-   posts;
-   videos if approved;
-   homepage featured data;
-   publication/visibility mapping.

### Phase 3 --- Publishing integration

-   CMS-to-web revalidation;
-   dynamic routes/listings where approved;
-   error/fallback handling.

### Phase 4 --- Forms and SEO

-   contact flow;
-   metadata;
-   structured data;
-   sitemap/robots;
-   redirects.

### Phase 5 --- QA and launch

-   responsive QA;
-   accessibility;
-   performance;
-   content QA;
-   SEO QA;
-   production cutover.

Do not treat this sequence as permission to implement features outside
the PRD.

------------------------------------------------------------------------

## 46. Final Operating Principle

When uncertain, prefer the solution that is:

-   smaller in scope;
-   consistent with the approved design;
-   server-first;
-   accessible;
-   performant;
-   maintainable;
-   based on real AJOracle content;
-   compatible with the shared CMS/Supabase architecture;
-   easy for another developer to understand.

Do not make the website more complex merely because the wider AJOracle
mobile product is complex.

**Build the focused website that was approved.**
