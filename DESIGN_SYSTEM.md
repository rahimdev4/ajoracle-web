# AJOracle Website V2 --- Design System

**Document:** `DESIGN_SYSTEM.md`\
**Product:** AJOracle Website V2\
**Platform:** Responsive Web\
**Primary implementation:** Next.js\
**Status:** Design source of truth for V2 implementation\
**Companion document:** `PRODUCT_REQUIREMENTS.md`

------------------------------------------------------------------------

## 1. Purpose

This document defines **how AJOracle Website V2 should look, feel, and
behave visually**.

It translates the approved homepage direction into a reusable web design
system. It is intended for designers, developers, and Codex working
inside `ajoracle-web`.

This document does not replace `PRODUCT_REQUIREMENTS.md`. The PRD
defines what the website must do; this document defines its visual and
interaction language.

The high-fidelity homepage concept is a **directional reference**, not a
pixel-perfect production specification. Exact dimensions may be refined
during implementation when real content, responsive behavior, browser
rendering, and approved assets require it.

------------------------------------------------------------------------

## 2. Design Direction

### 2.1 Core concept

> **Cinematic editorial artist experience with spiritual warmth.**

AJOracle should feel like an artist's world rather than a generic
website template, streaming dashboard, SaaS product, or black-and-gold
luxury theme.

Three qualities lead the system:

-   **Cinematic** --- large imagery, atmosphere, dramatic composition,
    depth.
-   **Editorial** --- sophisticated typography, deliberate whitespace,
    asymmetric layouts, strong hierarchy.
-   **Spiritual warmth** --- restrained gold, warm light, organic
    imagery, subtle cosmic references.

### 2.2 Desired qualities

The website should feel:

-   Premium
-   Elegant
-   Spiritual
-   Cinematic
-   Modern
-   Dark
-   Warm
-   Calm
-   Content-focused
-   Artistic
-   Intentional

### 2.3 Avoid

Do not make the site feel like:

-   A generic WordPress music theme
-   A Spotify/streaming clone
-   A dashboard
-   A gaming interface
-   Neon/cyberpunk
-   A jewelry/luxury-commerce template
-   An AI-generated black-and-gold template
-   A page composed primarily of rounded cards
-   A mobile-app screen stretched onto desktop

------------------------------------------------------------------------

## 3. Design Authority and Flexibility

When visual decisions conflict, use this order:

1.  Explicit client-approved AJOracle assets/content
2.  This website design system
3.  Approved Website V2 homepage direction
4.  AJOracle mobile brand language where relevant
5.  Existing website as brand/content reference
6.  Engineering judgment

The website may share brand DNA with the mobile app, but web layouts
must be designed for web.

### Locked direction

The following are considered established:

-   Dark cinematic foundation
-   Warm ivory text
-   Restrained AJOracle gold
-   Editorial serif + functional sans-serif pairing
-   Large authentic imagery
-   Generous negative space
-   Minimal conventional card chrome
-   Subtle cosmic/atmospheric treatment
-   Real AJOracle assets in production
-   Restrained motion
-   Homepage hierarchy defined later in this document

### Flexible during implementation

These may be tuned after testing with real assets:

-   Exact hero height
-   Exact type sizes within defined ranges
-   Exact section spacing
-   Exact image crop/position
-   Amount/location of atmospheric texture
-   Exact border radius
-   Exact animation durations within the motion principles
-   Minor responsive rearrangements

Do not use flexibility as permission to change the overall art
direction.

------------------------------------------------------------------------

## 4. Color System

### 4.1 Core palette

  ----------------------------------------------------------------------------
  Token                        Value                   Primary role
  ---------------------------- ----------------------- -----------------------
  `--color-bg`                 `#07080B`               Main page canvas

  `--color-bg-secondary`       `#0E1014`               Subtle section
                                                       differentiation

  `--color-surface`            `#15171C`               Rare elevated
                                                       surfaces/overlays

  `--color-surface-elevated`   `#1C1E24`               Menus/dialogs when
                                                       needed

  `--color-text`               `#F7F5F0`               Primary text

  `--color-text-muted`         `#A7A7AA`               Supporting text

  `--color-gold`               `#AE8514`               Primary brand accent

  `--color-gold-highlight`     `#D4AC32`               Select hover/highlight
                                                       moments

  `--color-gold-deep`          `#7A5B0D`               Dark decorative gold

  `--color-border`             `#2A261C`               Warm subtle
                                                       borders/dividers

  `--color-error`              `#E45858`               Error states

  `--color-success`            `#5FB878`               Success states
  ----------------------------------------------------------------------------

