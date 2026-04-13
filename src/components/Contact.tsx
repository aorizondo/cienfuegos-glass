'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'frameless-doors',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'frameless-doors',
          message: '',
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: '12831 SW 17th St, Miami, FL 33175',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+1 (786) 877-7405',
      link: 'tel:+17868777405',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@cienfuegosglass.com',
      link: 'mailto:info@cienfuegosglass.com',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      content: 'Mon-Fri: 8am-5pm • Sat: 9am-1pm',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your custom glass solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={info.link || '#'}
                className="flex gap-4 p-6 rounded-xl bg-primary/20 border border-accent/20 hover:border-accent/50 hover:bg-primary/30 transition-all duration-300"
              >
                <div className="text-gold flex-shrink-0">{info.icon}</div>
                <div>
                  <h4 className="text-light font-semibold mb-1">{info.title}</h4>
                  <p className="text-text text-sm hover:text-accent transition-colors">
                    {info.content}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Google Maps Embed */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl overflow-hidden border border-accent/20 h-64 md:h-80"
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
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label className="block text-light font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-primary/20 border border-accent/20 text-light placeholder-text/50 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="block text-light font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-primary/20 border border-accent/20 text-light placeholder-text/50 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants}>
              <label className="block text-light font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-primary/20 border border-accent/20 text-light placeholder-text/50 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="(786) 123-4567"
              />
            </motion.div>

            {/* Service Type */}
            <motion.div variants={itemVariants}>
              <label className="block text-light font-semibold mb-2">Service Type</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-primary/20 border border-accent/20 text-light focus:outline-none focus:border-accent/50 transition-colors"
              >
                <option value="frameless-doors">Frameless Shower Doors</option>
                <option value="semi-frameless">Semi-Frameless Enclosure</option>
                <option value="framed">Framed Doors</option>
                <option value="walk-in">Walk-In Shower</option>
                <option value="partition">Glass Partition</option>
                <option value="commercial">Commercial Installation</option>
                <option value="repair">Repair/Maintenance</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label className="block text-light font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-primary/20 border border-accent/20 text-light placeholder-text/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </motion.div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-accent/20 border border-accent/50 text-accent"
              >
                ✓ Thank you! We've received your message. Our team will contact you shortly.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300"
              >
                ✕ Something went wrong. Please try again or call us directly.
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 rounded-lg bg-gold text-dark font-semibold hover:bg-gold/90 disabled:bg-gold/50 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* WhatsApp CTA */}
            <motion.a
              variants={itemVariants}
              href="https://wa.me/17868777405?text=Hi%2C%20I%27m%20interested%20in%20your%20shower%20door%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-8 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 transition-colors font-semibold"
            >
              Or Chat on WhatsApp
            </motion.a>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
