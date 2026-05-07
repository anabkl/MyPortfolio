import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

const projects = [
  {
    title: 'STEP Smart Prediction Platform',
    desc: 'Industrial AI/data platform developed during my OCP STEP internship to predict output water values from input process data.',
    tags: ['Python', 'Data Analysis', 'Prediction', 'Industrial AI'],
    category: 'Data Science',
    github: 'https://github.com/anabkl',
  },
  {
    title: 'Lahraoui NeuralForex Pro',
    desc: 'Deep learning forex prediction system for EUR/USD combining LSTM time-series forecasting with NLP sentiment analysis and Docker-based services.',
    tags: ['Python', 'TensorFlow', 'NLP', 'Docker'],
    category: 'AI/ML',
    github: 'https://github.com/anabkl/Lahraoui-NeuralForex-Pro',
  },
  {
    title: 'AI Resume Analyzer',
    desc: 'AI-powered resume analyzer built with Streamlit and LLM tools to evaluate CVs and improve candidate profiles.',
    tags: ['Python', 'Streamlit', 'AI', 'LLM'],
    category: 'AI/ML',
    github: 'https://github.com/anabkl/ai-resume-analyzer',
  },
  {
    title: 'FPK-EXPRESS',
    desc: 'AI-powered preorder and pickup platform for FPK Khouribga students with student/vendor dashboards, survey validation, AI-like recommendations, wait-time estimation, and analytics.',
    tags: ['React', 'Vite', 'FastAPI', 'SQLite', 'Docker', 'Tailwind', 'AI MVP'],
    category: 'Web Dev',
    displayCategory: 'Web Dev / Full Stack',
    github: 'https://github.com/anabkl/FPK-EXPRESS',
  },
  {
    title: 'Parapharmacie.me',
    desc: 'E-commerce/parapharmacy web project focused on product presentation, user experience, and practical frontend development.',
    tags: ['JavaScript', 'Frontend', 'E-commerce', 'UI/UX'],
    category: 'Web Dev',
    github: 'https://github.com/anabkl/parapharmacie.me',
  },
  {
    title: 'LahraCore OS',
    desc: 'Low-level systems project exploring bare-metal AArch64 microkernel foundations and QEMU-bootable OS development.',
    tags: ['C', 'Assembly', 'OS', 'Systems', 'AArch64'],
    category: 'Systems',
    github: 'https://github.com/anabkl/LahraCore-OS',
  },
]

const filters = ['All', 'AI/ML', 'Web Dev', 'Data Science', 'Systems']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 px-4 bg-white/[0.02]" aria-labelledby="projects-title">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="projects-title" className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }} />

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <motion.button
                key={f}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  active === f
                    ? 'border-transparent text-black'
                    : 'border-white/20 text-gray-300 hover:border-[#00f5ff] hover:text-[#00f5ff]'
                }`}
                style={active === f ? { background: 'linear-gradient(135deg, #00f5ff, #bf00ff)' } : {}}
                aria-pressed={active === f}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative overflow-hidden glass rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00f5ff]/40 transition-all duration-300 hover:glow-cyan"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-[#00f5ff]/10 via-transparent to-[#bf00ff]/10" />
                <div>
                  <span
                    className="text-xs font-mono px-2 py-1 rounded-full mb-3 inline-block"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(191,0,255,0.15))',
                      border: '1px solid rgba(0,245,255,0.3)',
                      color: '#00f5ff',
                    }}
                  >
                    {project.displayCategory || project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00f5ff] transition-colors"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#bf00ff] transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
