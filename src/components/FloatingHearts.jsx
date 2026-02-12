import { motion } from 'framer-motion'

const FloatingHearts = ({ isOpen }) => {
  const items = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 20 + Math.random() * 15,
    size: 30 + Math.random() * 40,
    rotateStart: Math.random() * 360,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute opacity-20"
          style={{
            left: item.left,
            bottom: '-80px',
            width: `${item.size}px`,
            height: `${item.size}px`,
            filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))',
            transformStyle: 'preserve-3d',
          }}
          animate={
            isOpen
              ? {
                  y: [0, -900],
                  opacity: [0, 0.3, 0.3, 0],
                  scale: [0.7, 1.1, 1.1, 0.7],
                  rotateY: [item.rotateStart, item.rotateStart + 180],
                  rotateZ: [0, 10, -10, 0],
                }
              : {}
          }
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img 
            src="/tulips.png" 
            alt="tulip" 
            className="w-full h-full object-contain"
            style={{
              filter: 'hue-rotate(280deg) saturate(1.2)',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts
