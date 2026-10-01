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
      title: "Dress Code Guidelines",
      text: "Gentlemen are required to attend in formal attire. Ladies are requested to wear elegant western party wear suitable for an evening gala. For styling queries or guidance, kindly contact our team on Instagram (@far.ewell26)."
    },
    {
      id: "rule-02",
      number: "02",
      title: "Personal Belongings & Valuables",
      text: "Guests are solely responsible for the safekeeping of their personal items and valuables. Event organizers and venue management accept no liability for any lost, misplaced, or stolen belongings."
    },
    {
      id: "rule-03",
      number: "03",
      title: "Zero Tolerance for Violence",
      text: "Physical altercations, fighting, or aggressive behavior will not be tolerated under any circumstance. Offending individuals will face immediate ejection from the venue and referral to security authorities."
    },
    {
      id: "rule-04",
      number: "04",
      title: "Strict No-Refund Policy",
      text: "All pass contributions and ticket purchases are strictly non-refundable and non-transferable under all circumstances, including denial of admission or voluntary early departure."
    },
    {
      id: "rule-05",
      number: "05",
      title: "Code of Conduct & Decorum",
      text: "A standard of mutual respect and courteous conduct is mandatory throughout the event. Inappropriate, disruptive, or disrespectful behavior will result in instant removal without refund."
    },
    {
      id: "rule-06",
      number: "06",
      title: "Authorized Physical Pass Required",
      text: "Admission strictly requires presentation of the original physical pass bearing an authorized organizing committee member's signature. Digital copies or unsigned passes will not be permitted entry."
    },
    {
      id: "rule-07",
      number: "07",
      title: "Liability for Venue Property & Damages",
      text: "Guests will be held fully liable for any accidental or deliberate damage caused to venue facilities, sound/lighting gear, or decor. Full repair or replacement costs must be settled directly by the responsible party."
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
