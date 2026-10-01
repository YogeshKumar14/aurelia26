/**
 * ==============================================================================
 * AURELIA '26 - TICKET PORTAL INTERACTIVE CONTROLLER
 * ==============================================================================
 * Dynamically binds modular content from event-config.js to the DOM.
 * Enables quick editing of rules, venue, timing, and instagram socials.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = typeof EVENT_CONFIG !== 'undefined' ? EVENT_CONFIG : null;

  if (config) {
    applyEventConfig(config);
    setupCopyAddress(config.venue ? config.venue.address : '');
  }
});

/**
 * Applies all configuration fields from event-config.js
 */
function applyEventConfig(cfg) {
  // 1. Titles & Branding
  if (cfg.eventName) setElemText('ticketTitle', cfg.eventName);
  if (cfg.eventSubtitle) setElemText('ticketSubtitle', cfg.eventSubtitle);
  if (cfg.tagline) setElemText('ticketTagline', cfg.tagline);

  // 2. Timing
  if (cfg.timing) {
    if (cfg.timing.primaryTime) {
      setElemText('timePrimary', `TIME: ${cfg.timing.primaryTime}`);
    }
    if (cfg.timing.date) setElemText('timeDate', cfg.timing.date);
    if (cfg.timing.doorsNote) setElemText('timeDoors', cfg.timing.doorsNote);
  }

  // 3. Venue
  if (cfg.venue) {
    if (cfg.venue.name) setElemText('venueName', cfg.venue.name);
    if (cfg.venue.address) setElemText('venueAddress', cfg.venue.address);
    if (cfg.venue.landmark) setElemText('venueLandmark', cfg.venue.landmark);

    const mapsBtn = document.getElementById('btnDirections');
    if (mapsBtn && cfg.venue.googleMapsUrl) {
      mapsBtn.href = cfg.venue.googleMapsUrl;
    }
  }

  // 4. Rules & Guidelines (Dynamic rendering)
  if (Array.isArray(cfg.rules) && cfg.rules.length > 0) {
    const rulesContainer = document.getElementById('rulesContainer');
    if (rulesContainer) {
      rulesContainer.innerHTML = '';
      cfg.rules.forEach((rule, idx) => {
        const card = document.createElement('div');
        card.className = 'rule-card';
        const numStr = rule.number || String(idx + 1).padStart(2, '0');

        card.innerHTML = `
          <div class="rule-num">${escapeHtml(numStr)}</div>
          <div class="rule-body">
            <h4 class="rule-title">${escapeHtml(rule.title || 'Rule')}</h4>
            <p class="rule-desc">${escapeHtml(rule.text || '')}</p>
          </div>
        `;
        rulesContainer.appendChild(card);
      });
    }
  }

  // 5. Socials / Instagram
  if (cfg.socials && cfg.socials.instagram) {
    const insta = cfg.socials.instagram;
    const linkElem = document.getElementById('instaLink');
    if (linkElem && insta.profileUrl) {
      linkElem.href = insta.profileUrl;
    }
    if (insta.handle) setElemText('instaHandle', insta.handle);
    if (insta.subtitle) setElemText('instaDesc', insta.subtitle);
  }
}

/**
 * Clipboard Copy Handler for Venue Address
 */
function setupCopyAddress(addressText) {
  const btn = document.getElementById('btnCopyAddress');
  const alertBox = document.getElementById('copyAlert');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const textToCopy = addressText || (document.getElementById('venueAddress') ? document.getElementById('venueAddress').innerText : '');
    if (!textToCopy) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showCopyNotice(alertBox);
      }).catch(() => {
        fallbackCopy(textToCopy, alertBox);
      });
    } else {
      fallbackCopy(textToCopy, alertBox);
    }
  });
}

function showCopyNotice(alertBox) {
  if (!alertBox) return;
  alertBox.style.display = 'block';
  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 2500);
}

function fallbackCopy(text, alertBox) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopyNotice(alertBox);
  } catch (e) {
    console.warn('Copy failed', e);
  }
  document.body.removeChild(textarea);
}

/**
 * Utility DOM Helpers
 */
function setElemText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
