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
    <div className="w-full h-full flex flex-col bg-white p-3 sm:p-4 md:p-6">
      {/* Image Grid - Takes most of the space */}
      <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
        {/* Top row - Large image spanning 2 columns */}
        <motion.div
          className="col-span-2 relative rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
          }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
        </motion.div>

        {/* Bottom row - 3 smaller images */}
        {images.slice(1).map((image, index) => (
          <motion.div
            key={image.id}
            className="relative rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
            }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Timer at bottom - Fixed height */}
      <div className="flex justify-center items-center">
        <TimeSinceCounter isOpen={isOpen} />
      </div>
    </div>
  )
}

export default ImageCarousel
