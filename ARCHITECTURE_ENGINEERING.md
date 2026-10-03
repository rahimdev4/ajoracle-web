# AJOracle Website V2 --- Architecture & Engineering

**Document:** `ARCHITECTURE_ENGINEERING.md`\
**Product:** AJOracle Website V2\
**Repository:** `ajoracle-web`\
**Primary platform:** Responsive web\
**Primary framework:** Next.js\
**Deployment:** Vercel\
**Status:** Engineering source of truth before implementation\
**Companion documents:** `PRODUCT_REQUIREMENTS.md`, `DESIGN_SYSTEM.md`

------------------------------------------------------------------------

## 1. Purpose

This document defines **how AJOracle Website V2 should be engineered**.

It implements the approved website product scope and design direction
without expanding either. It is not application code, a final SQL
schema, or permission to modify the mobile or CMS repositories.

The website remains intentionally focused: it is a premium redesign of
AJOracle's public website, with only genuinely useful structural
changes. Routine website publishing should be possible through the
shared AJOracle CMS for the approved dynamic content types.

------------------------------------------------------------------------

## 2. Documentation Authority

Within `ajoracle-web`, use the following responsibilities:

  -----------------------------------------------------------------------
  Source                              Responsibility
  ----------------------------------- -----------------------------------
  `PRODUCT_REQUIREMENTS.md`           What the website must do

  `DESIGN_SYSTEM.md`                  How the website should look and
                                      visually behave

  `ARCHITECTURE_ENGINEERING.md`       How the website is engineered

  `AGENTS.md`                         How Codex/agents work in the
                                      repository

  Approved production assets          Real AJOracle content and imagery

  Approved design references          Visual direction, not production
                                      content
  -----------------------------------------------------------------------

When sources materially conflict, do not silently invent a resolution.
Prefer the latest explicit client/project decision and update the
affected documentation when the decision becomes reusable project truth.

**MUST** means required architectural boundary.\
**SHOULD** means preferred unless a documented reason justifies an
alternative.\
**MAY** means an allowed implementation choice inside approved scope.

------------------------------------------------------------------------

## 3. Engineering Goals

Optimize for:

-   A fast, polished public website
-   Straightforward maintenance
-   Strong SEO and crawlability
-   Safe shared-backend access
-   CMS-driven routine publishing
-   Clear repository ownership
-   Minimal unnecessary backend complexity
-   Predictable caching and revalidation
-   Responsive, accessible rendering
-   Real AJOracle assets and content
-   Easy future handoff
-   Safe Codex-assisted development

Avoid architecture designed for hypothetical future scale that the
website does not currently require.

------------------------------------------------------------------------

## 4. Confirmed Ecosystem Architecture

AJOracle uses **three application repositories**:

``` text
ajoracle-web
    Next.js public website
    Website-specific server/data logic
    Deployed to Vercel

ajoracle-mobile
    Flutter iOS/Android application
    Mobile-specific data/repository logic
    Distributed through App Store / Google Play

ajoracle-cms
    Admin/CMS application
    Admin-specific server logic
    Canonical Supabase infrastructure owner
    Deployed to Vercel
```

All three products participate in one AJOracle ecosystem, but they
remain separate applications with separate responsibilities.

### 4.1 Shared infrastructure

``` text
                    ┌────────────────────┐
                    │   AJOracle CMS     │
                    │   admin/control    │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌────────────────────┐
                    │     Supabase       │
                    │ PostgreSQL / Auth  │
                    │ shared metadata    │
                    └──────┬───────┬─────┘
                           │       │
                     reads │       │ reads
                           ▼       ▼
                 ┌───────────┐   ┌──────────────┐
                 │ Next.js   │   │ Flutter App  │
                 │ Website   │   │              │
                 └───────────┘   └──────────────┘

Media infrastructure may additionally use:
- Cloudflare R2 for approved audio/files
- Cloudflare Stream for approved video
```

The CMS is an **administration client/control plane**, not a universal
API gateway.

Normal public website reads should not follow:

``` text
Website → CMS application → Supabase
```

The preferred boundary is:

``` text
Website server/data layer → Supabase
CMS server/admin layer    → Supabase
Mobile data layer         → Supabase / approved trusted functions
```

------------------------------------------------------------------------

## 5. Repository Ownership

### 5.1 `ajoracle-web` owns

-   Next.js application
-   Public website routes
-   Website components/layouts
-   Website-specific server code
-   Website data-access layer
-   SEO implementation
-   Website metadata/schema markup
-   Website caching/revalidation behavior
-   Contact form/server handling
-   Website analytics integration
-   Public asset optimization
-   Website tests
-   Vercel website configuration

