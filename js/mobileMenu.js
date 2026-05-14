/**
 * AnvIQ Labs — Mobile Menu Module
 */
import { fetchData, icon } from './utils.js';

export async function initMobileMenu() {
  const nav = await fetchData('./data/navigation.json');
  if (!nav) return;

  // Create overlay menu
  const menu = document.createElement('div');
  menu.id = 'mobile-menu';
  menu.setAttribute('aria-hidden', 'true');
  menu.innerHTML = `
    <button id="close-menu-btn" style="position:absolute;top:1.5rem;right:1.5rem;padding:0.5rem;color:var(--color-text);" aria-label="Close menu">
      ${icon('X', { size: 28 })}
    </button>

    <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;margin-bottom:2.5rem;">
      <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;color:white;">
        ${icon('Brain', { size: 22, strokeWidth: 2 })}
      </div>
      <span style="font-family:'Outfit',sans-serif;font-weight:800;font-size:1.1rem;background:linear-gradient(135deg,#e0e7ff,#c4b5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${nav.brand.name}</span>
    </div>

    <nav style="display:flex;flex-direction:column;align-items:center;gap:1.5rem;">
      ${nav.links.map(l => `
        <a href="${l.href}" class="mobile-nav-link">${l.label}</a>
      `).join('')}
    </nav>

    <div style="margin-top:2.5rem;">
      <a href="${nav.cta.href}" class="btn btn-primary btn-lg">
        ${icon('ArrowRight', { size: 18 })} ${nav.cta.label}
      </a>
    </div>
  `;

  document.body.appendChild(menu);

  // Controls
  const openBtn  = document.getElementById('hamburger-btn');
  const closeBtn = document.getElementById('close-menu-btn');

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    openBtn?.classList.add('open');
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    openBtn?.classList.remove('open');
  }

  openBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  // Close on link click
  menu.querySelectorAll('.mobile-nav-link').forEach(l => {
    l.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}
