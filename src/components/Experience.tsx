import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { experiences } from '../data/portfolioData';

/**
 * Experience Section - Timeline layout
 * Features:
 * - Alternating timeline design
 * - Work and Education sections
 * - Animated on scroll
 */
export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        title="Experience & Education"
        subtitle="My professional journey and academic background"
      />

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 
                        dark:bg-gray-700 transform md:-translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 
                              flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full border-4 ${
                  exp.type === 'work'
                    ? 'border-blue-600 bg-white dark:bg-gray-900'
                    : 'border-cyan-600 bg-white dark:bg-gray-900'
                }`} />
                <div className={`absolute w-8 h-8 rounded-full ${
                  exp.type === 'work' ? 'bg-blue-600/20' : 'bg-cyan-600/20'
                } animate-ping`} />
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card-hover"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${
                      exp.type === 'work'
                        ? 'bg-blue-100 dark:bg-blue-900/30'
                        : 'bg-cyan-100 dark:bg-cyan-900/30'
                    }`}>
                      {exp.type === 'work' ? (
                        <FiBriefcase className={`w-6 h-6 ${
                          exp.type === 'work'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-cyan-600 dark:text-cyan-400'
                        }`} />
                      ) : (
                        <FiBookOpen className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className={`font-medium ${
                        exp.type === 'work'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-cyan-600 dark:text-cyan-400'
                      }`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          exp.type === 'work' ? 'bg-blue-600' : 'bg-cyan-600'
                        }`} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
