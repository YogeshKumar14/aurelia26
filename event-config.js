/**
 * ==============================================================================
 * AURELIA '26 - AFTER PARTY | MODULAR EVENT CONFIGURATION
 * ==============================================================================
 * 
 * This file controls all key information displayed on the website.
 * To update the website, simply edit the values below.
 * Any edits will immediately reflect for all guests scanning the ticket QR code!
 * ==============================================================================
 */

const EVENT_CONFIG = {
  // --- BRANDING & TITLES ---
  eventName: "Aurelia '26",
  eventSubtitle: "A GOLDEN EVENING",
  tagline: "The Official After Party",

  // --- TIMING (Template: easily edit time and date below) ---
  timing: {
    primaryTime: "To Be Announced",
    date: "Coming Soon",
    doorsNote: "Exact date, timings & entrance schedule will be announced soon"
  },

  // --- VENUE ---
  venue: {
    name: "Western Farms",
    address: "Mahatma Gandhi Marg, Marafari, Bokaro Steel City, Jharkhand 827001",
    city: "Bokaro Steel City",
    landmark: "Mahatma Gandhi Marg, Marafari",
    valetNote: "On-site parking available",
    googleMapsUrl: "https://maps.app.goo.gl/6WDG9bNLaM9S7r8z6?g_st=aw"
  },

  // --- RULES & GUIDELINES ---
  // To add a new rule: duplicate one of the blocks below.
  // To remove a rule: delete the block.
  rules: [
    {
      id: "rule-01",
      number: "01",
      title: "Ticket QR Required",
      text: "Every ticket includes a unique QR code. Present your physical ticket or clear high-resolution digital pass at check-in for one-time entry."
    },
    {
      id: "rule-02",
      number: "02",
      title: "Age & Identification",
      text: "This is a strictly 21+ event. Government-issued photo identification (Passport, Driver's License) is required upon arrival."
    },
    {
      id: "rule-03",
      number: "03",
      title: "Strict Dress Code",
      text: "Dress code is Black Tie & Touch of Gold. Evening gowns, cocktail glamour, and sharp tailored suits are required. Athletic wear and torn clothing are strictly prohibited."
    },
    {
      id: "rule-04",
      number: "04",
      title: "Security & Screening",
      text: "All guests and small bags are subject to security screening. Outside food, alcoholic beverages, and professional recording equipment are not permitted."
    }
  ],

  // --- SOCIALS (Instagram) ---
  socials: {
    instagram: {
      handle: "@far.ewell26",
      profileUrl: "https://www.instagram.com/far.ewell26?stkn=MTJ0c2J0eWd0ZHg4dw==",
      displayText: "Follow us on Instagram",
      subtitle: "Official Photos, Live Announcements & Performer Lineup"
    }
  }
};

// Export for Node environments (if tested in Node) or available globally in browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = EVENT_CONFIG;
}