### 5.2 `ajoracle-cms` owns

The CMS repository is the **canonical owner of Supabase infrastructure
and schema evolution**, including the agreed `supabase/` project
structure such as:

``` text
supabase/
  migrations/
  functions/
  seed.sql          # if/when genuinely required
  config.toml
```

It also owns CMS/admin UI and privileged content-management workflows.

Production schema changes MUST be migration-driven and
version-controlled.

### 5.3 `ajoracle-mobile` owns

The mobile repository owns Flutter/mobile implementation and its
mobile-specific data/application logic.

The website repository must not modify Flutter code.

### 5.4 Cross-repository rule

A website requirement may require a shared schema change, but
`ajoracle-web` MUST NOT create an independent competing migration
history.

Example:

``` text
Website needs seo_title on a shared post/release record
        ↓
Shared contract change is agreed
        ↓
Canonical Supabase migration is added through ajoracle-cms
        ↓
Website updates its typed model/query usage
        ↓
Mobile impact is checked where the entity is shared
```

------------------------------------------------------------------------

## 6. Confirmed Website Stack

Use:

-   Next.js App Router
-   React
-   TypeScript
-   Tailwind CSS
-   Vercel
-   Supabase for shared structured content/data
-   Next.js server capabilities for website-specific backend behavior
-   AJOracle-approved media providers for external/media delivery
-   Git/GitHub

Exact stable package/framework versions should be selected at repository
initialization rather than frozen in this planning document.

Do not introduce a second frontend framework, separate Express server,
or standalone website API service unless a later requirement clearly
needs one.

------------------------------------------------------------------------

## 7. Application Architecture

Prefer a pragmatic server-first architecture.

Conceptual flow:

``` text
Route / Server Component
        │
        ▼
Website service/query layer
        │
        ▼
Shared content contracts / mapping
        │
        ▼
Supabase or approved external provider
```

For mutations such as contact submission:

``` text
Client form
    │
    ▼
Server Action / Route Handler
    │
    ├─ validate
    ├─ abuse protection
    ├─ send/store approved data
    └─ return safe result
```

### 7.1 Boundary rule

UI components should not contain raw Supabase queries.

Centralize external data access so:

-   schema changes have bounded impact
-   caching is consistent
-   error handling is consistent
-   website-specific projections are explicit
-   testing is easier

### 7.2 Avoid unnecessary layers

Do not create enterprise-style repository/use-case abstractions for
trivial public reads unless they add real value.

A small typed query/service layer is sufficient for this website.

------------------------------------------------------------------------

## 8. Suggested Repository Structure

This is a target structure, not a requirement to create empty folders
before they are needed.

``` text
ajoracle-web/
├─ app/
│  ├─ (site)/
│  │  ├─ page.tsx
│  │  ├─ latest-releases/
│  │  ├─ videos/
│  │  ├─ news/
│  │  ├─ about/
│  │  └─ contact/
│  ├─ api/                    # only when route handlers are actually needed
│  ├─ layout.tsx
│  ├─ not-found.tsx
│  ├─ error.tsx
│  ├─ loading.tsx             # only where useful
│  ├─ robots.ts
│  └─ sitemap.ts
│
├─ components/
│  ├─ ui/
│  ├─ layout/
│  ├─ sections/
│  └─ content/
│
├─ lib/
│  ├─ supabase/
│  ├─ content/
│  ├─ seo/
│  ├─ validation/
│  └─ utilities/
│
├─ types/
├─ public/
│  ├─ images/
│  ├─ icons/
│  └─ decorative/
│
├─ tests/                     # if chosen test tooling benefits from it
├─ PRODUCT_REQUIREMENTS.md
├─ DESIGN_SYSTEM.md
├─ ARCHITECTURE_ENGINEERING.md
└─ AGENTS.md
```

Route names must ultimately follow the approved PRD. Do not create
optional detail routes merely because this example shows a possible
organization.

------------------------------------------------------------------------

## 9. Rendering Strategy

The website is primarily a public content/brand experience. Prefer
server rendering and static/cached output over client-side fetching.

### 9.1 Default

Use React Server Components for content rendering unless client
interactivity is genuinely required.

Prefer:

-   static generation/cached server rendering for stable public pages
-   on-demand revalidation after CMS publishing
-   server-side data access
-   minimal client JavaScript

### 9.2 Client Components

