/**
 * AnvIQ Labs — Services Component
 */
import { fetchData, icon } from '../utils.js';

export async function renderServices(containerId = 'services-section') {
  const services = await fetchData('./data/services.json');
  if (!services) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <div class="section-badge">${icon('Code2', { size: 13 })} What We Build</div>
        <h2 class="section-title">AI-Powered <span class="gradient-text">Services</span></h2>
        <p class="section-subtitle">From research to deployment — every service we offer is engineered to deliver measurable business outcomes through intelligent technology.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.5rem;">
        ${services.map((s, i) => `
          <div id="${s.id}" class="service-card reveal delay-${(i % 3) * 100}">
            <div class="service-icon-wrap">
              ${icon(s.icon, { size: 22 })}
            </div>
            <h3 style="font-family:'Outfit',sans-serif;font-size:1.15rem;font-weight:700;margin-bottom:0.75rem;color:var(--color-text);">${s.title}</h3>
            <p style="color:var(--color-text-muted);font-size:0.9rem;line-height:1.7;margin-bottom:1.25rem;">${s.description}</p>
            <div>
              ${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
            </div>
            <div style="margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid var(--color-border-light);">
              <a href="contact.html" style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.85rem;font-weight:600;color:#a5b4fc;transition:gap 0.2s ease;" 
                 onmouseover="this.style.gap='0.65rem'" onmouseout="this.style.gap='0.4rem'">
                Learn More ${icon('ArrowRight', { size: 14 })}
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
