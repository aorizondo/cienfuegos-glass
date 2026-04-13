'use client';

import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Frameless Shower Doors', href: '#services' },
        { label: 'Semi-Frameless Enclosures', href: '#services' },
        { label: 'Walk-In Showers', href: '#services' },
        { label: 'Glass Partitions', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      url: 'https://www.facebook.com/cienfuegosglass',
      label: 'Facebook',
    },
    {
      icon: <MessageCircle size={20} />,
      url: 'https://wa.me/17868777405',
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="bg-dark border-t border-accent/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo />
            <p className="text-text text-sm mt-4 leading-relaxed">
              Premium shower glass doors and custom glass solutions for Miami-Dade County.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="p-2 rounded-lg bg-primary/20 border border-accent/20 text-accent hover:border-accent/50 hover:bg-primary/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-light font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-text hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-light font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-text text-sm">
              <div>
                <p className="font-semibold text-light mb-1">Phone</p>
                <a
                  href="tel:+17868777405"
                  className="hover:text-accent transition-colors"
                >
                  +1 (786) 877-7405
                </a>
              </div>
              <div>
                <p className="font-semibold text-light mb-1">Email</p>
                <a
                  href="mailto:info@cienfuegosglass.com"
                  className="hover:text-accent transition-colors"
                >
                  info@cienfuegosglass.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-light mb-1">Address</p>
                <p>12831 SW 17th St</p>
                <p>Miami, FL 33175</p>
              </div>
              <div>
                <p className="font-semibold text-light mb-1">Hours</p>
                <p>Mon-Fri: 8am-5pm</p>
                <p>Sat: 9am-1pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20" />

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text text-sm">
          <p>
            © {currentYear} Cienfuegos Glass LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
