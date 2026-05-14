/**
 * AnvIQ Labs — Animations Module
 * Handles page-level animation initialization
 */

/**
 * Initialize the loading screen and hide it after assets are ready
 */
export function initLoading() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      screen.classList.add('hidden');
      setTimeout(() => screen.remove(), 600);
    }, 800);
  });
}

/**
 * Add stagger delays to a list of elements
 * @param {string} selector - CSS selector
 * @param {number} baseDelay - base delay in ms
 * @param {number} increment - incremental delay per item
 */
export function addStaggerDelay(selector, baseDelay = 100, increment = 100) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.transitionDelay = `${baseDelay + i * increment}ms`;
  });
}

/**
 * Initialize all page animations
 */
export function initAnimations() {
  // Stagger reveal cards
  addStaggerDelay('.service-card.reveal', 0, 80);
  addStaggerDelay('.industry-card.reveal', 0, 120);
  addStaggerDelay('.stat-card.reveal', 0, 100);
  addStaggerDelay('.testimonial-card.reveal', 0, 100);
  addStaggerDelay('.feature-item.reveal', 0, 80);
  addStaggerDelay('.highlight-card.reveal', 0, 100);
}