### 4.2 Usage balance

The visual balance should approximately feel like:

-   70--80% dark canvas / imagery
-   15--25% ivory and neutral typography
-   \~5% gold emphasis

This is a compositional guideline, not a measured quota.

### 4.3 Gold rule

Gold is an **attention and identity accent**, not the default UI color.

Good uses:

-   Primary CTA
-   Active/hover indicator
-   Small eyebrow label
-   Thin editorial rule
-   Selected icon
-   Important word or phrase in a display heading
-   Small metadata accent
-   Controlled atmospheric glow

Avoid:

-   Gold body paragraphs
-   Gold borders around every component
-   Gold glow around everything
-   Gold backgrounds for whole sections without a strong reason
-   Multiple competing gold gradients
-   Making every icon gold

### 4.4 Dark surfaces

Prefer the main near-black canvas over stacking many visibly different
dark rectangles.

Use `--color-bg-secondary` and surfaces only when they improve
hierarchy, readability, or interaction.

Section changes should often be created through spacing, imagery,
gradients, or subtle tonal shifts rather than hard alternating bands.

------------------------------------------------------------------------

## 5. Typography

### 5.1 Font families

**Cormorant Garamond**\
Role: expressive/editorial typography.

Use for:

-   Hero display
-   Major section titles
-   Release titles
-   Editorial/story titles where appropriate
-   Artistic statements or quotations

**Manrope**\
Role: functional UI and readable communication.

Use for:

-   Navigation
-   Body copy
-   Labels
-   Buttons
-   Metadata
-   Dates
-   Forms
-   Utility links
-   Footer content

### 5.2 Principle

> **Cormorant communicates artist, story, and emotion. Manrope
> communicates information, navigation, and action.**

Do not use the serif indiscriminately for all text.

### 5.3 Desktop working scale

Use fluid responsive sizing where appropriate rather than hard-coding
these as universal values.

  Role                      Approximate desktop range
  ----------------------- ---------------------------
  Hero display                               72--96px
  Major section heading                      48--64px
  Secondary heading                          34--44px
  Article/release title                      22--30px
  Body large                                 18--20px
  Body                                       16--18px
  Navigation                                 14--15px
  Eyebrow/label                              12--14px
  Metadata                                   12--14px

### 5.4 Type behavior

-   Display typography may use tighter line height.
-   Body copy must prioritize readability.
-   Keep body line lengths controlled, generally around 55--75
    characters.
-   Uppercase labels may use increased letter spacing.
-   Avoid excessive all-caps text.
-   Do not use decorative script fonts as general UI typography.
-   If the official AJOracle logo/wordmark includes custom lettering,
    treat it as a brand asset rather than replacing it with body
    typography.

------------------------------------------------------------------------

## 6. Layout System

### 6.1 Container

Primary desktop content should generally live within a maximum width of
approximately **1280--1360px**, with appropriate viewport gutters.

Do not force every section into the same internal width. Editorial
sections may use narrower copy columns, wider media, or asymmetric
grids.

### 6.2 Suggested gutters

Working guidance:

-   Large desktop: 56--72px
-   Desktop/laptop: 40--56px
-   Tablet: 28--40px
-   Mobile: 20--24px

Use fluid CSS where practical.

### 6.3 Grid

A 12-column desktop grid is a useful implementation foundation, but the
page should not visually advertise the grid.

Common compositions:

-   5/7 or 6/6 image/text split
-   4/8 video/text split
-   8/4 editorial feature
-   3- or 4-item media row
-   Full-bleed visual with contained copy

### 6.4 Section spacing

Major desktop sections should generally have generous vertical spacing,
approximately **120--180px** where the composition permits.

Mobile spacing should reduce while remaining visibly generous.

Whitespace must create pacing, not unexplained emptiness.

