import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code, Award } from 'lucide-react'

const timeline = [
  {
    type: 'education',
    year: 'Before University',
    title: 'Baccalaureate in Mathematical Sciences',
    org: 'Morocco',
    desc: 'Built a strong foundation in mathematics, scientific reasoning, and problem solving.',
    Icon: GraduationCap,
    color: '#00f5ff',
  },
  {
    type: 'education',
    year: '2023 - 2025',
    title: 'Fundamental Licence Track - IIIA',
    org: 'Faculté Polydisciplinaire de Khouribga, USMS',
    desc: 'Studied Computer Engineering and Artificial Intelligence through the MIP common core and IIIA track, covering algorithms, Python, C, web development, SQL, operating systems, networks, IoT, Big Data, NLP, NoSQL, UML, DevOps, Java/JEE, and deep learning.',
    Icon: Code,
    color: '#bf00ff',
  },
  {
    type: 'education',
    year: '2025',
    title: 'DEUG Obtained with "Assez Bien"',
    org: 'Université Sultan Moulay Slimane',
    desc: 'Completed the first academic cycle and obtained the DEUG with an Assez Bien mention.',
    Icon: Award,
    color: '#0080ff',
  },
  {
    type: 'work',
    year: 'August 2025',
    title: 'Internship - OCP / STEP',
    org: 'OCP Khouribga',
    desc: 'Worked on an industrial smart platform for STEP focused on predicting output water values from input operational data such as water flow and process variables. This project connected data analysis, prediction logic, and real industrial needs.',
    Icon: Briefcase,
    color: '#00f5ff',
  },
  {
    type: 'education',
    year: 'October 2025',
    title: 'Passed Competitive Exam - SIIA Excellence Program',
    org: 'Faculté Polydisciplinaire de Khouribga',
    desc: 'Passed the competitive exam for the Excellence Program in Information Systems and Artificial Intelligence (SIIA / S2IA).',
    Icon: Award,
    color: '#bf00ff',
  },
  {
    type: 'education',
    year: '2025 - Present',
    title: 'Licence Excellence - SIIA',
    org: 'Université Sultan Moulay Slimane',
    desc: 'Currently pursuing advanced studies in Information Systems and Artificial Intelligence with focus on AI, software engineering, data systems, and practical project development.',
    Icon: GraduationCap,
    color: '#0080ff',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4" aria-labelledby="experience-title">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="experience-title" className="text-4xl md:text-5xl font-bold mb-4">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }} />
        </motion.div>

        <div className="relative">
          {/* Center line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff] via-[#bf00ff] to-[#0080ff] opacity-30" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${isLeft ? 'md:justify-end' : ''} items-start md:items-center gap-4`}
                >
                  {/* Desktop: alternating sides */}
                  <div className={`md:w-[45%] ${isLeft ? 'md:order-1' : 'md:order-3'}`}>
                    <div className="glass rounded-2xl p-6 hover:border-[#00f5ff]/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                        >
                          <item.Icon size={16} style={{ color: item.color }} />
                        </div>
                        <span className="text-xs font-mono" style={{ color: item.color }}>{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm font-medium text-gray-400 mb-3">{item.org}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex md:order-2 w-[10%] justify-center">
                    <div
                      className="w-4 h-4 rounded-full border-2 z-10"
                      style={{ backgroundColor: item.color, borderColor: item.color, boxShadow: `0 0 12px ${item.color}` }}
                    />
                  </div>

                  {/* Spacer on opposite side */}
                  <div className={`hidden md:block md:w-[45%] ${isLeft ? 'md:order-3' : 'md:order-1'}`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
