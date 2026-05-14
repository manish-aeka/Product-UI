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
    <div class="bg-grain"></div>
    <div class="hero-grid"></div>
    <div class="hero-bg-orb hero-bg-orb-1"></div>
    <div class="hero-bg-orb hero-bg-orb-2"></div>
    <div class="hero-bg-orb hero-bg-orb-3"></div>

    <!-- Content -->
    <div class="container" style="position:relative;z-index:2;">
      <div style="display:grid;grid-template-columns:1fr 1.1fr;gap:2rem;align-items:center;">

        <!-- Left: Text -->
        <div class="reveal">
          <div class="section-badge" style="background:rgba(99,102,241,0.1);color:#6366f1;border-color:rgba(99,102,241,0.2);">
            ${icon('Sparkles', { size: 13 })} Next-Gen Data Intelligence
          </div>
          <h1 style="font-size:clamp(2.5rem,5vw,4.2rem);line-height:1;margin-bottom:1.5rem;display:flex;flex-direction:column;gap:0.5rem;">
            <span class="text-thin" style="color:var(--color-text-muted);">Transforming</span>
            <span class="text-black">Business Data</span>
            <span class="animated-gradient-text text-glow" style="font-weight:800;">Intelligent Solutions</span>
          </h1>
          <p style="font-size:1.15rem;color:var(--color-text-muted);line-height:1.7;margin-bottom:2.5rem;max-width:500px;">
            We build state-of-the-art AI systems that don't just process data—they understand it, giving your business a decisive scientific edge.
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:1.25rem;">
            <a href="${company.cta.primary.href}" class="btn btn-primary btn-lg" style="padding:1.1rem 2.5rem;">
               Get Started ${icon('ArrowRight', { size: 18 })}
            </a>
            <a href="${company.cta.secondary.href}" class="btn btn-secondary btn-lg" style="backdrop-filter:blur(10px);background:rgba(255,255,255,0.4);">
              ${icon('Play', { size: 18, fill: 'currentColor' })} View Demo
            </a>
          </div>
        </div>

        <!-- Right: AI Visual (Redesigned) -->
        <div class="reveal delay-300" style="position:relative;height:600px;display:flex;align-items:center;justify-content:center;">
          
          <!-- Central Core -->
          <div class="float-anim" style="width:280px;height:280px;position:relative;z-index:5;">
            <div style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.2),transparent);border:1px solid rgba(255,255,255,0.3);backdrop-filter:blur(40px);box-shadow:0 0 80px rgba(99,102,241,0.2), inset 0 0 40px rgba(99,102,241,0.1);"></div>
            <div style="position:absolute;inset:15%;border-radius:50%;border:2px dashed rgba(99,102,241,0.3);animation:spin-slow 20s linear infinite;"></div>
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
               <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;color:white;box-shadow:0 0 40px rgba(99,102,241,0.6);animation:pulse-node 2s ease-in-out infinite;">
                 ${icon('Cpu', { size: 40 })}
               </div>
            </div>
          </div>

          <!-- Floating Widgets -->
          <!-- Widget 1: Accuracy -->
          <div class="glass-premium float-anim-slow" style="position:absolute;top:10%;right:0;padding:1rem 1.25rem;border-radius:1rem;z-index:6;width:180px;">
            <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
               <div style="color:#10b981;">${icon('ShieldCheck', { size: 20 })}</div>
               <span style="font-size:0.75rem;font-weight:600;color:var(--color-text-dim);text-transform:uppercase;">Accuracy</span>
            </div>
            <div style="font-family:'Outfit',sans-serif;font-size:1.75rem;font-weight:800;color:var(--color-text);">99.8<span style="font-size:0.9rem;color:#10b981;">%</span></div>
          </div>

          <!-- Widget 2: Data Stream -->
          <div class="glass-premium float-anim" style="position:absolute;bottom:15%;left:-20px;padding:1.25rem;border-radius:1.25rem;z-index:6;width:220px;animation-delay:-3s;">
             <div style="font-size:0.75rem;font-weight:600;color:var(--color-text-dim);margin-bottom:1rem;display:flex;justify-content:space-between;">
                <span>NEURAL STREAM</span>
                <span class="ping-dot" style="width:6px;height:6px;background:#6366f1;border-radius:50%;"></span>
             </div>
             <div style="display:flex;gap:4px;height:40px;align-items:flex-end;">
                ${[40,70,50,90,60,80,45,95,70,85].map((h,i) => `
                  <div style="flex:1;background:linear-gradient(to top, #6366f1, #8b5cf6);height:${h}%;border-radius:2px;animation:fadeInUp 0.5s ease forwards ${i*0.1}s;"></div>
                `).join('')}
             </div>
          </div>

          <!-- Widget 3: Global Presence -->
          <div class="glass-premium float-anim-slow" style="position:absolute;top:20%;left:20px;padding:0.75rem 1rem;border-radius:999px;z-index:4;display:flex;align-items:center;gap:0.75rem;">
             <div style="width:24px;height:24px;border-radius:50%;background:rgba(6,182,212,0.1);display:flex;align-items:center;justify-content:center;color:#06b6d4;">
                ${icon('Globe', { size: 14 })}
             </div>
             <span style="font-size:0.85rem;font-weight:600;color:var(--color-text);">24+ Node Clusters</span>
          </div>

        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div style="position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:0.5rem;color:var(--color-text-dim);opacity:0.6;">
      <span style="font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Discover More</span>
      <div style="width:1px;height:40px;background:linear-gradient(to bottom, var(--color-indigo), transparent);"></div>
    </div>
  `;

  // Add responsive styles
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 900px) {
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
