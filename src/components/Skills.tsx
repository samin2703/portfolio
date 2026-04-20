import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from './SectionWrapper';

/**
 * Skills Section - Grid layout of skills with progress bars
 * Features:
 * - Categorized skills
 * - Animated progress bars
 * - Hover effects
 */

// 🔥 Cleaned + Structured Skills
const skills = {
  'Machine Learning': ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
  'Computer Vision': [
    'OpenCV',
    'YOLO',
    'MediaPipe',
    'Image Processing',
    'Model Training','Optimization',
  ],
  'Generative AI': [
    'RAG Systems',
    'LLMs (LLaMA, GPT, Ollama)',
    'Vector Embeddings',
    'LangChain',
    'LangGraph'
    'Prompt Engineering',
    'Fine-tuning',
  ],
  Backend: ['FastAPI', 'Flask', 'Django', 'REST APIs', 'Uvicorn / ASGI'],
  'Robotics & IoT': ['ROS', 'Embedded Systems', 'Arduino','Esp32', 'Sensors Integration', 'Control Systems'],
  Tools: ['Hugging Face', 'FAISS', 'Pinecone','ChromaDB', 'SQL', 'Git', 'API Integration'],
};

// 🔥 Featured (what recruiters notice first)
const featured = ['PyTorch', 'Computer Vision', 'RAG Systems', 'FastAPI', 'YOLO'];

const categories = Object.entries(skills);

const categoryColors: Record<string, string> = {
  'Machine Learning': 'from-blue-500 to-cyan-500',
  'Computer Vision': 'from-sky-400 to-cyan-400',
  'Generative AI': 'from-blue-600 to-blue-400',
  Backend: 'from-blue-500 to-cyan-500',
  'Robotics & IoT': 'from-cyan-500 to-blue-600',
  Tools: 'from-blue-700 to-cyan-500',
};

const defaultCategoryColor = 'from-gray-500 to-gray-400';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="Technologies I work with to bring ideas to life"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 mb-12 text-center"
      >
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Featured Skills
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          {featured.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-colors cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(([category, items], categoryIndex) => (
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
              <div
                className={`mt-2 h-1 w-12 rounded-full bg-gradient-to-r ${
                  categoryColors[category] ?? defaultCategoryColor
                }`}
              />
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-3">
              {items.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
