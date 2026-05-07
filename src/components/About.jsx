import { motion } from 'framer-motion'
import { BookOpen, Lightbulb, Target, Users } from 'lucide-react'

const highlights = [
  {
    Icon: BookOpen,
    title: 'Academic Foundation',
    text: 'MIP common core, IIIA track, and current SIIA excellence studies.',
  },
  {
    Icon: Lightbulb,
    title: 'Research Mindset',
    text: 'Curious about AI, data systems, NLP, Big Data, and deep learning.',
  },
  {
    Icon: Target,
    title: 'Project Builder',
    text: 'Focused on practical software and intelligent systems with real use cases.',
  },
  {
    Icon: Users,
    title: 'Teamwork',
    text: 'Open to collaboration, internships, and real-world engineering opportunities.',
  },
]

const focusAreas = [
  'Mathematics',
  'Programming',
  'Systems',
  'Databases',
  'Web Development',
  'Artificial Intelligence',
  'Big Data',
  'NLP',
  'DevOps Basics',
  'Deep Learning',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          {/* Left - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am Anas Lahraoui, a Moroccan student in Computer Engineering and Artificial Intelligence.
              I built a strong foundation through the MIP common core and the IIIA track at the Faculty of
              Khouribga, Département de Mathématiques et Informatique, covering mathematics, programming,
              systems, databases, web development, AI, Big Data, NLP, DevOps, and deep learning.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              After obtaining my DEUG in 2025 with an Assez Bien mention, I passed the competitive exam for
              the SIIA excellence program, where I am currently continuing my studies. I value teamwork,
              continuous learning, a research mindset, and practical project building, especially through
              internships and real-world AI or software engineering work.
            </p>

            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[#00f5ff]/25 bg-[#00f5ff]/10 px-4 py-2 text-sm font-medium text-[#00f5ff]"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-200">What drives my work</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map(({ Icon, title, text }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="glass rounded-2xl p-5 cursor-default hover:border-[#00f5ff]/30 transition-all"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#bf00ff]/30 bg-[#bf00ff]/10 text-[#bf00ff]">
                    <Icon size={20} />
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{title}</h4>
                  <p className="text-sm leading-relaxed text-gray-400">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