### 6.5 Rhythm

Avoid a repeated pattern of:

`heading → 3 cards → heading → 3 cards`.

Vary section composition so the homepage reads like an editorial
experience.

------------------------------------------------------------------------

## 7. Responsive System

### 7.1 Principle

> **Recompose, do not merely shrink.**

Desktop and mobile should communicate the same identity but may use
different arrangements.

### 7.2 Practical breakpoint guidance

Exact breakpoints may follow the implementation stack, but use roughly:

-   Mobile: `< 640px`
-   Large mobile / small tablet: `640–767px`
-   Tablet: `768–1023px`
-   Laptop: `1024–1279px`
-   Desktop: `1280px+`

Do not design around device names alone; respond to available space and
content.

### 7.3 Mobile behavior

-   Stack split layouts intentionally.
-   Re-crop photography for portrait screens.
-   Preserve editorial hierarchy.
-   Keep section spacing generous but reduced.
-   Avoid tiny multi-column content.
-   Keep CTAs easy to reach.
-   Ensure navigation becomes an intentional mobile menu.
-   Do not hide essential content purely to preserve desktop aesthetics.

------------------------------------------------------------------------

## 8. Imagery System

### 8.1 Production-image rule

**Use approved existing AJOracle imagery and production assets wherever
representing AJOracle, releases, articles, or videos.**

Generated concept imagery is **not production content**.

The homepage concepts are art-direction references only.

Do not generate or substitute a different person for AJOracle in
production.

### 8.2 Artist photography

Artist photography should be visually important.

Allowed treatments:

-   Large-scale crops
-   Edge-to-edge presentation
-   Asymmetric placement
-   Soft masks into dark backgrounds
-   Controlled gradients over edges for text legibility
-   Full-height or oversized compositions
-   Responsive focal-position adjustments

Avoid:

-   Tiny portrait cards when the image is a primary storytelling asset
-   Excessive rounded containers
-   Heavy filters that materially alter the subject
-   AI regeneration of the artist without explicit approval

### 8.3 Hero source imagery

When the approved source image is square or otherwise does not naturally
fill a wide hero:

-   Preserve the authentic image.
-   Position/crop carefully.
-   Blend edges with masks/gradients.
-   Extend the surrounding atmosphere with CSS/decorative layers.
-   Do not invent missing portions of the artist as though they were
    part of the source photograph.

### 8.4 Release artwork

-   Preserve intended artwork ratio, normally square.
-   Do not modify embedded typography/art direction without approval.
-   Give important artwork enough scale.
-   Avoid decorative frames unless they serve the composition.

### 8.5 Video imagery

Use:

-   Approved video poster
-   Approved thumbnail
-   Selected frame from the approved source where legally/operationally
    appropriate

Do not use concept-generated substitute scenes in production.

### 8.6 Story/article imagery

Use approved editorial imagery. Cropping may vary by context, but
preserve the subject and intent.

### 8.7 App imagery

When the app section is implemented, use **real current Flutter app
screenshots** inside restrained device framing.

Do not ship fabricated app screens merely because they appeared in a
concept.

------------------------------------------------------------------------

## 9. Atmospheric Visual System

### 9.1 Purpose

Atmosphere supports AJOracle's spiritual/cosmic identity without
becoming wallpaper.

Think:

-   Warm light
-   Dust
-   Soft particles
-   Gentle glow
-   Depth
-   Vignette
-   Subtle organic texture

Not:

-   Outer-space wallpaper
-   Dense stars across every section
-   Repeating glitter
-   Fantasy-game effects

### 9.2 Implementation preference

Prefer maintainable layers:

1.  CSS radial gradients
2.  CSS linear gradients
3.  Masks/vignettes
4.  Subtle reusable noise/texture
5.  Small optimized decorative particle assets only when necessary

Do not slice the AI concept into giant section background images.

### 9.3 Distribution

Suggested intensity:

-   Hero: medium atmospheric treatment
-   Latest Release: subtle to medium
-   Featured Video: mostly clean/dark
-   Oracle Picks: may carry a stronger signature atmosphere
-   Stories: mostly clean
-   App promotion: controlled warm/cinematic atmosphere
-   Footer: quiet/minimal

