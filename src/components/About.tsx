import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { personalInfo, stats } from '../data/portfolioData';

/**
 * About Section - Personal introduction and stats
 * Features:
 * - Profile image placeholder
 * - Personal info
 * - Statistics display
 */
export default function About() {
  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-gray-900/50">
      <SectionTitle
        title="About Me"
        subtitle="Get to know me better"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 
                            rounded-2xl transform rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 
                            rounded-2xl transform -rotate-3" />
            {/* Image placeholder - EDIT: Replace with your image */}
            <div className="relative w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl 
                            overflow-hidden flex items-center justify-center">
              <img 
                src="/profile.jpg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-0 lg:-right-8 
                       bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl 
                              flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                <p className="font-semibold text-gray-900 dark:text-white">Available for work</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {/* EDIT: Add your tagline */}
            Passionate about creating
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}amazing experiences
            </span>
          </h3>

          {/* EDIT: Replace with your detailed bio */}
          <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
            <p>
              I'm a {personalInfo.title} with a passion for building beautiful, 
              functional, and user-friendly applications. I specialize in modern web 
              technologies and love staying up-to-date with the latest trends in development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community 
              through blog posts and tutorials.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating solutions that 
              make a real difference in people's lives.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FiMapPin className="w-5 h-5 text-blue-600" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FiMail className="w-5 h-5 text-blue-600" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FiPhone className="w-5 h-5 text-blue-600" />
              <span>{personalInfo.phone}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 glass rounded-xl shadow-sm"
              >
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 
                              to-cyan-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
