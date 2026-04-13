'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const contactIcons = [MapPin, Phone, Mail, Clock];

const Contact = () => {
  const { t } = useLang();
  const { contact } = t;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: 'frameless-doors', message: '',
  });

  const contactInfoList = [
    { key: 'address' as const, link: undefined },
    { key: 'phone' as const, link: 'tel:+17868777405' },
    { key: 'email' as const, link: 'mailto:info@cienfuegosglass.com' },
    { key: 'hours' as const, link: undefined },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: 'frameless-doors', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-primary/20 border border-accent/20 text-light placeholder-text/40 focus:outline-none focus:border-accent/50 transition-colors";

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            {contact.sectionLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-6">
            {contact.title}
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">{contact.sub}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfoList.map(({ key, link }, index) => {
              const Icon = contactIcons[index];
              const info = contact.info[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link ? (
                    <a href={link} className="flex gap-4 p-5 rounded-xl bg-primary/20 border border-accent/20 hover:border-accent/50 hover:bg-primary/30 transition-all duration-300">
                      <div className="text-gold flex-shrink-0 mt-0.5"><Icon className="w-5 h-5" /></div>
                      <div>
                        <h4 className="text-light font-semibold mb-1 text-sm">{info.title}</h4>
                        <p className="text-text text-sm hover:text-accent transition-colors">{info.content}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex gap-4 p-5 rounded-xl bg-primary/20 border border-accent/20">
                      <div className="text-gold flex-shrink-0 mt-0.5"><Icon className="w-5 h-5" /></div>
                      <div>
                        <h4 className="text-light font-semibold mb-1 text-sm">{info.title}</h4>
                        <p className="text-text text-sm">{info.content}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl overflow-hidden border border-accent/20 h-56"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.5844627844237!2d-80.3558271!3d25.760245000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c7e8e7e7e7e7%3A0x0!2s12831%20SW%2017th%20St%2C%20Miami%2C%20FL%2033175!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <label className="block text-light font-semibold mb-2 text-sm">{contact.fields.name}</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder={contact.fields.namePlaceholder} />
            </div>
            <div>
              <label className="block text-light font-semibold mb-2 text-sm">{contact.fields.email}</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder={contact.fields.emailPlaceholder} />
            </div>
            <div>
              <label className="block text-light font-semibold mb-2 text-sm">{contact.fields.phone}</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder={contact.fields.phonePlaceholder} />
            </div>
            <div>
              <label className="block text-light font-semibold mb-2 text-sm">{contact.fields.serviceType}</label>
              <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                {contact.serviceOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-light font-semibold mb-2 text-sm">{contact.fields.message}</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className={`${inputClass} resize-none`} placeholder={contact.fields.messagePlaceholder} />
            </div>

            {submitStatus === 'success' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-lg bg-accent/20 border border-accent/50 text-accent text-sm">
                {contact.successMsg}
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
                {contact.errorMsg}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3.5 rounded-full bg-gold text-dark font-bold hover:bg-gold/90 disabled:bg-gold/50 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {isSubmitting ? contact.submitting : contact.submit}
            </button>
            <a
              href="https://wa.me/17868777405?text=Hi%2C%20I%27m%20interested%20in%20your%20shower%20door%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-8 py-3.5 rounded-full border-2 border-accent text-accent hover:bg-accent/10 transition-colors font-semibold"
            >
              {contact.whatsapp}
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