Atmosphere should become more powerful because it is not everywhere.

------------------------------------------------------------------------

## 10. Surfaces, Borders, Radius, and Shadow

### 10.1 Surfaces

Prefer open compositions over boxed components.

Use surfaces for genuine UI grouping, overlays, menus, forms, and
controls.

### 10.2 Borders

Use subtle warm/dark borders. Thin rules may be used as editorial
details.

Avoid prominent borders around every item.

### 10.3 Radius

Use restrained radii. Media can be square-cornered or subtly rounded
depending on composition.

Avoid large SaaS-style rounded cards.

Working range for ordinary UI: approximately 6--12px, subject to visual
testing.

### 10.4 Shadows

Dark cinematic compositions should rely more on depth, gradients, and
contrast than obvious drop shadows.

If shadows are used, keep them soft and understated.

------------------------------------------------------------------------

## 11. Buttons and Links

### 11.1 Primary CTA

Typical treatment:

-   Gold background
-   Dark text
-   Compact/medium height
-   Clear label
-   Optional restrained arrow icon
-   Modest radius

Use for the single strongest action in a local context, e.g. **Listen
Now** or **Explore Music**.

### 11.2 Secondary action

Prefer editorial text links:

`Explore Releases →`

or a restrained outline treatment when additional affordance is
necessary.

### 11.3 Avoid

-   Oversized pill buttons
-   Multiple primary buttons competing in one section
-   Heavy glow
-   Gratuitous icons
-   SaaS-style button clusters

### 11.4 Interaction

Hover/focus may use:

-   Slight gold shift
-   Underline/rule movement
-   Subtle arrow translation
-   Small opacity/background change

Keyboard focus must remain clearly visible.

------------------------------------------------------------------------

## 12. Header and Navigation

### 12.1 Desktop

The header should be minimal and visually integrated with the hero.

Typical structure:

``` text
AJOracle                 Releases  Videos  News  About  Contact
```

Social icons or utility actions may be included only if they remain
visually restrained.

### 12.2 Top-of-page behavior

Prefer transparent/integrated treatment over the hero.

### 12.3 Scrolled state

A sticky/scrolled state may use:

-   Dark translucent background
-   Subtle backdrop blur
-   Thin bottom boundary
-   Reduced visual noise

Only use sticky behavior if it improves navigation rather than
obstructing content.

### 12.4 Active state

Use restrained gold/rule treatment. Avoid oversized tabs or filled
navigation pills.

### 12.5 Mobile navigation

Use a deliberate full/large menu or compact drawer treatment consistent
with the cinematic identity.

Requirements:

-   Keyboard accessible
-   Escape to close where relevant
-   Focus management
-   Scroll locking where relevant
-   Clear close control
-   No tiny tap targets

------------------------------------------------------------------------

## 13. Section Heading Pattern

A recurring editorial pattern may combine:

``` text
L A T E S T   R E L E A S E     ─────
```

with a larger serif title inside the section.

Rules:

-   Eyebrow uses Manrope.
-   Increased tracking.
-   Gold or warm-neutral accent.
-   Thin rule used sparingly.
-   Do not repeat identical heading decoration mechanically in every
    section if it becomes monotonous.

------------------------------------------------------------------------

## 14. Media and Content Presentation

### 14.1 General rule

> **A content item does not automatically require a card.**

Prefer artwork + typography on the page canvas.

### 14.2 Release presentation

For major release features:

-   Large artwork
-   Large serif release title
-   Small artist/metadata
-   Concise supporting copy if useful
-   Primary listening CTA
-   Approved platform links

For release collections:

-   Artwork
-   Title
-   Minimal metadata
-   Optional play/listen affordance
-   Minimal/no card background

### 14.3 Video presentation

Featured video should be visually substantial.

Use:

-   Large poster/frame
-   Clear play affordance
-   Title/context
-   Minimal supporting copy

Avoid multiple tiny embedded players.

### 14.4 Story presentation

Stories should feel editorial, not like generic blog cards.

Use hierarchy such as:

-   One stronger feature story
-   Supporting stories
-   Strong imagery
-   Date/metadata
-   Serif title
-   Short excerpt only when useful

The exact grid may change based on real imagery.

