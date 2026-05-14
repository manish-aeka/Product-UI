/**
 * AnvIQ Labs — Stats Component
 */
import { fetchData, icon, animateCounter } from '../utils.js';

export async function renderStats(containerId = 'stats-section') {
  const stats = await fetchData('./data/stats.json');
  if (!stats) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div style="text-align:center;margin-bottom:3.5rem;" class="reveal">
        <div class="section-badge">${icon('TrendingUp', { size: 13 })} Our Impact</div>
        <h2 class="section-title">Numbers That <span class="gradient-text">Speak Volumes</span></h2>
        <p class="section-subtitle">Real results delivered for businesses across industries through intelligent AI and data science solutions.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;">
        ${stats.map((s, i) => `
          <div class="stat-card reveal delay-${(i + 1) * 100}">
            <div style="display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:0.875rem;background:linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.15));border:1px solid rgba(99,102,241,0.25);color:#a5b4fc;margin:0 auto 1.25rem;display:flex;">
              ${icon(s.icon, { size: 22 })}
            </div>
            <div class="stat-value" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
            <div style="font-family:'Outfit',sans-serif;font-weight:600;font-size:1rem;color:var(--color-text);margin-top:0.5rem;">${s.label}</div>
            <div style="font-size:0.8rem;color:var(--color-text-dim);margin-top:0.25rem;">${s.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Animate counters when they come into view
  const counters = container.querySelectorAll('.stat-value[data-target]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target), el.dataset.suffix || '');
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => obs.observe(c));
}
