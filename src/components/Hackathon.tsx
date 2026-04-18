import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiUsers, FiMapPin } from 'react-icons/fi';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { hackathonHighlight } from '../data/portfolioData';

/**
 * Hackathon Section - Highlighted achievement and project overview
 */
export default function Hackathon() {
  const {
    event,
    team,
    role,
    placement,
    invitation,
    summary,
    highlights,
    repositoryUrl,
    thanks,
  } = hackathonHighlight;

  return (
    <SectionWrapper id="hackathon" className="bg-gray-50 dark:bg-gray-900/50">
      <SectionTitle
        title="Hackathon Highlight"
        subtitle="Recent achievement in AI for urban resilience"
      />

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass-card-hover lg:col-span-2"
        >
          <div className="flex flex-wrap items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <FiAward className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {team}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {event}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {role} • {placement}
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            {summary}
          </p>

          <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            {invitation}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <motion.a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r 
                         from-blue-600 to-cyan-600 text-white font-semibold shadow-lg 
                         shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow"
            >
              View Project Repository
              <FiExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            {thanks}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Facts
          </h4>
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-start gap-3">
              <FiUsers className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Team</p>
                <p>{team}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiAward className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Result</p>
                <p>{placement}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiMapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Invite</p>
                <p>{invitation}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
