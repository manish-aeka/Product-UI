/**
 * AnvIQ Labs — Testimonials Component
 */
import { fetchData, icon } from '../utils.js';

/** Map Tailwind-class gradient strings to real CSS gradients */
const AVATAR_GRADIENTS = {
  'from-indigo-500 to-violet-500': 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  'from-violet-500 to-purple-500': 'linear-gradient(135deg, #8b5cf6, #9333ea)',
  'from-cyan-500 to-indigo-500':   'linear-gradient(135deg, #06b6d4, #6366f1)',
  'from-indigo-500 to-cyan-500':   'linear-gradient(135deg, #6366f1, #06b6d4)',
};

const DEFAULT_GRADIENT = 'linear-gradient(135deg, #6366f1, #8b5cf6)';

export async function renderTestimonials(containerId = 'testimonials-section') {
  const testimonials = await fetchData('./data/testimonials.json');
  if (!testimonials) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <div class="section-badge">${icon('Star', { size: 13 })} Client Testimonials</div>
        <h2 class="section-title">Trusted by <span class="gradient-text">Industry Leaders</span></h2>
        <p class="section-subtitle">What our clients say about the impact of AnvIQ Labs' intelligent solutions on their businesses.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;">
        ${testimonials.map((t, i) => {
          const gradient = AVATAR_GRADIENTS[t.avatarColor] || DEFAULT_GRADIENT;
          return `
          <div class="testimonial-card reveal delay-${(i % 2) * 100 + 100}">
            <div class="stars">
              ${'<span>' + icon('Star', { size: 14 }) + '</span>'.repeat(t.rating)}
            </div>
            <p style="color:var(--color-text-muted);font-size:0.92rem;line-height:1.75;margin-bottom:1.5rem;position:relative;z-index:1;">"${t.feedback}"</p>
            <div style="display:flex;align-items:center;gap:0.875rem;">
              <div class="avatar-circle" style="background:${gradient};">${t.avatar}</div>
              <div>
                <div style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.925rem;color:var(--color-text);">${t.name}</div>
                <div style="font-size:0.8rem;color:var(--color-text-dim);">${t.designation}, ${t.company}</div>
              </div>
            </div>
          </div>
        `}).join('')}
      </div>
    </div>
  `;
}
