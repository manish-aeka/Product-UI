/**
 * AnvIQ Labs — Contact Component
 */
import { fetchData, icon, showToast } from '../utils.js';

export async function renderContact(containerId = 'contact-section') {
  const company = await fetchData('./data/company.json');
  if (!company) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:4rem;align-items:start;">

        <!-- Left: Info -->
        <div class="reveal from-left">
          <div class="section-badge" style="margin-bottom:1.25rem;">${icon('MessageSquare', { size: 13 })} Get In Touch</div>
          <h2 class="section-title" style="text-align:left;">Let's Start a <span class="gradient-text">Conversation</span></h2>
          <p style="color:var(--color-text-muted);line-height:1.8;margin-bottom:2.5rem;">
            Ready to explore how AI and data science can transform your business? Reach out — our team responds within 24 hours.
          </p>

          <!-- Contact items -->
          <div style="display:flex;flex-direction:column;gap:1.25rem;margin-bottom:2.5rem;">
            ${[
              { icon: 'Mail',   label: 'Email Us',       value: company.email,   href: `mailto:${company.email}`  },
              { icon: 'Phone',  label: 'Call Us',        value: company.phone,   href: `tel:${company.phone}`     },
              { icon: 'MapPin', label: 'Our Location',   value: company.address, href: '#'                         },
            ].map(c => `
              <div style="display:flex;align-items:flex-start;gap:1rem;padding:1.25rem;background:var(--color-surface-card);border:1px solid var(--color-border);border-radius:0.875rem;transition:var(--transition);"
                   onmouseover="this.style.borderColor='rgba(99,102,241,0.4)'"
                   onmouseout="this.style.borderColor='var(--color-border)'">
                <div style="width:40px;height:40px;border-radius:0.75rem;background:linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.15));border:1px solid rgba(99,102,241,0.25);display:flex;align-items:center;justify-content:center;color:#a5b4fc;flex-shrink:0;">
                  ${icon(c.icon, { size: 17 })}
                </div>
                <div>
                  <div style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-dim);margin-bottom:0.25rem;">${c.label}</div>
                  <a href="${c.href}" style="color:var(--color-text);font-size:0.9rem;font-weight:500;transition:color 0.2s;"
                     onmouseover="this.style.color='#a5b4fc'" onmouseout="this.style.color='var(--color-text)'">${c.value}</a>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Social -->
          <div>
            <div style="font-size:0.8rem;font-weight:600;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1rem;">Find Us Online</div>
            <div style="display:flex;gap:0.75rem;">
              ${[
                { href: company.social.linkedin, icon: 'Linkedin', label: 'LinkedIn' },
                { href: company.social.twitter,  icon: 'Twitter',  label: 'Twitter' },
                { href: company.social.github,   icon: 'Github',   label: 'GitHub'  },
              ].map(s => `
                <a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"
                   style="width:40px;height:40px;border-radius:0.75rem;border:1px solid var(--color-border);display:flex;align-items:center;justify-content:center;color:var(--color-text-muted);transition:var(--transition);"
                   onmouseover="this.style.borderColor='rgba(99,102,241,0.5)';this.style.color='#a5b4fc';this.style.background='rgba(99,102,241,0.07)'"
                   onmouseout="this.style.borderColor='var(--color-border)';this.style.color='var(--color-text-muted)';this.style.background='transparent'">
                  ${icon(s.icon, { size: 17 })}
                </a>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="reveal from-right">
          <div style="padding:2.5rem;background:var(--color-surface-card);border:1px solid var(--color-border);border-radius:1.25rem;position:relative;overflow:hidden;">
            <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#6366f1,#8b5cf6,#06b6d4);"></div>

            <h3 style="font-family:'Outfit',sans-serif;font-weight:800;font-size:1.3rem;margin-bottom:0.5rem;">Send Us a Message</h3>
            <p style="color:var(--color-text-muted);font-size:0.875rem;margin-bottom:2rem;">Fill in the details below and we'll get back to you shortly.</p>

            <form id="contact-form" novalidate>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">
                <div class="form-group">
                  <label class="form-label" for="cf-name">Full Name *</label>
                  <input class="form-input" type="text" id="cf-name" name="name" placeholder="Jane Smith" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="cf-email">Work Email *</label>
                  <input class="form-input" type="email" id="cf-email" name="email" placeholder="jane@company.com" required>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="cf-company">Company Name</label>
                <input class="form-input" type="text" id="cf-company" name="company" placeholder="Your Company Inc.">
              </div>
              <div class="form-group">
                <label class="form-label" for="cf-service">Service of Interest</label>
                <select class="form-input form-select" id="cf-service" name="service">
                  <option value="" disabled selected>Select a service...</option>
                  <option value="ai">Artificial Intelligence Solutions</option>
                  <option value="ml">Machine Learning Development</option>
                  <option value="ds">Data Science & Analytics</option>
                  <option value="bi">Business Intelligence Platforms</option>
                  <option value="re">Research-Driven Technology</option>
                  <option value="pe">Digital Product Engineering</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="cf-message">Your Message *</label>
                <textarea class="form-input form-textarea" id="cf-message" name="message" rows="5" placeholder="Tell us about your project, goals, and timeline..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:1rem;" id="submit-btn">
                ${icon('Send', { size: 17 })} Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  // Form submission handler
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = document.getElementById('submit-btn');
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'X');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.', 'X');
      return;
    }

    // Simulate sending
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:spin-slow 1s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Sending...`;
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 1500));

    form.reset();
    btn.innerHTML = `${icon('CheckCircle2', { size: 17 })} Message Sent!`;
    btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';

    showToast('Thank you! We\'ll be in touch within 24 hours.', 'CheckCircle2');

    setTimeout(() => {
      btn.innerHTML = `${icon('Send', { size: 17 })} Send Message`;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  });

  // Responsive
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 900px) {
      #contact-section .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
      #contact-form > div:first-child { grid-template-columns: 1fr !important; }
    }
  `;
  document.head.appendChild(style);
}
