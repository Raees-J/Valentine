import { motion } from 'framer-motion'
import TimeSinceCounter from './TimeSinceCounter'

const ImageCarousel = ({ isOpen }) => {
  const images = [
    { id: 1, src: '/1000123969.jpg', alt: 'Memory 1' },
    { id: 2, src: '/1000124959.jpg', alt: 'Memory 2' },
    { id: 3, src: '/1000133407.jpg', alt: 'Memory 3' },
    { id: 4, src: '/1000140802.jpg', alt: 'Memory 4' },
  ]

  return (
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 relative">
      {/* Collage Grid */}
      <motion.div
        className="w-full h-full grid grid-cols-2 gap-2 sm:gap-3 md:gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.9,
        }}
        transition={{ delay: 0.5, duration: 0.6, staggerChildren: 0.1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className={`relative rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl overflow-hidden cursor-pointer ${
              index === 0 ? 'col-span-2 row-span-1' : ''
            }`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
              scale: isOpen ? 1 : 0.9,
            }}
            transition={{
              delay: 0.6 + index * 0.1,
              duration: 0.5,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full ${
                index === 0 ? 'object-cover' : 'object-cover'
              }`}
              style={index === 0 ? { objectPosition: 'center 35%' } : {}}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Timer overlay in bottom right white space */}
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6">
        <TimeSinceCounter isOpen={isOpen} />
      </div>
    </div>
  )
}

export default ImageCarousel
