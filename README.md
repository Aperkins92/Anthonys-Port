# Anthony's Personal Portfolio — Capstone

This is my three-page personal portfolio website for the capstone assignment.

The website shows my IT learning, hands-on experience, projects, interests, work background, and goals.

## Pages

- `index.html` — Home page, skills, experience, and contact form.
- `about.html` — My background, football interests, stagehand work, SkyCam experience, and journey into IT.
- `projects.html` — IT projects, research, JavaScript practice, and future project ideas.
- `style.css` — Shared styling, responsive design, colors, typography, accessibility, and dark mode.
- `script.js` — JavaScript interactions, theme persistence, project filters, and form validation.
- `Images/` — Portfolio images.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- GitHub Pages
- Local Storage

## Gestalt Principles

### Proximity

Related content is grouped together in cards and sections.

For example, each project has its title, description, skills, and what I learned grouped together. This helps users understand which pieces of information belong together.

### Similarity

The same colors, typography, buttons, borders, and card styles are used throughout the three pages.

The repeated Seahawks-inspired navy and green design makes the pages feel like one complete website instead of three separate pages.

## Accessibility Fixes

I made several accessibility improvements while building the website.

- Each page uses one main `h1`.
- Heading levels follow a logical `h1`, `h2`, and `h3` structure.
- Semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, and `footer` are used.
- Form labels are connected to their inputs using matching `for` and `id` attributes.
- Images include descriptive `alt` text.
- Buttons use native HTML button elements.
- Links use native anchor elements.
- Interactive controls can be accessed using the keyboard.
- Visible `:focus-visible` styles make keyboard focus easier to see.
- Form errors are displayed directly on the page.
- `aria-invalid` is used when a form field fails validation.
- `aria-live` is used for messages and validation results.
- Light-mode headings use darker green when necessary to improve contrast.
- Dark mode uses white text and green accents against dark backgrounds.
- The layout is designed to avoid horizontal scrolling on small screens.

## JavaScript Requirements

The website includes multiple JavaScript interactions.

### DOM Manipulation

The Home page has a button that changes visible text on the page.

JavaScript uses `querySelector()` and `addEventListener()` to respond to the user's button click and update the DOM.

### Contact Form Validation

The Contact form checks for empty fields and validates email and phone number formats.

If information is missing or invalid, error messages are displayed directly on the page.

The form prevents submission until the errors are corrected.

### Additional JavaScript

The website also includes:

- Dark mode
- Persistent theme selection using `localStorage`
- Time-based welcome message
- Project category filters
- About page interactive message
- Automatic copyright year

## Responsive Design

The website includes multiple responsive breakpoints.

### 800px

The layout changes for smaller screens and cards become a single-column layout.

### 500px

Navigation spacing, typography, images, and project filter buttons are adjusted for smaller screens.

### 320px

Additional changes are made for the required 320px viewport.

The site should be tested in browser DevTools at both 320px and 1200px.

## Design

The website uses a Seahawks-inspired navy and green color palette.

Montserrat is used for headings, navigation, and buttons.

Roboto is used for body text.

Cards, spacing, borders, and typography are repeated throughout the site to keep the design consistent.

## Testing Checklist

Before submitting the project:

- Test Home page.
- Test About page.
- Test Projects page.
- Test every navigation link.
- Test the Contact link.
- Test Dark Theme.
- Test the Home interactive button.
- Test the About page button.
- Test project filters.
- Test the contact form with empty fields.
- Test the contact form with invalid email.
- Test the contact form with invalid phone number.
- Test buttons using Tab and Enter/Space.
- Test at 320px.
- Test at 1200px.
- Confirm there is no horizontal scrolling.
- Run WAVE on all three deployed pages.
- Fix any remaining WAVE errors before submitting.
- Confirm GitHub Pages loads all three pages.

## GitHub Pages

The final submission should be the live GitHub Pages URL for this portfolio.