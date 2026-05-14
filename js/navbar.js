/**
 * AnvIQ Labs — Navbar Module
 */
import { fetchData, icon, setActiveNavLink } from './utils.js';

export async function initNavbar() {
  const nav = await fetchData('./data/navigation.json');
  if (!nav) return;

  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  navbar.innerHTML = `
    <div class="container">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem;">
        <!-- Brand -->
        <a href="index.html" style="display:flex; align-items:center; gap:0.625rem; text-decoration:none;">
          <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0;">
            ${icon('Brain', { size: 20, strokeWidth: 2 })}
          </div>
          <span style="font-family:'Outfit',sans-serif;font-weight:800;font-size:1.2rem;background:linear-gradient(135deg,#e0e7ff,#c4b5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${nav.brand.name}</span>
        </a>

        <!-- Desktop Links -->
        <nav id="nav-links" style="display:flex; align-items:center; gap:2rem;" class="desktop-nav">
          ${nav.links.map(l => `
            <a href="${l.href}" class="nav-link" data-page="${l.href}">${l.label}</a>
          `).join('')}
        </nav>

        <!-- CTA + Hamburger -->
        <div style="display:flex;align-items:center;gap:1rem;">
          <a href="${nav.cta.href}" class="btn btn-primary desktop-cta" style="padding:0.6rem 1.25rem;font-size:0.875rem;">
            ${icon('ArrowRight', { size: 16 })} ${nav.cta.label}
          </a>
          <button id="hamburger-btn" class="hamburger" aria-label="Toggle menu" style="display:none;">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  setActiveNavLink('nav-links');

  // Responsive: show hamburger on mobile
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .desktop-nav { display: none !important; }
      .desktop-cta { display: none !important; }
      #hamburger-btn { display: flex !important; }
    }
  `;
  document.head.appendChild(style);
}
