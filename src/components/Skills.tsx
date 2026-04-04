import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { skills } from '../data/portfolioData';

/**
 * Skills Section - Grid layout of skills with progress bars
 * Features:
 * - Categorized skills
 * - Animated progress bars
 * - Hover effects
 */

// Get unique categories
const categories = [...new Set(skills.map((skill) => skill.category))];

const categoryColors: Record<string, string> = {
  Frontend: 'from-blue-500 to-cyan-500',
  Backend: 'from-green-500 to-emerald-500',
  'Other Technologies': 'from-blue-600 to-cyan-600',
  'Machine Learning': 'from-blue-500 to-cyan-500',
  'Computer Vision': 'from-sky-400 to-cyan-400',
  'Generative AI': 'from-blue-600 to-blue-400',
  'Robotics & IoT': 'from-cyan-500 to-blue-600',
  'Backend Development': 'from-blue-700 to-cyan-500',
  'Data & Tools': 'from-cyan-600 to-blue-700',
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="Technologies I work with to bring ideas to life"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="glass-card-hover"
          >
            {/* Category Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className={`h-full rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Tags */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Other Technologies I've Worked With
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          {/* EDIT: Add more skills/technologies */}
          {['Langchain', 'Ollama', 'Streamlit', 'FastAPI', 'Sentence Transformers', 'Hugging Face', 'Cross-Encoder', 'LLaMA 2', 'Prompt Engineering'].map(
            (tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 
                           dark:text-gray-300 rounded-full text-sm font-medium 
                           hover:bg-blue-100 dark:hover:bg-blue-900/30 
                           hover:text-blue-600 dark:hover:text-blue-400 
                           transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            )
          )}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
