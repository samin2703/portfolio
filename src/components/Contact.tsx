import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

/**
 * Contact Section - Contact form and info
 * Features:
 * - Contact form (UI only, no backend)
 * - Contact information
 * - Social links
 * - Form validation
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (replace with actual backend integration)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  const socialIconMap = [
    { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: socialLinks.twitter, label: 'Twitter' },
    { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
  ];

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-900/50">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind? Let's work together!"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Let's talk about everything!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Don't like forms? Send me an email directly or connect with me on social media. 
            I'm always excited to discuss new projects, creative ideas, or opportunities to 
            be part of your visions.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 mb-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass rounded-xl 
                           shadow-sm hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl 
                                group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 
                                        group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Find me on social media</p>
            <div className="flex gap-4">
              {socialIconMap.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm 
                             text-gray-600 dark:text-gray-400 hover:text-blue-600 
                             dark:hover:text-blue-400 hover:shadow-md transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-blue-500 
                             focus:border-transparent outline-none transition-all
                             text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-blue-500 
                             focus:border-transparent outline-none transition-all
                             text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-blue-500 
                           focus:border-transparent outline-none transition-all
                           text-gray-900 dark:text-white placeholder-gray-400"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-blue-500 
                           focus:border-transparent outline-none transition-all resize-none
                           text-gray-900 dark:text-white placeholder-gray-400"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center 
                         justify-center gap-2 transition-all ${
                           isSubmitted
                             ? 'bg-green-500 text-white'
                             : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40'
                         } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent 
                                  rounded-full animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <FiCheck className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
