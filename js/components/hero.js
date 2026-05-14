/**
 * AnvIQ Labs — Hero Component
 */
import { fetchData, icon } from '../utils.js';

export async function renderHero(containerId = 'hero-section') {
  const company = await fetchData('./data/company.json');
  if (!company) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <!-- Background Elements -->
    <div class="hero-grid"></div>
    <div class="hero-bg-orb hero-bg-orb-1"></div>
    <div class="hero-bg-orb hero-bg-orb-2"></div>
    <div class="hero-bg-orb hero-bg-orb-3"></div>

    <!-- Content -->
    <div class="container" style="position:relative;z-index:2;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;">

        <!-- Left: Text -->
        <div class="reveal">
          <div class="section-badge">
            ${icon('Zap', { size: 13 })} AI &amp; Data Science Innovation
          </div>
          <h1 style="font-size:clamp(2.2rem,4.5vw,3.6rem);font-weight:900;line-height:1.1;margin-bottom:1.5rem;">
            Transforming Business Data Into
            <span class="animated-gradient-text"> Intelligent Digital Solutions</span>
          </h1>
          <p style="font-size:1.1rem;color:var(--color-text-muted);line-height:1.8;margin-bottom:2.25rem;max-width:540px;">
            ${company.subheading}
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:3rem;">
            <a href="${company.cta.primary.href}" class="btn btn-primary btn-lg">
              ${icon('Rocket', { size: 18 })} ${company.cta.primary.label}
            </a>
            <a href="${company.cta.secondary.href}" class="btn btn-secondary btn-lg">
              ${icon('MessageSquare', { size: 18 })} ${company.cta.secondary.label}
            </a>
          </div>
          <!-- Trust badges -->
          <div style="display:flex;flex-wrap:wrap;gap:1.5rem;align-items:center;">
            ${[
              { icon: 'ShieldCheck', text: 'Enterprise-Grade Security' },
              { icon: 'Zap',          text: 'Fast Deployment'           },
              { icon: 'Globe',        text: 'Globally Scalable'         },
            ].map(b => `
              <div style="display:flex;align-items:center;gap:0.5rem;color:var(--color-text-muted);font-size:0.85rem;font-weight:500;">
                <span style="color:#a5b4fc;">${icon(b.icon, { size: 15 })}</span>
                ${b.text}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right: AI Visual -->
        <div class="reveal delay-300 float-anim" style="display:flex;justify-content:center;">
          <div class="ai-visual-card" style="width:100%;max-width:460px;">
            <!-- Header -->
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;">
              <div style="display:flex;align-items:center;gap:0.625rem;">
                <div style="width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;color:white;">
                  ${icon('Brain', { size: 16, strokeWidth: 2 })}
                </div>
                <span style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.85rem;color:#a5b4fc;">AnvIQ Intelligence</span>
              </div>
              <div style="display:flex;gap:0.4rem;">
                <span style="width:8px;height:8px;border-radius:50%;background:#6366f1;position:relative;" class="ping-dot"></span>
                <span style="font-size:0.72rem;color:var(--color-text-muted);">Live</span>
              </div>
            </div>

            <!-- AI Nodes visualization -->
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin-bottom:1.5rem;">
              ${[
                { label: 'Data Layer',        pct: 92, color: '#6366f1' },
                { label: 'ML Pipeline',       pct: 78, color: '#8b5cf6' },
                { label: 'AI Inference',      pct: 88, color: '#06b6d4' },
                { label: 'BI Insights',       pct: 95, color: '#6366f1' },
                { label: 'Automation',        pct: 71, color: '#8b5cf6' },
                { label: 'Predictions',       pct: 84, color: '#06b6d4' },
              ].map(n => `
                <div class="ai-node" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:0.75rem;padding:0.875rem 0.75rem;text-align:center;">
                  <div style="font-family:'Outfit',sans-serif;font-size:1.2rem;font-weight:800;color:${n.color};">${n.pct}%</div>
                  <div style="font-size:0.68rem;color:var(--color-text-dim);margin-top:0.2rem;white-space:nowrap;">${n.label}</div>
                </div>
              `).join('')}
            </div>

            <!-- Progress bars -->
            ${[
              { label: 'Model Accuracy',    pct: 98, color: 'linear-gradient(90deg,#6366f1,#8b5cf6)' },
              { label: 'Data Processing',   pct: 87, color: 'linear-gradient(90deg,#8b5cf6,#06b6d4)' },
              { label: 'Prediction Score',  pct: 94, color: 'linear-gradient(90deg,#06b6d4,#6366f1)' },
            ].map(p => `
              <div style="margin-bottom:0.875rem;">
                <div style="display:flex;justify-content:space-between;margin-bottom:0.375rem;">
                  <span style="font-size:0.78rem;color:var(--color-text-muted);">${p.label}</span>
                  <span style="font-size:0.78rem;font-weight:600;color:var(--color-text);">${p.pct}%</span>
                </div>
                <div style="height:6px;background:rgba(255,255,255,0.06);border-radius:999px;overflow:hidden;">
                  <div style="height:100%;width:${p.pct}%;background:${p.color};border-radius:999px;transition:width 1.5s ease;"></div>
                </div>
              </div>
            `).join('')}

            <!-- Bottom status -->
            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.06);">
              ${icon('CheckCircle2', { size: 14, class: '' })}
              <span style="font-size:0.78rem;color:#6ee7b7;">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div style="position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:0.5rem;color:var(--color-text-dim);font-size:0.78rem;animation:floatY 2s ease-in-out infinite;">
      ${icon('ChevronDown', { size: 20 })}
    </div>
  `;

  // Add responsive styles
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      #hero-section > .container > div {
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
      }
      #hero-section > .container > div > div:last-child {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);
}
