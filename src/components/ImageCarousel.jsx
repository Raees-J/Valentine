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
    <div className="w-full h-full bg-white p-3 sm:p-4 md:p-6">
      <div className="w-full h-full grid grid-cols-2 grid-rows-3 gap-2 sm:gap-3 md:gap-4">
        {/* First image - spans 2 columns, 1 row */}
        <motion.div
          className="col-span-2 row-span-1 relative rounded-xl overflow-hidden shadow-lg"
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
            style={{ objectPosition: 'center 40%' }}
          />
        </motion.div>

        {/* Second image - left middle */}
        <motion.div
          className="col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
          }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </motion.div>

        {/* Third image - right middle */}
        <motion.div
          className="col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
          }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </motion.div>

        {/* Fourth image - bottom left */}
        <motion.div
          className="col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
          }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <img
            src={images[3].src}
            alt={images[3].alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </motion.div>

        {/* Timer - bottom right */}
        <div className="col-span-1 row-span-1 flex items-center justify-center">
          <TimeSinceCounter isOpen={isOpen} />
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