Use Client Components only for interactive behavior such as:

-   mobile navigation
-   media controls where required
-   contact form interaction where useful
-   interactive carousel only if approved
-   small motion behaviors that require client execution

Do not mark large page trees `"use client"` for convenience.

### 9.3 Dynamic rendering

Do not make the entire site dynamically rendered on every request merely
because content lives in Supabase.

CMS-driven does not mean request-time database querying for every
visitor.

------------------------------------------------------------------------

## 10. CMS Publishing and Website Revalidation

Routine publishing should follow:

``` text
Diana / Admin
      │
      ▼
AJOracle CMS
      │
      ▼
CMS server validates + publishes
      │
      ▼
Supabase / approved media services
      │
      ├──────────────► Flutter app sees updated content
      │
      └──────────────► Website cache is revalidated
                              │
                              ▼
                       New content appears
```

No website Git commit, Codex session, or Vercel redeployment should be
required for a normal release/post/video publication.

### 10.1 Preferred website behavior

Use Next.js cache tagging/path revalidation or the current equivalent
supported by the selected stable Next.js version.

Conceptually, content queries should be associated with domains such as:

``` text
releases
posts
videos
homepage
```

Publishing can invalidate only affected data/routes.

Example:

``` text
New release published
    → invalidate releases
    → invalidate homepage
    → refresh /latest-releases
    → refresh any approved release route
```

### 10.2 Revalidation endpoint/security

If CMS calls a website endpoint/webhook to trigger revalidation:

-   authenticate the request with a server-held secret/signature
-   validate the requested operation
-   do not accept arbitrary paths from an untrusted caller
-   rate-limit or otherwise protect where appropriate
-   never expose the revalidation secret to browser code
-   return safe, minimal errors

The exact implementation can be selected during build based on the
stable Next.js/Vercel APIs in use.

------------------------------------------------------------------------

## 11. Shared Content Scope

The website should consume only shared content relevant to its approved
scope.

Current website-facing dynamic content is focused on:

-   Releases
-   Posts/news/editorial content
-   Videos, if retained as CMS-managed content
-   Featured/current selections needed by the homepage

Do not automatically expose every mobile-app entity on the website.

Mobile-only concepts such as favorites, playlists, listening history,
premium entitlement UI, offline downloads, and personal library remain
outside normal website scope.

------------------------------------------------------------------------

## 12. Content Contracts

Shared data must have explicit contracts.

Website code should map shared backend records into website-facing types
rather than passing arbitrary database rows throughout components.

Conceptual examples:

``` ts
type PublicRelease = {
  id: string
  slug?: string
  title: string
  releaseDate?: string
  artwork: MediaAsset
  description?: string
  externalLinks: ExternalLink[]
  publishedAt: string
  websiteVisible: boolean
  websiteFeatured?: boolean
}
```

``` ts
type PublicPost = {
  id: string
  slug: string
  title: string
  excerpt?: string
  body: unknown
  heroImage?: MediaAsset
  publishedAt: string
  websiteVisible: boolean
}
```

``` ts
type PublicVideo = {
  id: string
  slug?: string
  title: string
  description?: string
  poster?: MediaAsset
  provider: string
  playbackReference?: string
  publishedAt: string
  websiteVisible: boolean
}
```

These examples define architectural intent only. They are **not final
database fields**.

Final shared fields must be coordinated with `ajoracle-cms` and mobile
where applicable.

------------------------------------------------------------------------

## 13. Publication State and Visibility

The backend/CMS should distinguish draft/non-public content from
publicly available content.

The website MUST query only records authorized for public web display.

Potential shared concepts include:

-   publication status
-   publish timestamp
-   website visibility
-   mobile visibility
-   featured placement/order

Exact field names and state model belong to the shared CMS/data-contract
work.

Do not infer public visibility from the existence of a database row.

------------------------------------------------------------------------

## 14. Homepage Data Composition

The homepage should not perform unrelated ad hoc queries in every
section.

Prefer a small, explicit composition layer that resolves the homepage's
approved content:

``` text
Hero/current campaign
Latest release
Featured video
Oracle Picks
Latest stories
App promotion configuration
```

Static brand copy may remain in code where it is intentionally
website-owned and rarely changed.

Do not build a generic page builder merely to support this homepage.

------------------------------------------------------------------------

## 15. Website vs CMS Content Ownership

### Shared/CMS-managed

Routine changing content should generally come from CMS/shared data:

