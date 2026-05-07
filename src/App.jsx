import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen antialiased">
      <a
        href="#main-content"
        className="skip-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5ff]"
      >
        Skip to main content
      </a>
      <CustomCursor />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <main id="main-content" aria-busy={isLoading}>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
