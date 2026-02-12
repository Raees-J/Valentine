import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'
import TypewriterText from './TypewriterText'
import CyclingText from './CyclingText'

const GreetingCard = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCardClick = (e) => {
    // Don't toggle if clicking on carousel
    if (!e.target.closest('.carousel-area')) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <motion.div
      className="relative cursor-pointer mx-auto px-4"
      style={{ 
        perspective: '2000px',
        transformStyle: 'preserve-3d'
      }}
      initial={{ 
        width: 'min(90vw, 350px)', 
        height: 'min(85vh, 500px)' 
      }}
      animate={{
        width: isOpen ? 'min(95vw, 1000px)' : 'min(90vw, 350px)',
        height: isOpen ? 'min(90vh, 700px)' : 'min(85vh, 500px)',
      }}
      transition={{
        duration: 1.2,
        ease: [0.68, -0.55, 0.265, 1.55],
      }}
      onClick={handleCardClick}
    >
      {/* Left Page - Inside Cover (visible when open) */}
      <motion.div
        className="absolute left-0 h-full rounded-xl shadow-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #c4b5fd 0%, #ddd6fe 50%, #e9d5ff 100%)',
          zIndex: 0,
        }}
        animate={{
          width: isOpen ? '50%' : '0%',
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.68, -0.55, 0.265, 1.55],
        }}
      >
        <TypewriterText isOpen={isOpen} />
      </motion.div>

      {/* Right Page - Carousel (visible when open) */}
      <motion.div
        className="absolute h-full bg-white rounded-xl shadow-2xl overflow-hidden"
        style={{
          zIndex: 0,
        }}
        animate={{
          left: isOpen ? '50%' : '0',
          width: isOpen ? '50%' : '0%',
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.68, -0.55, 0.265, 1.55],
        }}
      >
        <motion.div
          className="carousel-area h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.8,
          }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <ImageCarousel isOpen={isOpen} />
        </motion.div>
      </motion.div>

      {/* Front Cover - Flips open */}
      <motion.div
        className="absolute left-0 h-full"
        style={{
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d',
          zIndex: 2,
          pointerEvents: isOpen ? 'none' : 'auto',
        }}
        initial={{
          width: '100%',
          rotateY: 0,
        }}
        animate={{
          width: '100%',
          rotateY: isOpen ? -180 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.68, -0.55, 0.265, 1.55],
        }}
      >
        {/* Front Cover Face */}
        <motion.div
          className="absolute w-full h-full rounded-xl shadow-2xl flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #c084fc 100%)',
          }}
          animate={{
            boxShadow: isOpen
              ? '0 20px 60px rgba(0, 0, 0, 0.4)'
              : '0 10px 40px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Content */}
          <div className="relative z-10">
            <CyclingText />
            <motion.p 
              className="text-sm sm:text-base md:text-lg opacity-80 text-center mt-6 sm:mt-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Click to open your card
            </motion.p>
          </div>
        </motion.div>

        {/* Back of Front Cover (hidden) */}
        <motion.div
          className="absolute w-full h-full rounded-xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'transparent',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default GreetingCard
