import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setVisible(current < lastScrollY.current || current < 50)
      setIsScrolled(current > 20)
      lastScrollY.current = current

      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.toLowerCase())
        if (el && el.getBoundingClientRect().top <= 80) {
          setActiveSection(link.toLowerCase())
          break
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors ${
        isScrolled
          ? 'bg-black/65 border-[#00f5ff]/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
          : 'bg-black/20 border-white/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <motion.button
          type="button"
          className="text-2xl font-bold font-mono gradient-text"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollTo('home')}
          aria-label="Go to Home section"
        >
          A. Lahraoui
        </motion.button>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#00f5ff] relative focus-visible:text-[#00f5ff] ${
                activeSection === link.toLowerCase() ? 'text-[#00f5ff]' : 'text-gray-300'
              }`}
              aria-current={activeSection === link.toLowerCase() ? 'page' : undefined}
            >
              {link}
              {activeSection === link.toLowerCase() && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-nav-menu"
            className="md:hidden bg-black/90 border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  className={`text-left text-sm font-medium transition-colors focus-visible:text-[#00f5ff] ${
                    activeSection === link.toLowerCase() ? 'text-[#00f5ff]' : 'text-gray-300'
                  } hover:text-[#00f5ff]`}
                  aria-current={activeSection === link.toLowerCase() ? 'page' : undefined}
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