-   new releases
-   release metadata/artwork
-   posts
-   post imagery
-   videos when dynamic video management is approved
-   homepage featured selections where approved
-   relevant external listening links

### Website-owned

Stable presentation/configuration may remain in `ajoracle-web`:

-   navigation
-   page composition
-   section labels
-   design/layout
-   SEO defaults
-   structured-data implementation
-   contact UX
-   static legal routes/content once approved
-   app-promotion presentation
-   fallback UI

Do not turn every sentence into CMS data.

------------------------------------------------------------------------

## 16. Supabase Access

### 16.1 Server-first access

Public website content SHOULD normally be fetched through the server
environment.

This:

-   reduces client JavaScript
-   keeps data shaping centralized
-   makes caching easier
-   avoids unnecessary browser coupling to database structure

### 16.2 Browser Supabase usage

Do not initialize a browser Supabase client unless an approved feature
genuinely requires it.

The public website currently does not need general website accounts or
user-specific Supabase state.

### 16.3 Credentials

Only client-safe/public configuration may ever reach browser bundles.

Never expose:

-   Supabase service-role keys
-   database passwords
-   Cloudflare admin tokens
-   CMS secrets
-   revalidation secrets
-   private API keys

Server-only secrets must remain server-only.

------------------------------------------------------------------------

## 17. Database Security

Supabase Row Level Security and database permissions remain part of the
shared backend security model.

The website must not rely on hidden UI as authorization.

Public website queries should have the minimum access required for
public published content.

Privileged writes remain behind trusted CMS/server workflows.

The website MUST NOT receive general CMS/admin credentials.

------------------------------------------------------------------------

## 18. Media Architecture

### 18.1 Images

Use approved real AJOracle assets.

For website delivery:

-   use Next.js image optimization where appropriate
-   provide explicit dimensions/aspect ratios
-   use responsive `sizes`
-   preserve focal points
-   lazy-load below-the-fold imagery
-   prioritize only genuinely above-the-fold critical images
-   avoid shipping oversized source images to small screens

### 18.2 Decorative visuals

Prefer CSS gradients/masks/glows and small reusable optimized assets as
defined in `DESIGN_SYSTEM.md`.

Do not export entire concept sections as raster backgrounds.

### 18.3 Audio

The website is not a streaming-app clone.

If public audio playback remains in the approved website scope, keep it
lightweight and use only approved public media access. Premium/private
mobile media must not become public merely because the website can
access shared metadata.

### 18.4 Video

The wider AJOracle architecture uses Cloudflare Stream for managed
video. The website should consume approved public playback/poster data
rather than build a custom encoding pipeline.

If videos are represented only through approved external destinations
for a given content item, respect that content contract instead of
forcing internal playback.

------------------------------------------------------------------------

## 19. Contact Form Architecture

The website contact form should use a server-controlled submission path.

Conceptual flow:

``` text
Browser
  │
  ▼
Server Action / Route Handler
  │
  ├─ schema validation
  ├─ normalization
  ├─ abuse/bot protection
  ├─ rate protection where appropriate
  ├─ email/provider call
  └─ safe response
```

Requirements:

-   Validate server-side even if client validation exists.
-   Never expose provider secrets.
-   Do not trust hidden form fields as authorization.
-   Return human-readable errors.
-   Avoid logging full message content unnecessarily.
-   Do not build a CRM unless separately required.
-   Provider choice should follow the approved project configuration.

------------------------------------------------------------------------

## 20. SEO Architecture

SEO is a core website responsibility.

### 20.1 Metadata

Use Next.js metadata capabilities for:

-   page title
-   meta description
-   canonical URL
-   Open Graph metadata
-   social image
-   robots directives where necessary

Dynamic CMS pages should derive metadata from approved content with safe
website defaults.

### 20.2 Crawlability

Important public content should render in HTML without requiring
client-side JavaScript to discover it.

### 20.3 Sitemap and robots

Use framework-supported sitemap/robots generation.

The sitemap should contain only canonical public indexable routes.

Draft/unpublished/private content must not appear.

### 20.4 Structured data

Add valid JSON-LD only where the underlying content supports it.

Potential schema types may include:

-   `WebSite`
-   `Person` / appropriate artist identity representation
-   `MusicRecording` / `MusicAlbum` where data supports it
-   `Article`
-   `VideoObject`

Do not fabricate fields merely to make schema richer.

### 20.5 Redirects

When replacing old WordPress URLs:

-   inventory existing indexed routes
-   preserve URLs where sensible
-   otherwise define explicit permanent redirects
-   avoid redirect chains
-   do not intentionally create avoidable 404s for established content

