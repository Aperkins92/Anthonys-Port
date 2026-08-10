Overview
This milestone improves the accessibility, structure, and visual design of my portfolio website. All updates were applied across the Home, Projects, and About/Contact pages to ensure WCAG AA compliance, intentional visual design, and an accessible contact form.

 Accessibility Improvements (WAVE + WCAG AA)
All three pages were tested using the WAVE Web Accessibility Evaluation Tool.
Each page now passes with 0 errors, 0 contrast errors, and 0 alerts.

Documented Fixes
Alt text improvements — Added descriptive alt text to all images so screen readers can understand visual content.

Heading structure — Updated headings to follow a clear H1 → H2 → H3 hierarchy, improving navigation for assistive technologies.

Link purpose clarity — Ensured all navigation and project links include meaningful text describing their destination.

ARIA cleanup — Removed unnecessary ARIA attributes to prevent duplicate announcements and improve screen reader clarity.

Color contrast — Adjusted text and background colors to meet WCAG AA contrast ratios for readability.

Color Contrast Verification
All text/background color combinations were checked using the WebAIM Contrast Checker:

Normal text meets 4.5:1

Large text meets 3:1

My color palette is now consistent across all pages, improving readability and visual cohesion.

 Visual Design Enhancements (Gestalt Principles)
I applied two Gestalt principles intentionally to improve clarity and user experience:

Proximity — Grouped related content such as project cards, navigation links, and section text so users can quickly understand which items belong together.

Similarity — Used consistent colors, typography, and card layouts across all pages to visually signal that these elements share a common purpose.

These principles help create a clean, organized, and predictable layout throughout the site.

 Accessible Contact Form
The About/Contact page now includes a fully accessible form with:

Proper <label> elements linked using for=""

A <fieldset> and <legend> grouping contact information

Four required fields: Name, Email, Subject, and Message

Accessible error messages using DOM updates with aria-live="polite"

Semantic HTML and keyboard‑friendly focus order