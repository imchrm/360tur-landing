# Design System Specification: The Spatial Lens

## 1. Overview & Creative North Star
The design system for this 3D virtual tour service is guided by a Creative North Star we call **"The Spatial Lens."** 

In an industry defined by 360-degree immersion, the interface must not feel like a flat container, but rather a sophisticated, glass-like overlay that sits atop the content. We move away from the "template" look of standard SaaS platforms by embracing **Editorial High-Contrast**. This means breaking rigid grids with intentional asymmetry, utilizing extreme typographic scales, and replacing structural lines with tonal depth. The result is a high-tech, premium experience that feels as architectural and precise as the tours themselves.

## 2. Color & Atmospheric Depth
Our palette utilizes deep, wine-infused tones and sharp neutral contrasts to create a "Digital Gallery" aesthetic.

### The Color Logic
- **Primary Foundation:** Use `primary` (#5C092C) for high-authority moments and interactive depth.
- **Tonal Accents:** Use `secondary` (#6C1C0B) and `tertiary` (#3B0847) sparingly to highlight navigation paths or high-tech features (e.g., 3D floorplan toggles).
- **Surface Palette:** Our background logic prioritizes clarity. We use `neutral` (#131313) as the anchor for high-contrast text and deep surfaces, ensuring all chromatic elements pop against the clinical backdrop.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or card definition. Boundaries must be defined solely through background color shifts or subtle tonal transitions. 
- *Example:* A "Property Details" section should be differentiated from the main page through subtle changes in surface hex codes rather than a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base:** Standard surface.
- **Sectioning:** Lower-elevation containers.
- **Interactive Cards:** High-elevation containers to create a "lifted" feel.
- **Floating Controls:** Use **Glassmorphism**. Floating UI elements (like 3D navigation arrows) should use semi-transparent surface colors with a 20px backdrop-blur to signify high-tech precision.

### Signature Textures
To avoid a "flat" feel, main CTAs or Hero sections should utilize a subtle linear gradient transitioning from `primary` (#5C092C) to a deeper tonal variant at a 135-degree angle. This provides a "liquid wine" depth that solid colors cannot achieve.

## 3. Typography
We use a Modern Grotesk pairing to balance technical precision with editorial luxury.

- **Display & Headlines (Manrope):** Use Manrope for all `display-` and `headline-` tokens. This font's geometric construction reflects architectural lines. For `display-lg`, use a tight letter-spacing (-0.02em) to create a premium, "poster-like" feel.
- **Body & Labels (Inter):** Use Inter for all `body-` and `label-` tokens. It provides maximum legibility for property descriptions and technical data.
- **Visual Hierarchy:** Contrast is our primary tool. A `display-lg` headline should often be paired directly with a `body-md` description, skipping the mid-range headers to create a sophisticated, asymmetrical tension.

## 4. Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** rather than traditional drop shadows.

- **The Layering Principle:** Stack surfaces to create focus. Higher container tiers should only be used for the most critical overlays (e.g., a "Book a Tour" modal) to ensure it sits "closest" to the user.
- **Ambient Shadows:** When a floating effect is mandatory (e.g., a floating navigation bar), use an extra-diffused shadow. 
    - *Shadow Token:* `color: rgba(92, 9, 44, 0.06); blur: 40px; y: 12px;`
    - Note the use of a tinted shadow (using a low-opacity version of the `primary` color) rather than a neutral grey.
- **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use the `outline_variant` token at **20% opacity**. Never use 100% opaque borders.

## 5. Components

### Buttons
- **Primary:** Filled with `primary` (#5C092C). Label in `on_primary`. Roundedness: `moderate` (Setting 2).
- **Secondary:** Transparent background with a "Ghost Border" of `outline_variant` at 20%.
- **Interaction:** On hover, primary buttons should increase in intensity with a subtle 2px vertical lift.

### Cards & Information Units
Cards must never have borders. Use subtle color shifts for the card body. 
- **Spacing:** Use the `moderate` (Setting 2) roundedness for card corners to soften the architectural edge while maintaining structural integrity. 
- **Separation:** Forbid the use of divider lines within cards. Use vertical whitespace (Normal Spacing Scale 2) to separate the title from the metadata.

### 3D Navigation Chips
Small, interactive elements used to toggle between "3D Tour," "Video," and "Gallery."
- Use `tertiary` (#3B0847) for the "active" state to provide a high-tech purple glow that feels distinct from the primary branding.

### Input Fields
- **Background:** High-contrast surface container.
- **Active State:** A bottom-only border of 2px using `primary` (#5C092C). This mimics a professional architectural drawing style.

### Navigation (The Glass Bar)
The top navigation should be a floating "Island" using high-transparency surfaces at 85% opacity with a heavy backdrop blur. This ensures the 3D tour content is always visible beneath the UI.

## 6. Do’s and Don’ts

### Do:
- **Do** use asymmetrical layouts. Let a headline sit on the left with a large empty "breathing room" on the right.
- **Do** use `display-lg` typography for property names to make them feel like magazine covers.
- **Do** use "Near Black" (`neutral` #131313) for text on light surfaces to maintain high contrast for accessibility.

### Don't:
- **Don't** use 1px solid lines to separate content. Use background color blocks.
- **Don't** use standard "Material Design" shadows. Keep them wide, soft, and tinted with the primary wine tone.
- **Don't** crowd the interface. The current spacing (Setting 2) ensures breathing room, but if a screen feels full, increase the layout margins.
- **Don't** use pure black (#000000). Always use the `neutral` (#131313) to maintain a soft, premium feel.