------------------------------------------------------------------------

## 15. Motion System

### 15.1 Principle

> Motion should be felt more than noticed.

### 15.2 Appropriate motion

-   Gentle opacity/translate reveal
-   Subtle image reveal
-   Very small image scale on hover
-   Underline/rule movement
-   Arrow translation
-   Soft background/atmosphere drift
-   Restrained parallax only if it performs well
-   Smooth media transitions

### 15.3 Avoid

-   Bouncing
-   Aggressive scroll choreography
-   Multiple directions of flying text
-   Spinning decorative objects
-   Constant particle animation
-   Excessive parallax
-   Animation added merely because the library supports it

### 15.4 Timing

Favor calm, polished transitions. Most ordinary interactions should
remain responsive; atmospheric entrances may be slightly slower.

Do not introduce perceived lag.

### 15.5 Reduced motion

Respect `prefers-reduced-motion` and remove or substantially reduce
nonessential movement.

------------------------------------------------------------------------

## 16. Homepage Composition

The approved working hierarchy is:

``` text
01  Header + Hero
02  Latest Release
03  Featured Video
04  Oracle Picks
05  Latest Stories
06  App Promotion
07  Footer / Contact conclusion
```

Do not add sections merely to make the homepage longer.

### 16.1 Hero

**Role:** identity + emotion.

Requirements:

-   AJOracle is the dominant visual subject.
-   Use approved real AJOracle imagery.
-   Large editorial `AJOracle` display.
-   Short positioning line such as Singer / Songwriter / Creator if
    approved.
-   Minimal supporting copy.
-   One primary action.
-   Optional secondary video action.
-   Atmospheric treatment may be strongest here.
-   Header integrates visually into hero.

The exact hero height should be determined with the real source image
rather than copied from the concept screenshot.

### 16.2 Latest Release

**Role:** importance + discovery.

Requirements:

-   Large real release artwork.
-   Release title has strong typographic presence.
-   Clear listening CTA.
-   Approved platform links where available.
-   Supporting description should be concise.
-   Do not reduce the latest release to a small card.

CMS-driven content should be able to update this section without
redesigning the page.

### 16.3 Featured Video

**Role:** immersion.

Requirements:

-   Use the real approved poster/thumbnail/frame.
-   Large visual treatment.
-   Clear play/watch affordance.
-   Minimal copy.
-   Avoid tiny generic embedded-player styling.

### 16.4 Oracle Picks

**Role:** personality + curation.

This is a distinctive AJOracle concept and should be retained unless
later client feedback changes it.

Requirements:

-   Curated selection, not full catalog.
-   Real approved artwork.
-   Simple title/metadata.
-   Minimal play/listen affordance.
-   Link to the broader releases destination where appropriate.
-   May receive a slightly stronger cosmic signature than ordinary
    sections.

### 16.5 Latest Stories

**Role:** editorial depth.

Requirements:

-   Use real article imagery.
-   Show only a focused recent/featured set.
-   Strong title hierarchy.
-   Dates and short excerpts where useful.
-   Link to all posts.
-   Avoid default WordPress-blog appearance.

### 16.6 App Promotion

**Role:** introduce the mobile product without making the website an app
landing page.

Requirements:

-   Secondary to the artist/content experience.
-   Use real app screenshots when available.
-   Use official App Store / Google Play destinations only when
    confirmed.
-   May be omitted or held back until app assets/store availability are
    ready.
-   Keep copy concise.

### 16.7 Footer

**Role:** quiet, useful conclusion.

Potential content:

-   AJOracle wordmark
-   Short approved brand line
-   Quick links
-   Music/platform links
-   Social links
-   Contact
-   Privacy
-   Terms where applicable
-   Account deletion/support where applicable

Do not make the footer visually louder than the content above it.

------------------------------------------------------------------------

## 17. Inner-Page Direction

Inner pages should inherit the homepage system rather than invent
separate visual languages.

### Releases

-   Strong page introduction
-   Artwork-led catalog
-   Minimal chrome
-   Clear external listening actions
-   Optional detail pages only if product scope later approves them

### Videos

-   Visual-first grid/list
-   Strong poster imagery
-   Clear watch behavior
-   Avoid dashboard-like filters unless actually needed

