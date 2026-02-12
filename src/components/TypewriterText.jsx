import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FloatingHearts from './FloatingHearts'

const TypewriterText = ({ isOpen }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const fullText = `Assalamu Alaikum Aaisha,

Your smile with gums brightens every moment and brings warmth to my heart. The way your eyes light up when you're happy is something I treasure deeply.

Your character reflects true beauty. The grace and kindness you show to everyone, your gentle nature, and the way you carry yourself with dignity - it all speaks volumes about who you are.

Your akhlaq and adab are exemplary. You embody the beautiful teachings of Islam in everything you do, treating others with respect and compassion. It's truly inspiring to witness.

What I admire most is your steadfastness on the deen. Your commitment to your faith, the way you prioritize your prayers, and how you strive to live according to Islamic principles - it's something I deeply respect and cherish.

You are a blessing in my life, and I'm grateful for you every single day.`

  useEffect(() => {
    if (!isOpen) {
      setDisplayedText('')
      setCurrentIndex(0)
      return
    }

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 30) // Speed of typing (30ms per character)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isOpen, fullText])

  return (
    <div className="w-full h-full flex items-start justify-start p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto relative">
      <FloatingHearts isOpen={isOpen} />
      <motion.div
        className="text-white text-left w-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <p className="text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap font-serif">
          {displayedText}
          <motion.span
            className="inline-block w-0.5 h-4 sm:h-5 bg-white ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </p>
      </motion.div>
    </div>
  )
}

export default TypewriterText