A dedicated migration/redirect inventory may be produced during
implementation if needed.

------------------------------------------------------------------------

## 21. Content Migration

The website redesign should not blindly import all old WordPress
implementation artifacts.

Migration should distinguish:

-   approved content to preserve
-   outdated/incorrect content to correct
-   placeholders not to migrate
-   legacy media still approved
-   legacy routes needing redirects

The existing website is a content/brand reference, not a database dump
that automatically becomes production truth.

Do not migrate known placeholder sections merely because they exist.

------------------------------------------------------------------------

## 22. Accessibility Architecture

Implementation must support the design system's accessibility
requirements.

Engineering expectations:

-   semantic landmarks
-   logical heading hierarchy
-   keyboard navigation
-   visible focus
-   accessible mobile menu
-   alt text for meaningful imagery
-   decorative assets hidden appropriately
-   accessible form labels/errors
-   accessible video controls/provider embeds
-   sufficient contrast
-   reduced-motion behavior
-   no essential interaction dependent solely on hover
-   adequate touch targets

Accessibility should be tested during implementation rather than
postponed until launch.

------------------------------------------------------------------------

## 23. Performance Strategy

The website should target strong real-world performance without
sacrificing the approved visual direction.

Priorities:

-   server-first rendering
-   minimal client JavaScript
-   responsive image optimization
-   font optimization
-   avoid layout shift
-   lazy-load below-the-fold media
-   cache public CMS content
-   revalidate on publication
-   avoid unnecessary database calls
-   avoid autoplaying heavy video
-   prefer CSS over JavaScript for simple visual effects
-   load third-party scripts only when justified

Do not optimize Lighthouse numbers at the expense of broken UX, but
treat performance regressions as engineering issues.

------------------------------------------------------------------------

## 24. Fonts

Use the approved web typography:

-   Cormorant Garamond
-   Manrope

Prefer framework-supported font optimization and
self-hosted/build-managed delivery where appropriate.

Requirements:

-   avoid unnecessary font weights
-   prevent excessive layout shift
-   provide sensible fallback stacks
-   do not introduce additional decorative font families without
    approval

------------------------------------------------------------------------

## 25. Motion Implementation

Prefer CSS transitions/animations for simple effects.

Introduce a JavaScript motion library only if the approved interactions
genuinely require it.

All nonessential motion must respect reduced-motion preferences.

Do not make page content depend on animation completing before it
becomes usable.

------------------------------------------------------------------------

## 26. Analytics

Website analytics should remain lightweight and privacy-aware.

Track only useful product/business events, such as:

-   important outbound listen clicks
-   video engagement where technically/legally appropriate
-   app-store CTA clicks
-   contact form success
-   important navigation/content engagement where useful

Do not create a custom analytics platform.

Final provider and consent/privacy requirements should follow the
project's approved deployment/legal decisions.

------------------------------------------------------------------------

## 27. Error Handling

### Public pages

Handle:

-   missing content
-   unpublished content
-   Supabase/network failures
-   unavailable media
-   malformed CMS data
-   external-provider failure

Use:

-   `not-found` behavior for genuinely absent public content
-   safe error boundaries where appropriate
-   useful fallback copy
-   server logging without secret leakage

Do not expose raw stack traces or backend errors to visitors.

### CMS data resilience

A single malformed optional field should not necessarily crash an entire
page. Validate/map shared data at the boundary and define intentional
fallbacks.

------------------------------------------------------------------------

## 28. Logging

Production logs must never contain:

-   passwords
-   auth tokens
-   service-role keys
-   authorization headers
-   database credentials
-   private API keys
-   revalidation secrets
-   sensitive contact-form content unless explicitly required and
    protected
-   signed/private media URLs where they function as bearer access

Log enough context to diagnose failures without collecting unnecessary
personal data.

------------------------------------------------------------------------

## 29. Environment Configuration

At minimum, architecture should distinguish development and production.
Preview deployments may use a safe preview configuration where needed.

Potential configuration categories:

``` text
Public:
- canonical site URL
- explicitly client-safe Supabase values if ever required in browser
- analytics IDs where safe

Server-only:
- privileged provider keys where required
- contact email provider secret
- revalidation secret
- any trusted backend credentials
```

Do not document real secret values.

Provide `.env.example` only with safe placeholder names when
implementation begins.

------------------------------------------------------------------------

## 30. Security Principles

