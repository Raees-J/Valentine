import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CyclingText = () => {
  const names = ['Aaisha', 'Hayati', 'My Love']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentName = names[currentIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    if (!isDeleting && charIndex < currentName.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedText(currentName.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && charIndex === currentName.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      const timeout = setTimeout(() => {
        setDisplayedText(currentName.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex === 0) {
      // Move to next name
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % names.length)
    }
  }, [charIndex, isDeleting, currentIndex, names])

  return (
    <div className="text-center space-y-4 md:space-y-6 px-4">
      <motion.h2 
        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white/95"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Will you be my Valentine,
      </motion.h2>
      <div className="h-14 xs:h-16 sm:h-20 md:h-24 flex items-center justify-center">
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {displayedText}
          <motion.span
            className="inline-block w-0.5 sm:w-1 h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20 bg-white/90 ml-1 sm:ml-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          ?
        </motion.h1>
      </div>
    </div>
  )
}

export default CyclingText
