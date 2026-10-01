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
    primaryTime: "5:00 PM to 11:00 PM",
    date: "Saturday, October 24, 2026",
    doorsNote: "Doors open at 5:00 PM • Last entry at 8:00 PM"
  },

  // --- VENUE (Template: easily edit venue name, address, and maps link below) ---
  venue: {
    name: "The Grand Aurelia Skylounge",
    address: "700 Golden Crest Boulevard, Penthouse Level",
    city: "Metropolis",
    landmark: "Direct private express elevator access from North Lobby",
    valetNote: "Complimentary VIP Valet Parking at West Gate",
    // Google Maps link (update with actual destination)
    googleMapsUrl: "https://maps.google.com/?q=The+Grand+Aurelia+Skylounge"
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
      handle: "@aurelia26party",
      profileUrl: "https://instagram.com/aurelia26party",
      displayText: "Follow us on Instagram",
      subtitle: "Official Photos, Live Announcements & Performer Lineup"
    }
  }
};

// Export for Node environments (if tested in Node) or available globally in browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = EVENT_CONFIG;
}