-   No secrets in Git.
-   No privileged keys in browser bundles.
-   Validate all server mutations.
-   Sanitize/validate external input at trust boundaries.
-   Treat CMS/admin writes as privileged.
-   Do not trust client-supplied publication/access flags.
-   Use least privilege.
-   Protect revalidation/webhook endpoints.
-   Keep dependencies current and review security-impacting upgrades.
-   Do not expose private mobile/premium media through public website
    queries.
-   Use secure headers/CSP strategy where compatible with required
    providers.
-   Avoid unsafe raw HTML rendering from CMS content.

If rich text/HTML is introduced for posts, use a deliberate safe
rendering pipeline.

------------------------------------------------------------------------

## 31. Rich Text / Blog Content

The exact CMS editor format is a shared CMS decision.

The website must not assume arbitrary HTML is safe.

Preferred principle:

``` text
CMS structured/rich content
      ↓
validated known format
      ↓
controlled website renderer
```

If HTML is stored, sanitize according to an explicit allowlist before
rendering.

Do not use `dangerouslySetInnerHTML` on untrusted content without a
validated sanitization boundary.

------------------------------------------------------------------------

## 32. External Links

Release/platform links should be CMS-managed where they change with
content.

Requirements:

-   validate URL shape/protocol
-   render only approved destinations
-   use appropriate external-link behavior
-   do not fabricate platform links
-   use official platform branding only in accordance with the design
    system

------------------------------------------------------------------------

## 33. App Promotion

The website may promote the AJOracle mobile app, but it remains
secondary to the website's artist/content purpose.

Engineering rules:

-   store URLs should be configuration/content-driven
-   do not show fake active store buttons before valid destinations
    exist
-   use real current app screenshots
-   keep the section easy to disable/hide before launch if required

No shared web/mobile authentication is implied by this promotional
section.

------------------------------------------------------------------------

## 34. Legal, Privacy, and Account-Deletion Routes

The website may host public destinations required by the wider AJOracle
ecosystem, including privacy, terms, support, and account-deletion
information where approved.

Do not invent legal language, retention periods, or policy claims.

These routes should be simple, crawlable where appropriate, stable, and
easy to update.

Account-deletion backend execution remains part of the appropriate
trusted app/backend workflow; a public website information page does not
itself imply privileged deletion logic inside `ajoracle-web`.

------------------------------------------------------------------------

## 35. Testing Strategy

Use testing proportional to the website's risk and scope.

### 35.1 Required categories

**Static quality** - TypeScript type checking - linting -
formatting/consistency checks as configured - production build

**Component/unit tests** Use where logic justifies them, especially: -
data mapping - validation - content visibility logic - SEO helpers -
URL/external-link normalization - revalidation authorization logic

**Integration/e2e** Cover critical public journeys such as: - homepage
renders expected CMS content - releases/posts/videos render when
published - unpublished content is not public - contact form
success/failure - navigation - mobile menu - important redirects - 404
behavior

### 35.2 Visual QA

Test:

-   desktop
-   laptop
-   tablet
-   mobile
-   real AJOracle image crops
-   long/short content
-   keyboard navigation
-   reduced motion
-   loading/error states

Do not rely solely on one desktop screenshot.

------------------------------------------------------------------------

## 36. CI / Pull Request Quality Gate

Before merge, the repository should be able to run the agreed
equivalents of:

``` text
lint
typecheck
tests
build
```

Critical e2e checks may be included in CI when stable enough.

Do not merge code that only works in development but fails a production
build.

------------------------------------------------------------------------

## 37. Deployment

### Website

``` text
GitHub
   ↓
Vercel preview deployments
   ↓
Review / validation
   ↓
Production deployment
```

Use Vercel environment separation appropriately.

### Content updates

Routine CMS content publication should **not** require a Vercel
deployment.

It should trigger cache/data revalidation as needed.

### Production ownership

Production project/accounts should remain owned by
AJOracle/client-controlled infrastructure where provider models support
it, with developers receiving appropriate access.

------------------------------------------------------------------------

## 38. WordPress Migration / Cutover

The old WordPress site should remain available until V2 is
production-ready.

Before DNS/cutover:

1.  Complete content/asset migration.
2.  Verify redirects.
3.  Verify metadata/canonicals.
4.  Verify sitemap/robots.
5.  Test forms.
6.  Test external music/video links.
7.  Test responsive layouts.
8.  Validate analytics.
9.  Validate legal/footer destinations.
10. Verify production environment configuration.
11. Confirm Vercel custom domain.
12. Perform final client review.

