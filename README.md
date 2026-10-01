# AURELIA '26 — After Party Website Template

A mobile-first, luxury gold-and-black event portal designed specifically for attendees scanning the QR code on the **AURELIA '26 - AFTER PARTY** printed ticket.

---

## 🌟 Features Included

- **Luxury Gold & Black Visual Identity**: Matches the printed ticket aesthetics (Cinzel & Playfair Display typography, obsidian glassmorphism cards, metallic gold gradients, and ambient gold glow).
- **Mobile-First Responsive Layout**: Built specifically for attendees scanning with iPhone cameras, Android Google Lens, or QR scanners.
- **Live Event Announcements Bulletin**: A dedicated section to broadcast real-time updates (e.g., gate changes, valet drop-off, surprise DJ sets) that attendees see immediately upon scanning.
- **Dynamic Countdown Timer**: Live ticking countdown to the event start date/time.
- **Event Schedule & Timeline**: Chronological party itinerary with golden nodal indicators.
- **Venue & Directions**: Full venue address, entry landmarks, valet details, and a one-tap "Open in Google Maps" button.
- **Conditions of Entry & FAQs**: Age verification, bag policies, dress code rules, and accordion-style answers to common questions.
- **One-File Content Management (`event-config.js`)**: All announcements, schedules, dates, and contact info can be updated by editing a single, clearly commented configuration file. No complex coding required!
- **Zero Build Step**: Pure vanilla HTML5, CSS3, and modern JavaScript. Deploys instantly to any static hosting provider.

---

## 📂 File Structure

```
website/
├── index.html          # Main event landing page
├── style.css           # Luxury gold & black styling, animations, responsive design
├── script.js           # Interactive controller (countdown, FAQs, dynamic config rendering)
├── event-config.js     # EDIT THIS FILE to change content, announcements, date, or venue
├── assets/
│   ├── favicon.svg                           # Gold monogram favicon
│   ├── golden_bowtie_front_transparent.png   # Transparent golden bowtie emblem
│   ├── golden_corner_ribbon_bowtie_transparent.png
│   └── gold_glitter_overlay.png              # Header sparkle texture
└── README.md           # This guide
```

---

## 🚀 How to Host This Website (Free & Permanent)

When your website is hosted at a fixed web address (such as `https://<username>.github.io/aurelia26/` or `https://aurelia26party.com`), you can generate the QR code once, print it on hundreds of tickets, and **update the website content at any time without ever changing the QR code**.

### Option 1: GitHub Pages (Recommended — 100% Free & Permanent)

1. Create a free account at [github.com](https://github.com) if you don't already have one.
2. Create a new public repository named `aurelia26` (or `afterparty`).
3. Upload the files inside this `website/` folder (`index.html`, `style.css`, `script.js`, `event-config.js`, and the `assets/` folder) to the repository.
4. Go to **Settings** → **Pages** in your repository.
5. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
6. Within 60 seconds, your site will be live at:
   ```
   https://<your-username>.github.io/aurelia26/
   ```
7. Use this URL to generate your ticket's QR code (see instructions below).

---

### Option 2: Cloudflare Pages or Netlify (Fastest Drag-and-Drop)

1. Go to [Netlify](https://app.netlify.com/drop) or [Cloudflare Pages](https://pages.cloudflare.com/).
2. Drag and drop the `website/` folder onto the browser window.
3. Your site is deployed immediately with a free SSL certificate:
   ```
   https://aurelia26-afterparty.netlify.app/
   ```

---

### Option 3: Custom Domain (e.g. `aurelia26.com`)

If you own a custom domain (purchased from Namecheap, Cloudflare, GoDaddy, etc.):
1. Link your custom domain to your GitHub Pages or Cloudflare Pages project.
2. The URL encoded in the QR code will be `https://aurelia26.com/`.
3. **Advantage**: Even if you redesign the website or change web hosts 5 years from now, the printed QR code will always work because you own the domain!

---

## 📝 How to Update Website Content (Without Touching the QR Code!)

Because the QR code encodes the **website URL**, phone cameras simply load whatever content is currently hosted at that URL. 

To update the venue, timings, rules, or Instagram profile:

1. Open `event-config.js` in any text editor (or directly on GitHub).
2. Edit the desired section:
   - **Update Timing:** Change `timing.primaryTime`, `timing.date`, or `timing.doorsNote`.
   - **Update Venue:** Change `venue.name`, `venue.address`, `venue.landmark`, or `venue.googleMapsUrl`.
   - **Add / Remove Rules:** Simply add or remove objects from the `rules: [...]` array.
   - **Update Socials:** Update `socials.instagram.handle` or `socials.instagram.profileUrl`.
3. Save and commit/push your changes.
4. In ~30 seconds, anyone scanning the physical ticket will see the new content!

---

## 🎫 Generating the Ticket QR Code

In the parent ticket directory (`/home/yogesh/after_party_ticket/`), a dedicated Python tool `generate_ticket_qr.py` is included.

### Step 1: Generate the QR code for your hosted URL
```bash
python3 generate_ticket_qr.py --url "https://your-username.github.io/aurelia26/"
```
This produces `website_qr.png` and runs automated barcode verification to guarantee optical readability.

### Step 2: Render the final ticket with the QR code embedded
```bash
python3 generate_ticket_qr.py \
  --url "https://your-username.github.io/aurelia26/" \
  --render-ticket after_party_ticket_final.png
```

### Step 3: Or use the interactive Ticket Editor
1. Open `ticket_editor.html` in your web browser.
2. Click **Upload QR Code** in the top navigation bar.
3. Select `website_qr.png`.
4. Click **Download Print-Ready PNG**.

---

## ⚠️ Important Warning: Avoid Commercial "Dynamic QR" Scams

Many free QR code websites online (like `qr-code-generator.com`, `me-qr`, etc.) claim to provide "Dynamic QR codes". However, they route your traffic through their private redirect domain and **deactivate your QR code after a 14-day free trial unless you pay $15–$30/month**.

**Do NOT use those third-party redirect services on printed tickets!** 
Instead:
- Encode your actual website URL (from GitHub Pages, Cloudflare Pages, or your own domain) directly into the QR code using `generate_ticket_qr.py`.
- This ensures your QR code is 100% permanent, free forever, and completely immune to subscription lockouts.
