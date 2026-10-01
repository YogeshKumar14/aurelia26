# AGENTS.md — Maintenance & Modularity Guide for Aurelia '26 Website

> **CRITICAL DIRECTIVE**: The website is engineered to be **modular**, **lightweight**, and **strictly aligned with the ticket design** (`ticket.xcf`). Future agents and contributors must preserve this clean modularity. Do not bloat the website with unnecessary external dependencies, frameworks, or convoluted section hierarchies.

---

## 1. System Architecture & Modularity

The website consists of lightweight, standards-compliant static files:
- **`website/event-config.js`**: **The Single Source of Truth**. All editable event data (Timing, Venue, Rules list, Instagram handle) is defined in this centralized JavaScript configuration object.
- **`website/index.html`**: Semantic markup structured around the ticket card aesthetic, with static fallback markup ensuring full functionality even if JavaScript is disabled.
- **`website/style.css`**: CSS variables for the ticket's signature black and gold aesthetic, luxury fonts (`Parisienne`, `Cinzel`, `Montserrat`), and responsive layouts.
- **`website/script.js`**: Lightweight DOM controller that reads `EVENT_CONFIG` and dynamically updates all DOM elements.
- **`website/assets/`**: Images, bowtie insignias, glitter overlay, and local fonts.

---

## 2. Quick Maintenance Guide: How to Edit Content

All day-to-day edits should be performed in:
📁 `website/event-config.js`

### A. How to Add, Edit, or Remove Rules
In `event-config.js`, find the `rules: [...]` array:

```javascript
rules: [
  {
    id: "rule-01",
    number: "01",
    title: "Ticket QR Required",
    text: "Every ticket includes a unique QR code. Present your physical ticket or digital pass at check-in."
  },
  // TO ADD A NEW RULE: Simply add a new object to this array:
  {
    id: "rule-05",
    number: "05",
    title: "No Outside Photography Equipment",
    text: "Professional DSLRs and tripods are not permitted without press accreditation."
  }
]
```
- **To Remove a Rule:** Simply delete the object from the array.
- **To Reorder Rules:** Drag or cut/paste the objects into the desired order.

### B. How to Update Venue Information
In `event-config.js`, edit the `venue` block:

```javascript
venue: {
  name: "Your Actual Venue Name",
  address: "123 Party Boulevard, Suite 500",
  city: "Your City",
  landmark: "Near North Gate Plaza",
  valetNote: "Valet parking available at Main Gate",
  googleMapsUrl: "https://maps.google.com/?q=Your+Venue+Name"
}
```

### C. How to Update Timing
In `event-config.js`, edit the `timing` block:

```javascript
timing: {
  primaryTime: "6:00 PM to 12:00 AM", // Appears as TIME: 6:00 PM to 12:00 AM
  date: "Saturday, October 24, 2026",
  doorsNote: "Doors open at 6:00 PM • Last entry strictly at 9:00 PM"
}
```

### D. How to Update Socials & Instagram
In `event-config.js`, edit the `socials.instagram` block:

```javascript
socials: {
  instagram: {
    handle: "@your_official_handle",
    profileUrl: "https://instagram.com/your_official_handle",
    displayText: "Follow us on Instagram",
    subtitle: "Official Photos, Live Announcements & Performer Lineup"
  }
}
```

---

## 3. How the Ticket QR Code Connects to the Website

```
[Printed Ticket QR Code]
          │
          ▼  (Camera scan URL: https://yogeshkumar14.github.io/aurelia26/)
[GitHub Pages Hosted Website]
          │
          ▼  (Loads live files: index.html + event-config.js)
[Latest Event Info, Rules, Venue, Timings & Instagram Profile]
```

Because the printed QR code embeds **only the URL**, any changes made to `event-config.js` and pushed to GitHub **instantly appear on every ticket in circulation without reprinting!**

---

## 4. GitHub Deployment Workflow

The repository is configured for GitHub Pages hosting:
- **Canonical URL:** `https://yogeshkumar14.github.io/aurelia26/`
- **Target Branch:** `main` (root `/`)

### Automated Deployment Script:
To deploy or update, execute:
```bash
./deploy_to_github.sh <YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
```
The script:
1. Validates authentication against the GitHub REST API.
2. Creates the `aurelia26` repository if not already present.
3. Sets the authenticated remote origin and pushes the `main` branch.
4. Activates GitHub Pages via the API (`POST /repos/YogeshKumar14/aurelia26/pages`).

---

## 5. Ticket QR Code Generation & Re-rendering

To regenerate the QR code or render a new print-ready ticket:
```bash
# 1. Generate QR Code image:
python3 generate_ticket_qr.py --url "https://yogeshkumar14.github.io/aurelia26/"

# 2. Render final print-ready ticket with embedded QR:
python3 generate_ticket_qr.py \
  --url "https://yogeshkumar14.github.io/aurelia26/" \
  --render-ticket after_party_ticket_final.png
```
This renders `after_party_ticket_final.png` and verifies optical scannability using `zbarimg`.