Do not remove or overwrite the old production site prematurely.

------------------------------------------------------------------------

## 39. Content Preview

A CMS preview workflow MAY be added if the admin product requires
reviewing unpublished website content before publication.

If implemented:

-   preview access must be protected
-   draft content must not become indexable
-   preview URLs must not grant broad admin access
-   preview logic should use official framework/backend mechanisms where
    possible

Do not build preview infrastructure before it is actually needed.

------------------------------------------------------------------------

## 40. Search

A website-wide search feature is not implied by the mobile app's search
requirement.

Do not implement website search unless the website PRD/client explicitly
requires it.

The public site is intentionally smaller than the mobile product.

------------------------------------------------------------------------

## 41. Authentication

General visitor authentication is not part of the focused Website V2
scope.

Do not add:

-   website signup/login
-   favorites
-   playlists
-   listening history
-   membership dashboard
-   premium entitlement UI

unless the product scope changes.

Admin authentication belongs to `ajoracle-cms`, not the public website.

------------------------------------------------------------------------

## 42. API Surface

Do not build a generic public REST API for the website.

Use:

-   Server Components/server-side queries for reads
-   Server Actions or Route Handlers for genuine website
    mutations/integrations
-   narrow authenticated webhook/revalidation endpoints when needed

Every endpoint should exist because a concrete workflow needs it.

------------------------------------------------------------------------

## 43. Dependency Policy

Prefer mature, well-maintained dependencies.

Before adding a package, ask:

-   Does the platform/framework already solve this?
-   Is the package needed in production?
-   Does it add meaningful bundle/runtime cost?
-   Is it maintained?
-   Does it duplicate an existing dependency?

Avoid dependency-heavy solutions for simple UI effects.

Exact package choices belong to implementation and should use current
stable compatible releases at that time.

------------------------------------------------------------------------

## 44. TypeScript and Code Quality

Use strict TypeScript.

Guidelines:

-   avoid `any` unless there is a documented boundary reason
-   model external data explicitly
-   validate unknown external input
-   keep components focused
-   avoid giant page components
-   avoid premature generic abstractions
-   name by responsibility
-   keep server-only modules clearly server-only
-   do not duplicate shared query logic across pages

------------------------------------------------------------------------

## 45. Shared Contract Change Procedure

When `ajoracle-web` needs a shared backend change:

``` text
1. Identify the website requirement.
2. Determine whether the field/entity is shared.
3. Check impact on CMS and mobile.
4. Agree the contract.
5. Add migration in canonical ajoracle-cms Supabase workflow.
6. Update CMS behavior if required.
7. Update website types/queries.
8. Update mobile contract usage if affected.
9. Deploy in a backward-compatible sequence where possible.
```

Do not deploy a website expecting a database field that has not yet been
safely deployed.

Prefer additive/backward-compatible schema evolution.

------------------------------------------------------------------------

## 46. Example Release Publishing Flow

``` text
Diana opens AJOracle CMS
        │
        ▼
Creates/edits release
        │
        ├─ title / metadata
        ├─ approved artwork
        ├─ approved external links
        ├─ publication/visibility
        └─ featured placement where supported
        │
        ▼
CMS validates
        │
        ├─ media goes to approved media infrastructure
        └─ structured metadata goes to Supabase
        │
        ▼
Publish succeeds
        │
        ├─────────────► Mobile consumes updated shared data
        │
        └─────────────► Website revalidation triggered
                              │
                              ├─ homepage if affected
                              └─ releases surface if affected
```

The CMS does not send a separate copied release payload that becomes the
website's own database.

Supabase/shared backend data remains the shared source of truth.

------------------------------------------------------------------------

## 47. Example Post Publishing Flow

``` text
CMS
  ↓
Create/edit post
  ↓
Validate title, slug, content, imagery, publication state
  ↓
Publish shared record
  ↓
Trigger website revalidation
  ↓
News listing + article route update
```

The website renderer owns web presentation. The CMS owns content
administration.

------------------------------------------------------------------------

## 48. Example Video Publishing Flow

If dynamic website video management remains approved:

``` text
CMS
  ↓
Create/edit video metadata
  ↓
Upload/reference approved provider media
  ↓
Store poster + playback/reference metadata
  ↓
Publish
  ↓
Revalidate website video/home surfaces
```

Do not upload video separately into the website repository for every
routine publication.

------------------------------------------------------------------------

## 49. Architectural Anti-Patterns

Do not:

