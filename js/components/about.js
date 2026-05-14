/**
 * AnvIQ Labs — About Component (for homepage snippet)
 */
import { fetchData, icon } from '../utils.js';

export async function renderAbout(containerId = 'about-section') {
  const company = await fetchData('./data/company.json');
  if (!company) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  const ab = company.about;

  container.innerHTML = `
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start;">

        <!-- Left: Text -->
        <div class="reveal from-left">
          <div class="section-badge" style="margin-bottom:1.25rem;">${icon('Brain', { size: 13 })} About AnvIQ Labs</div>
          <h2 class="section-title" style="text-align:left;">${ab.headline}</h2>
          ${ab.body.map(p => `<p style="color:var(--color-text-muted);font-size:0.95rem;line-height:1.8;margin-bottom:1rem;">${p}</p>`).join('')}
          <div style="display:flex;gap:1rem;margin-top:2rem;flex-wrap:wrap;">
            ${containerId !== 'about-main-section' ? `
            <a href="about.html" class="btn btn-primary">
              ${icon('ArrowRight', { size: 16 })} Learn Our Story
            </a>` : ''}
            <a href="services.html" class="btn ${containerId === 'about-main-section' ? 'btn-primary' : 'btn-secondary'}">
              ${icon('Layers', { size: 16 })} Explore Services
            </a>
          </div>
        </div>

        <!-- Right: Highlights grid -->
        <div class="reveal from-right">
          <!-- Mission/Vision -->
          <div style="margin-bottom:1.5rem;padding:1.5rem;background:var(--color-surface-card);border:1px solid var(--color-border);border-radius:1rem;">
            <div style="display:flex;align-items:center;gap:0.625rem;margin-bottom:0.75rem;color:#a5b4fc;">
              ${icon('Target', { size: 16 })}
              <span style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.875rem;text-transform:uppercase;letter-spacing:0.08em;">Mission</span>
            </div>
            <p style="color:var(--color-text-muted);font-size:0.9rem;line-height:1.7;">${company.mission}</p>
          </div>
          <div style="margin-bottom:1.5rem;padding:1.5rem;background:var(--color-surface-card);border:1px solid var(--color-border);border-radius:1rem;">
            <div style="display:flex;align-items:center;gap:0.625rem;margin-bottom:0.75rem;color:#a5b4fc;">
              ${icon('Eye', { size: 16 })}
              <span style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.875rem;text-transform:uppercase;letter-spacing:0.08em;">Vision</span>
            </div>
            <p style="color:var(--color-text-muted);font-size:0.9rem;line-height:1.7;">${company.vision}</p>
          </div>

          <!-- Highlights -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            ${ab.highlights.map(h => `
              <div class="highlight-card">
                <div style="color:#a5b4fc;margin-bottom:0.625rem;">${icon(h.icon, { size: 18 })}</div>
                <h4 style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.9rem;margin-bottom:0.35rem;">${h.title}</h4>
                <p style="color:var(--color-text-muted);font-size:0.8rem;line-height:1.6;">${h.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Responsive
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 900px) {
      #${containerId} .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
    }
  `;
  document.head.appendChild(style);
}