### News

-   Editorial hierarchy
-   Feature story + supporting posts where content permits
-   Strong readability

### Article

-   Narrow readable content column
-   Strong hero/title treatment
-   Comfortable long-form typography
-   Real article imagery
-   Minimal distractions

### About

-   Large authentic photography
-   Editorial storytelling
-   Alternating text/image compositions where useful
-   No invented biography

### Contact

-   Calm, simple layout
-   High-quality form styling
-   Clear labels
-   Accessible validation
-   No unnecessary marketing clutter

------------------------------------------------------------------------

## 18. Forms

Use Manrope for all form UI.

Fields should have:

-   Persistent labels
-   Clear text contrast
-   Dark restrained surfaces
-   Subtle borders
-   Clear focus state
-   Clear error/success state
-   Adequate height/touch targets

Do not rely on placeholder text as the only label.

Avoid highly rounded SaaS-style inputs unless later testing supports
them.

------------------------------------------------------------------------

## 19. Icons

Use a consistent thin/clean icon family or approved platform marks.

Rules:

-   Icons support meaning; they do not decorate every label.
-   Keep icon sizes restrained.
-   Use official marks for music/social platforms where appropriate.
-   Ensure accessible labels for icon-only controls.
-   Do not mix multiple unrelated icon styles.

------------------------------------------------------------------------

## 20. Accessibility

The aesthetic must not override usability.

Requirements include:

-   WCAG-aware color contrast
-   Visible keyboard focus
-   Semantic headings
-   Accessible navigation
-   Accessible menu/dialog behavior
-   Accessible form labels/errors
-   Meaningful alt text
-   Decorative imagery excluded from accessibility tree where
    appropriate
-   Adequate touch targets
-   Reduced-motion support
-   No information communicated by color alone
-   Text remains readable over imagery through overlays/masks when
    necessary

Do not lower contrast simply to make the site look more cinematic.

------------------------------------------------------------------------

## 21. Asset Rules

### 21.1 Real content first

Production representations of AJOracle and her content should use:

-   Approved existing AJOracle photography
-   Approved release artwork
-   Approved article imagery
-   Approved video thumbnails/posters
-   Real app screenshots when available

### 21.2 Concept images

AI-generated homepage mockups are **not an asset source**.

They communicate:

-   Composition
-   Hierarchy
-   Atmosphere
-   Scale
-   Typography direction
-   Section rhythm

They must not be cropped and shipped as website backgrounds or used as
fake production photography.

### 21.3 Decorative assets

If implementation needs atmospheric raster assets, create a small
reusable kit such as:

``` text
gold-dust.webp
subtle-noise.webp
gold-light-texture.webp
```

Only create assets that CSS cannot reproduce effectively.

Optimize all decorative assets and avoid unnecessary large background
files.

### 21.4 Missing content assets

If an approved release/video/story lacks required artwork:

-   Surface the missing asset.
-   Use an approved intentional fallback if one exists.
-   Do not silently invent production artwork.

------------------------------------------------------------------------

## 22. Performance-Aware Design

The premium appearance must remain compatible with a fast website.

Design implications:

-   Prefer CSS atmosphere over giant raster backgrounds.
-   Optimize responsive images.
-   Do not autoplay heavy video backgrounds by default.
-   Lazy-load below-the-fold media.
-   Reserve dimensions to avoid layout shift.
-   Use motion selectively.
-   Avoid excessive client-side animation libraries where CSS is
    sufficient.
-   Use modern image formats where appropriate.
-   Preserve visual quality without shipping unnecessary resolution.

Performance strategy details belong in `ARCHITECTURE_ENGINEERING.md`.

------------------------------------------------------------------------

## 23. Design Anti-Patterns

Codex/designers must not:

-   Turn every section into cards.
-   Add gradients/glows everywhere.
-   Use gold as the default text color.
-   Add sections not required by the PRD.
-   Introduce teaching/service content into the homepage without
    approval.
-   Add testimonials, statistics, tours/events, newsletters, or commerce
    just because comparable artist sites have them.
