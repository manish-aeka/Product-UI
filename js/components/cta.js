/**
 * AnvIQ Labs — CTA Component
 */
import { icon } from '../utils.js';

export function renderCTA(containerId = 'cta-section') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div style="position:absolute;inset:0;overflow:hidden;pointer-events:none;">
      <div style="position:absolute;top:-100px;left:-100px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%);filter:blur(60px);"></div>
      <div style="position:absolute;bottom:-100px;right:-100px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 70%);filter:blur(60px);"></div>
    </div>
    <div class="container" style="position:relative;z-index:1;text-align:center;">
      <div class="reveal">
        <div class="section-badge" style="margin-bottom:1.5rem;">${icon('CalendarCheck', { size: 13 })} Ready to Start?</div>
        <h2 style="font-family:'Outfit',sans-serif;font-size:clamp(1.8rem,4vw,3rem);font-weight:900;line-height:1.15;margin-bottom:1.25rem;">
          Let's Build Something
          <span class="animated-gradient-text"> Extraordinary Together</span>
        </h2>
        <p style="font-size:1.05rem;color:var(--color-text-muted);max-width:560px;margin:0 auto 2.5rem;line-height:1.75;">
          Whether you're exploring AI for the first time or scaling an existing data platform — our team of researchers and engineers is ready to help.
        </p>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;margin-bottom:3rem;">
          <a href="contact.html" class="btn btn-primary btn-lg">
            ${icon('Send', { size: 18 })} Schedule a Consultation
          </a>
          <a href="services.html" class="btn btn-secondary btn-lg">
            ${icon('ArrowRight', { size: 18 })} Explore Our Services
          </a>
        </div>

        <!-- Trust indicators -->
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:2.5rem;">
          ${[
            { icon: 'ShieldCheck', text: 'No commitment required'   },
            { icon: 'Zap',          text: 'Response within 24 hours' },
            { icon: 'Users',        text: 'Expert team, real results' },
          ].map(t => `
            <div style="display:flex;align-items:center;gap:0.5rem;color:var(--color-text-muted);font-size:0.875rem;">
              <span style="color:#a5b4fc;">${icon(t.icon, { size: 15 })}</span>
              ${t.text}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
