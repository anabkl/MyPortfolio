import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'
import profileImage from '../assets/anas-lahraoui.jpg'

const roles = [
  'SIIA Student',
  'AI & Data Science Enthusiast',
  'Full-Stack Developer',
  'Machine Learning Learner',
  'Industrial AI Project Builder',
]

const githubUrl = 'https://github.com/anabkl'
const linkedinUrl = 'https://www.linkedin.com/in/anas-lahraoui-a772a5300/'
const twitterUrl = 'https://x.com/LahraouiAnas'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 100)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 50)
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      }, 150)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-28 pb-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00f5ff]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#bf00ff]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#0080ff]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#00f5ff] font-mono text-sm tracking-widest uppercase mb-4">
              Khouribga, Morocco
            </p>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Anas Lahraoui</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-mono text-gray-300 mb-5 min-h-12"
          >
            <span className="text-[#00f5ff]">{displayed}</span>
            <span className="animate-pulse text-[#bf00ff]">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto lg:mx-0"
          >
            Computer Science student at Université Sultan Moulay Slimane, currently in the
            Excellence Program in Information Systems and Artificial Intelligence (SIIA).
            Passionate about AI, Big Data, web development, and building real-world intelligent systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full font-semibold text-black shadow-lg shadow-[#00f5ff]/20"
              style={{ background: 'linear-gradient(135deg, #00f5ff, #bf00ff)' }}
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full font-semibold border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-colors"
            >
              Contact Me
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-semibold border border-white/15 text-gray-200 hover:border-[#bf00ff] hover:text-[#bf00ff] transition-colors"
            >
              GitHub
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-6"
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00f5ff] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00f5ff] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00f5ff] transition-colors"
              aria-label="X/Twitter"
            >
              <TwitterIcon size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.7, delay: 0.25, ease: 'easeOut' },
            scale: { duration: 0.7, delay: 0.25, ease: 'easeOut' },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          }}
          whileHover={{ scale: 1.025, rotate: 0.35 }}
          className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-[#00f5ff]/35 via-[#bf00ff]/20 to-[#0080ff]/35 blur-2xl" />
          <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-[#00f5ff] via-[#bf00ff] to-[#0080ff] opacity-70" />
          <div className="relative glass rounded-[2rem] p-3 shadow-2xl shadow-[#00f5ff]/10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
              <img
                src={profileImage}
                alt="Anas Lahraoui"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: 'center 62%' }}
                fetchPriority="high"
                decoding="sync"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                <p className="text-sm font-mono text-[#00f5ff]">A. Lahraoui</p>
                <p className="text-xs text-gray-300">SIIA Excellence Program</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
