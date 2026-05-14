/**
 * AnvIQ Labs — Main Entry Point
 * This module bootstraps the application and is the single entry
 * point for each HTML page via `type="module"`.
 */

import { initNavbar }      from './navbar.js';
import { initMobileMenu }  from './mobileMenu.js';
import { initFooter }      from './footer.js';
import { initScrollReveal } from './utils.js';
import { initLoading, initAnimations } from './animations.js';

// ─── Page-specific component imports ───
import { renderHero }         from './components/hero.js';
import { renderAbout }        from './components/about.js';
import { renderServices }     from './components/services.js';
import { renderIndustries }   from './components/industries.js';
import { renderFeatures }     from './components/features.js';
import { renderStats }        from './components/stats.js';
import { renderTestimonials } from './components/testimonials.js';
import { renderCTA }          from './components/cta.js';
import { renderContact }      from './components/contact.js';

/**
 * Determine current page from URL
 * @returns {string}
 */
function getCurrentPage() {
  const path = window.location.pathname.split('/').pop();
  if (!path || path === 'index.html') return 'home';
  return path.replace('.html', '');
}

/**
 * Render all sections for a given page
 */
async function renderPage(page) {
  switch (page) {
    case 'home':
      await Promise.all([
        renderHero('hero-section'),
        renderStats('stats-section'),
        renderAbout('about-section'),
        renderServices('services-section'),
        renderIndustries('industries-section'),
        renderFeatures('features-section'),
        renderTestimonials('testimonials-section'),
        renderCTA('cta-section'),
      ]);
      break;

    case 'about':
      await renderAbout('about-main-section');
      renderFeatures('features-section');
      await renderStats('stats-section');
      await renderTestimonials('testimonials-section');
      await renderCTA('cta-section');
      break;

    case 'services':
      await renderServices('services-section');
      await renderIndustries('industries-section');
      renderFeatures('features-section');
      await renderStats('stats-section');
      await renderCTA('cta-section');
      break;

    case 'contact':
      await renderContact('contact-section');
      await renderCTA('cta-section');
      break;

    default:
      break;
  }
}

/**
 * Bootstrap the application
 */
async function bootstrap() {
  // 1. Loading screen
  initLoading();

  // 2. Layout
  await Promise.all([
    initNavbar(),
    initFooter(),
  ]);

  // 3. Mobile menu (after navbar renders hamburger btn)
  initMobileMenu();

  // 4. Render page sections
  const page = getCurrentPage();
  await renderPage(page);

  // 5. Animations (stagger delays etc.)
  initAnimations();

  // 6. Scroll reveal (run after all content is in DOM)
  initScrollReveal();
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', bootstrap);
