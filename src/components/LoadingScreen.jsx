import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      role="status"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-8"
      >
        <h1 className="text-6xl font-bold font-mono gradient-text mb-2">A.L.</h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-sm tracking-[0.4em] text-gray-400 uppercase"
        >
          Portfolio
        </motion.p>
      </motion.div>

      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #00f5ff, #bf00ff)',
            width: `${progress}%`,
          }}
          initial={{ width: '0%' }}
          transition={{ ease: 'easeInOut' }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xs text-gray-500 font-mono"
      >
        {progress}%
      </motion.p>
    </motion.div>
  )
}
