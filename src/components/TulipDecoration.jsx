import { motion } from 'framer-motion'

const TulipDecoration = () => {
  const tulips = [
    // Top left corner
    { id: 1, position: 'top-[-40px] left-[-20px]', rotate: -15, scale: 0.8, delay: 0.2 },
    { id: 2, position: 'top-[20px] left-[-30px]', rotate: -25, scale: 0.7, delay: 0.4 },
    
    // Top right corner
    { id: 3, position: 'top-[-40px] right-[-20px]', rotate: 15, scale: 0.8, delay: 0.3 },
    { id: 4, position: 'top-[20px] right-[-30px]', rotate: 25, scale: 0.7, delay: 0.5 },
    
    // Bottom left corner
    { id: 5, position: 'bottom-[-40px] left-[-20px]', rotate: -20, scale: 0.8, delay: 0.6 },
    { id: 6, position: 'bottom-[20px] left-[-30px]', rotate: -30, scale: 0.7, delay: 0.7 },
    
    // Bottom right corner
    { id: 7, position: 'bottom-[-40px] right-[-20px]', rotate: 20, scale: 0.8, delay: 0.8 },
    { id: 8, position: 'bottom-[20px] right-[-30px]', rotate: 30, scale: 0.7, delay: 0.9 },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {tulips.map((tulip) => (
        <motion.div
          key={tulip.id}
          className={`absolute ${tulip.position} w-16 h-16 md:w-20 md:h-20`}
          initial={{ opacity: 0, scale: 0, rotate: tulip.rotate - 180 }}
          animate={{ 
            opacity: 0.6, 
            scale: tulip.scale,
            rotate: tulip.rotate,
          }}
          transition={{
            duration: 1,
            delay: tulip.delay,
            ease: [0.68, -0.55, 0.265, 1.55],
          }}
          whileHover={{ 
            scale: tulip.scale * 1.2,
            rotate: tulip.rotate + 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.img
            src="/tulips.png"
            alt="tulip decoration"
            className="w-full h-full object-contain drop-shadow-lg"
            animate={{
              y: [0, -5, 0],
              rotate: [tulip.rotate, tulip.rotate + 3, tulip.rotate],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.4))',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default TulipDecoration