-   Route normal website reads through the CMS application.
-   Duplicate Supabase migrations in `ajoracle-web`.
-   Create a fourth backend repository without a real requirement.
-   Build a standalone Express API just because Next.js has a frontend.
-   Query Supabase independently from random UI components.
-   Fetch all public content client-side after page load.
-   Disable caching because CMS content is dynamic.
-   Hardcode current releases/posts/videos into production page
    components.
-   Build a generic page builder.
-   Build a streaming web app.
-   Add website user accounts.
-   Expose premium/private mobile media.
-   Store secrets in `NEXT_PUBLIC_*`.
-   Treat generated design imagery as production assets.
-   Invent missing CMS fields independently.
-   Couple website deployment to every content publication.
-   Add speculative microservices.
-   Over-engineer the website because the mobile app is complex.

------------------------------------------------------------------------

## 50. Implementation Phases

Recommended order:

### Phase 0 --- Repository foundation

-   Initialize Next.js/TypeScript/Tailwind
-   Add quality scripts
-   Add environment validation
-   Establish fonts/tokens/layout primitives
-   Add documentation
-   Configure Vercel preview

### Phase 1 --- Static visual shell

-   Global layout
-   Header/navigation
-   Footer
-   design-system primitives
-   homepage visual sections using controlled temporary/static content
    where needed

### Phase 2 --- Shared content integration

-   Supabase server data layer
-   release queries
-   post queries
-   video queries if approved
-   visibility/publication mapping
-   homepage composition

### Phase 3 --- Dynamic publishing

-   CMS-to-web revalidation
-   dynamic listings/details where approved
-   safe fallback/error handling

### Phase 4 --- Forms + SEO

-   contact flow
-   metadata
-   JSON-LD
-   sitemap/robots
-   redirects

### Phase 5 --- App promotion + final media

-   real app screenshots
-   valid store links when available
-   final video posters/artwork
-   atmospheric asset refinement

### Phase 6 --- QA and launch

-   responsive QA
-   accessibility
-   performance
-   content QA
-   SEO QA
-   redirects
-   production cutover

Implementation phases do not override the PRD; they organize delivery.

------------------------------------------------------------------------

## 51. Open Engineering Decisions

Do not invent these prematurely. Resolve when implementation reaches
them or when coordination with the CMS/mobile team requires it.

1.  Exact Next.js/package versions at initialization.
2.  Exact Supabase server client pattern compatible with the selected
    framework version.
3.  Exact CMS-to-website revalidation mechanism.
4.  Exact shared publication/visibility field names.
5.  Whether videos are CMS-managed on web in V1 or remain simpler
    references.
6.  Exact rich-text storage/rendering format for posts.
7.  Exact contact email/provider configuration.
8.  Exact analytics provider/configuration.
9.  Exact consent requirements based on analytics/third-party embeds.
10. Exact preview workflow, if needed.
11. Exact old WordPress redirect inventory.
12. Exact image storage/source strategy for shared artwork where not
    already decided.
13. Exact public audio behavior on the website.
14. Final legal/privacy/terms content and ownership.
15. Exact app-store promotion timing and URLs.

An open engineering decision is not permission for Codex to choose a
business requirement silently.

------------------------------------------------------------------------

## 52. Definition of Architecture-Ready

The website is ready to move from architecture planning into
agent/repository instructions when:

-   Product scope is defined in `PRODUCT_REQUIREMENTS.md`.
-   Visual direction is defined in `DESIGN_SYSTEM.md`.
-   Three-repository ownership is understood.
-   `ajoracle-cms` is recognized as canonical Supabase migration owner.
-   Website data access is server-first.
-   CMS is not treated as a website API gateway.
-   Rendering/caching/revalidation strategy is defined.
-   Shared-content boundaries are clear.
-   Security and secret boundaries are clear.
-   SEO, accessibility, performance, testing, and deployment
    responsibilities are defined.
-   Remaining unresolved items are explicitly open rather than silently
    guessed.

At that point, create `AGENTS.md` for repository-specific Codex
operating rules, then initialize and implement `ajoracle-web`.

------------------------------------------------------------------------

## 53. Source-of-Truth Summary

``` text
PRODUCT_REQUIREMENTS.md
    WHAT to build

DESIGN_SYSTEM.md
    HOW it should look and visually behave

ARCHITECTURE_ENGINEERING.md
    HOW it should be engineered

AGENTS.md
    HOW Codex should work in the repository
```

The website is intentionally a **focused public artist website**, not a
second implementation of the AJOracle mobile application.

The engineering architecture must preserve that constraint.
