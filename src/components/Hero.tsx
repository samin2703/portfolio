import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';

/**
 * Hero Section - Main landing area with About-style background
 */
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

      {/* ===== ABOUT-STYLE BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

        {/* Layer 1 */}
        <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px]
                        bg-gradient-to-br from-blue-400 to-cyan-400
                        rounded-2xl rotate-6 opacity-20 blur-3xl animate-pulse" />

        {/* Layer 2 */}
        <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px]
                        bg-gradient-to-br from-blue-600 to-cyan-600
                        rounded-2xl -rotate-12 opacity-20 blur-3xl animate-pulse delay-1000" />

        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-gray-50/70 dark:bg-gray-900/70" />
      </div>

      {/* ===== CONTENT (UNCHANGED) ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card backdrop-blur-xl max-w-4xl mx-auto px-6 sm:px-8 md:px-10 py-10 sm:py-12 md:py-16"
        >
          <div className="text-center">

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white 
                         mb-4 neon-text whitespace-nowrap tracking-tight
                         bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent
                         drop-shadow-lg"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                {personalInfo.title}
              </span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 dark:text-gray-200 max-w-2xl mx-auto mb-12"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 
                           text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 
                           hover:shadow-xl hover:shadow-cyan-500/40 transition-shadow"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => handleScroll('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 glass rounded-full
                           text-cyan-300 font-semibold 
                           hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <FiMail className="w-5 h-5" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </motion.a>

              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>

          </div>
        </motion.div>

        {/* Scroll Indicator (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full 
                       flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
