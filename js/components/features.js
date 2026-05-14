/**
 * AnvIQ Labs — Features Component
 */
import { icon } from '../utils.js';

const FEATURES = [
  {
    icon: 'FlaskConical',
    title: 'Research-Driven Innovation',
    desc: 'Every solution begins with rigorous research and validated hypotheses, ensuring our AI systems are grounded in scientific excellence.',
  },
  {
    icon: 'Zap',
    title: 'Intelligent Automation',
    desc: 'We automate complex workflows using machine learning and rule-based AI, reducing manual effort and increasing operational efficiency.',
  },
  {
    icon: 'Layers',
    title: 'Scalable Architecture',
    desc: 'Our systems are built cloud-native from day one, designed to scale seamlessly from a startup MVP to an enterprise-grade platform.',
  },
  {
    icon: 'Lock',
    title: 'Secure Data Handling',
    desc: 'Enterprise-grade security, data governance, and compliance frameworks are baked into every platform we build.',
  },
  {
    icon: 'TrendingUp',
    title: 'Actionable Insights',
    desc: 'We transform raw data into clear, decision-ready intelligence that empowers leaders at every level of your organization.',
  },
  {
    icon: 'Cpu',
    title: 'Modern AI Technologies',
    desc: 'We leverage the latest advances in transformer architectures, LLMs, and deep learning to build truly state-of-the-art solutions.',
  },
];

export function renderFeatures(containerId = 'features-section') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;">

        <!-- Left: Heading -->
        <div class="reveal from-left">
          <div class="section-badge">${icon('Lightbulb', { size: 13 })} Why AnvIQ Labs</div>
          <h2 class="section-title" style="text-align:left;">Built on a Foundation of <span class="gradient-text">Core Principles</span></h2>
          <p style="color:var(--color-text-muted);line-height:1.8;margin-bottom:2rem;">
            We don't just build AI products — we build intelligent systems that are reliable, interpretable, and engineered to solve problems that matter.
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
            <span style="padding:0.4rem 1rem;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);border-radius:999px;font-size:0.8rem;color:#a5b4fc;">ISO-aligned Processes</span>
            <span style="padding:0.4rem 1rem;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);border-radius:999px;font-size:0.8rem;color:#a5b4fc;">GDPR Compliant</span>
            <span style="padding:0.4rem 1rem;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);border-radius:999px;font-size:0.8rem;color:#a5b4fc;">99.9% Uptime SLA</span>
          </div>

          <!-- Visual element -->
          <div style="margin-top:2.5rem;padding:1.5rem;background:var(--color-surface-card);border:1px solid var(--color-border);border-radius:1rem;position:relative;overflow:hidden;">
            <div style="position:absolute;inset:0;background:radial-gradient(circle at 70% 50%,rgba(99,102,241,0.07) 0%,transparent 70%);"></div>
            <div style="position:relative;display:flex;align-items:center;gap:1.25rem;">
              <div style="width:48px;height:48px;border-radius:0.875rem;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0;">
                ${icon('Target', { size: 22 })}
              </div>
              <div>
                <div style="font-family:'Outfit',sans-serif;font-weight:700;font-size:1rem;color:var(--color-text);margin-bottom:0.25rem;">Outcome-Oriented Delivery</div>
                <div style="font-size:0.85rem;color:var(--color-text-muted);">We measure success by the business outcomes we unlock, not lines of code shipped.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Feature list -->
        <div class="reveal from-right">
          <div style="display:flex;flex-direction:column;gap:0.25rem;">
            ${FEATURES.map((f, i) => `
              <div class="feature-item reveal delay-${i * 80}">
                <div class="feature-icon-box">
                  ${icon(f.icon, { size: 18 })}
                </div>
                <div>
                  <h4 style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.95rem;margin-bottom:0.35rem;">${f.title}</h4>
                  <p style="font-size:0.875rem;color:var(--color-text-muted);line-height:1.65;">${f.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Add responsive styles
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 900px) {
      #features-section .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
    }
  `;
  document.head.appendChild(style);
}
