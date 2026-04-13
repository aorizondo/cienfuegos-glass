'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { useLang } from '@/lib/LanguageContext';
import { Lang } from '@/lib/translations';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-accent/10'
          : 'bg-dark/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text hover:text-accent transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: language toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-primary/30 rounded-full p-1 border border-accent/20">
              {(['en', 'es'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                    lang === l
                      ? 'bg-gold text-dark'
                      : 'text-text hover:text-accent'
                  }`}
                >
                  {l === 'en' ? 'EN' : 'ES'}
                </button>
              ))}
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+17868777405"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-dark font-semibold hover:bg-gold/90 transition-colors text-sm"
            >
              <Phone size={16} />
              <span>(786) 877-7405</span>
            </a>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center gap-1 bg-primary/30 rounded-full p-1 border border-accent/20">
              {(['en', 'es'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    lang === l ? 'bg-gold text-dark' : 'text-text'
                  }`}
                >
                  {l === 'en' ? 'EN' : 'ES'}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-accent hover:bg-primary/20 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-accent/10 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-text hover:text-accent transition-colors py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+17868777405"
              className="block text-center px-4 py-2 rounded-full bg-gold text-dark font-semibold hover:bg-gold/90 transition-colors mt-4"
            >
              (786) 877-7405
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
