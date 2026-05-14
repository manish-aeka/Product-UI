/**
 * AnvIQ Labs — Industries Component
 */
import { fetchData, icon } from '../utils.js';

const GRADIENT_MAP = {
  'from-indigo-600 to-violet-600': 'linear-gradient(135deg, #4f46e5, #7c3aed)',
  'from-violet-600 to-purple-600': 'linear-gradient(135deg, #7c3aed, #9333ea)',
  'from-cyan-600 to-indigo-600':   'linear-gradient(135deg, #0891b2, #4f46e5)',
};

export async function renderIndustries(containerId = 'industries-section') {
  const industries = await fetchData('./data/industries.json');
  if (!industries) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <div class="section-badge">${icon('Globe', { size: 13 })} Industries We Serve</div>
        <h2 class="section-title">Deep Domain <span class="gradient-text">Expertise</span></h2>
        <p class="section-subtitle">We specialize in industries where intelligent technology can deliver the greatest transformational impact.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.75rem;">
        ${industries.map((ind, i) => {
          const gradient = GRADIENT_MAP[ind.gradient] || 'linear-gradient(135deg, #6366f1, #8b5cf6)';
          return `
            <div class="industry-card reveal delay-${(i + 1) * 150}">
              <!-- Top gradient bar -->
              <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${gradient};border-radius:var(--radius-lg) var(--radius-lg) 0 0;"></div>

              <div class="industry-icon-wrap" style="background:${gradient};background-opacity:0.15;">
                <div style="width:64px;height:64px;border-radius:1rem;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;color:white;background:${gradient};">
                  ${icon(ind.icon, { size: 28, strokeWidth: 1.75 })}
                </div>
              </div>

              <h3 style="font-family:'Outfit',sans-serif;font-size:1.35rem;font-weight:800;margin-bottom:0.875rem;">${ind.title}</h3>
              <p style="color:var(--color-text-muted);font-size:0.92rem;line-height:1.75;margin-bottom:1.5rem;">${ind.description}</p>

              <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">
                ${ind.useCases.map(u => `<span class="industry-use-case-tag">${u}</span>`).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
