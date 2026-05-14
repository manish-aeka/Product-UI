/**
 * AnvIQ Labs — Footer Module
 */
import { fetchData, icon } from './utils.js';

export async function initFooter() {
  const [nav, company] = await Promise.all([
    fetchData('./data/navigation.json'),
    fetchData('./data/company.json'),
  ]);

  if (!nav || !company) return;

  const footer = document.getElementById('footer');
  if (!footer) return;

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="container" style="padding-top:4rem;padding-bottom:4rem;">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:3rem;margin-bottom:3rem;">

        <!-- Brand Column -->
        <div style="max-width:320px;">
          <a href="index.html" style="display:flex;align-items:center;gap:0.625rem;margin-bottom:1.25rem;text-decoration:none;">
            <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;color:white;">
              ${icon('Brain', { size: 20, strokeWidth: 2 })}
            </div>
            <span style="font-family:'Outfit',sans-serif;font-weight:800;font-size:1.1rem;background:linear-gradient(135deg,#e0e7ff,#c4b5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${company.name}</span>
          </a>
          <p style="color:var(--color-text-muted);font-size:0.9rem;line-height:1.75;margin-bottom:1.5rem;">${company.description}</p>
          <div style="display:flex;gap:0.875rem;">
            ${[
              { href: company.social.linkedin, icon: 'Linkedin', label: 'LinkedIn' },
              { href: company.social.twitter,  icon: 'Twitter',  label: 'Twitter'  },
              { href: company.social.github,   icon: 'Github',   label: 'GitHub'   },
            ].map(s => `
              <a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"
                 style="width:38px;height:38px;border-radius:10px;border:1px solid var(--color-border);display:flex;align-items:center;justify-content:center;color:var(--color-text-muted);transition:var(--transition);"
                 onmouseover="this.style.borderColor='rgba(99,102,241,0.5)';this.style.color='#a5b4fc';"
                 onmouseout="this.style.borderColor='var(--color-border)';this.style.color='var(--color-text-muted)';">
                ${icon(s.icon, { size: 17 })}
              </a>
            `).join('')}
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.95rem;color:var(--color-text);margin-bottom:1.25rem;letter-spacing:0.04em;">Quick Links</h4>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.1rem;">
            ${nav.footer.quickLinks.map(l => `
              <li><a href="${l.href}" class="footer-link">${l.label}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.95rem;color:var(--color-text);margin-bottom:1.25rem;letter-spacing:0.04em;">Services</h4>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.1rem;">
            ${nav.footer.services.map(l => `
              <li><a href="${l.href}" class="footer-link">${l.label}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.95rem;color:var(--color-text);margin-bottom:1.25rem;letter-spacing:0.04em;">Contact</h4>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.875rem;">
            ${[
              { icon: 'Mail',   text: company.email   },
              { icon: 'Phone',  text: company.phone   },
              { icon: 'MapPin', text: company.address },
            ].map(c => `
              <li style="display:flex;align-items:flex-start;gap:0.625rem;color:var(--color-text-muted);font-size:0.875rem;">
                <span style="color:#a5b4fc;flex-shrink:0;margin-top:1px;">${icon(c.icon, { size: 15 })}</span>
                ${c.text}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="gradient-divider" style="margin-bottom:1.75rem;"></div>
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;">
        <p style="color:var(--color-text-dim);font-size:0.85rem;">
          © ${year} ${company.name}. All rights reserved.
        </p>
        <p style="color:var(--color-text-dim);font-size:0.85rem;">
          Built with ${icon('Brain', { size: 14, class: 'icon-glow' })} Intelligence &amp; Precision
        </p>
      </div>
    </div>
  `;
}
