'use client';

import { Facebook, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { useLang } from '@/lib/LanguageContext';

const companyLinks = ['#about', '#gallery', '#why-us', '#contact'];
const serviceLinks = ['#services', '#services', '#services', '#services'];

const Footer = () => {
  const { t } = useLang();
  const { footer } = t;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo />
            <p className="text-text text-sm mt-4 leading-relaxed">{footer.tagline}</p>
            <div className="flex gap-4 mt-6">
              {[
                { href: 'https://www.facebook.com/cienfuegosglass', icon: <Facebook size={20} />, label: 'Facebook' },
                { href: 'https://wa.me/17868777405', icon: <MessageCircle size={20} />, label: 'WhatsApp' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="p-2 rounded-lg bg-primary/20 border border-accent/20 text-accent hover:border-accent/50 hover:bg-primary/30 transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-light font-semibold mb-4">{footer.services.title}</h4>
            <ul className="space-y-3">
              {footer.services.items.map((item, i) => (
                <li key={i}><a href={serviceLinks[i]} className="text-text hover:text-accent transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-light font-semibold mb-4">{footer.company.title}</h4>
            <ul className="space-y-3">
              {footer.company.items.map((item, i) => (
                <li key={i}><a href={companyLinks[i]} className="text-text hover:text-accent transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-light font-semibold mb-4">{footer.contactTitle}</h4>
            <div className="space-y-3 text-text text-sm">
              <div>
                <p className="font-semibold text-light mb-1">{t.contact.info.phone.title}</p>
                <a href="tel:+17868777405" className="hover:text-accent transition-colors">+1 (786) 877-7405</a>
              </div>
              <div>
                <p className="font-semibold text-light mb-1">{t.contact.info.email.title}</p>
                <a href="mailto:info@cienfuegosglass.com" className="hover:text-accent transition-colors">info@cienfuegosglass.com</a>
              </div>
              <div>
                <p className="font-semibold text-light mb-1">{t.contact.info.address.title}</p>
                <p>12831 SW 17th St</p>
                <p>Miami, FL 33175</p>
              </div>
              <div>
                <p className="font-semibold text-light mb-1">{footer.hours.title}</p>
                {footer.hours.lines.map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20" />
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text text-sm">
          <p>{footer.copyright(currentYear)}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">{footer.privacy}</a>
            <a href="#" className="hover:text-accent transition-colors">{footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