-   Invent artist photography.
-   Invent release covers.
-   Invent app screenshots.
-   Recreate a streaming dashboard.
-   Copy the Flutter UI directly.
-   Use tiny typography to appear sophisticated.
-   Use excessive decorative particles.
-   Add excessive glassmorphism.
-   Overuse rounded pills.
-   Add complex WebGL/3D merely for visual novelty.
-   Sacrifice accessibility for atmosphere.
-   Treat the concept screenshot as a pixel-perfect implementation spec.

------------------------------------------------------------------------

## 24. Content Integrity

Design must adapt to approved content rather than rewriting reality to
fit a mockup.

When the concept and real content differ:

1.  Preserve approved real content.
2.  Preserve the design principle.
3.  Adjust the composition.
4.  Request/flag a missing asset or decision when necessary.

Never fabricate factual artist/release information to fill visual space.

------------------------------------------------------------------------

## 25. Implementation Guidance for Codex

When implementing this system:

-   Build reusable primitives without forcing every section into one
    generic component.
-   Use semantic HTML.
-   Use design tokens/CSS variables for colors, spacing, typography, and
    motion.
-   Prefer server-rendered/static markup where interaction is
    unnecessary.
-   Keep decorative effects separate from content.
-   Preserve real image focal points responsively.
-   Use `clamp()` or equivalent fluid typography/spacing where
    appropriate.
-   Test at multiple viewport widths, not only named breakpoints.
-   Do not make arbitrary visual substitutions when a real asset is
    missing.
-   Keep the visual hierarchy stronger than component uniformity.
-   Match the approved art direction rather than mechanically copying
    the generated mockup.

------------------------------------------------------------------------

## 26. Initial Token Direction

The exact token implementation may be refined in code, but begin from
this structure:

``` css
:root {
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

  --font-editorial: "Cormorant Garamond", serif;
  --font-ui: "Manrope", sans-serif;
}
```

Spacing, radius, type, container, and motion tokens should be finalized
during implementation based on the rules in this document rather than
invented independently.

------------------------------------------------------------------------

## 27. Design QA Checklist

Before considering a page visually complete, verify:

-   Does it unmistakably feel like AJOracle rather than a generic theme?
-   Are approved real assets being used?
-   Is gold restrained?
-   Is imagery large enough to carry emotional weight?
-   Is there sufficient negative space?
-   Is the serif/sans hierarchy consistent?
-   Are sections visually varied without becoming inconsistent?
-   Are cards used only where useful?
-   Are cosmic effects subtle?
-   Is body text comfortably readable?
-   Are hover/focus states complete?
-   Does the mobile composition feel intentionally designed?
-   Are real image focal points preserved?
-   Are motion effects restrained?
-   Does reduced motion work?
-   Is the page accessible by keyboard?
-   Is the page performant enough for production?
-   Has any concept-generated content accidentally been treated as real
    content?
-   Has any new product functionality been added outside the PRD?

------------------------------------------------------------------------

## 28. Relationship to Future Changes

Client feedback may refine individual visual decisions during
implementation.

When that happens:

-   Preserve the core design direction unless the client explicitly
    changes it.
-   Update this document when a change establishes a new reusable rule.
-   Do not document every one-off content adjustment as a design-system
    rule.
-   Prefer improving the system over accumulating exceptions.

------------------------------------------------------------------------

## 29. Source of Truth Summary

For the website repository:

``` text
PRODUCT_REQUIREMENTS.md
    Defines WHAT to build.

DESIGN_SYSTEM.md
    Defines HOW it should look and visually behave.

ARCHITECTURE_ENGINEERING.md
    Defines HOW it should be engineered.

AGENTS.md
    Defines HOW Codex should operate in the repository.
```

If a design request would introduce functionality outside
`PRODUCT_REQUIREMENTS.md`, stop and resolve the product decision first.

------------------------------------------------------------------------

## 30. Next Project Step

With the product requirements and visual system established, the next
project document should be:

**`ARCHITECTURE_ENGINEERING.md`**

It should define the Next.js architecture, Supabase/CMS integration,
rendering and caching strategy, content contracts, image/media handling,
revalidation, contact handling, SEO implementation, security,
deployment, testing, and repository conventions.

After architecture is locked, create `AGENTS.md` and begin
implementation.
