import { motion } from 'framer-motion'

const FloatingHearts = ({ isOpen }) => {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 20 + Math.random() * 15,
    size: 20 + Math.random() * 25,
    rotateStart: Math.random() * 360,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute opacity-25"
          style={{
            left: heart.left,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))',
            transformStyle: 'preserve-3d',
          }}
          animate={
            isOpen
              ? {
                  y: [0, -800],
                  opacity: [0, 0.35, 0.35, 0],
                  scale: [0.7, 1.1, 1.1, 0.7],
                  rotateY: [heart.rotateStart, heart.rotateStart + 180],
                  rotateZ: [0, 10, -10, 0],
                }
              : {}
          }
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="inline-block" style={{ 
            background: 'linear-gradient(135deg, #c084fc 0%, #a78bfa 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            💜
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts
