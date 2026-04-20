import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900/50"
    >
      {/* ===== BACKGROUND (About-style layered gradient) ===== */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        {/* Layer 1 */}
        <div className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl rotate-6 opacity-20 blur-3xl animate-pulse" />

        {/* Layer 2 */}
        <div className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl -rotate-12 opacity-20 blur-3xl animate-pulse delay-1500" />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gray-50/70 dark:bg-gray-900/70" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm"
        >
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4
                     drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-cyan-500 mb-4"
        >
          Machine Learning Engineer | AI & LLM Systems
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4"
        >
          Building real-world AI systems across Computer Vision, NLP, and LLMs
        </motion.p>

        {/* Credibility */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-gray-500 mb-10"
        >
          Research Intern @ Elite Research Lab LLC
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold shadow-md hover:shadow-lg transition"
          >
            <FiDownload className="w-4 h-4" />
            Resume
          </motion.a>

          <motion.button
            onClick={() => handleScroll('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/10 transition"
          >
            <FiMail className="w-4 h-4" />
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-cyan-400 transition"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-cyan-400 transition"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
