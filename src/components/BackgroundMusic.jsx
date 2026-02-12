import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Try to autoplay when component mounts
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(err => {
          console.log('Autoplay prevented, waiting for user interaction')
          // If autoplay fails, try again on first user interaction
          const playOnInteraction = () => {
            audioRef.current?.play()
              .then(() => setIsPlaying(true))
              .catch(() => {})
            document.removeEventListener('click', playOnInteraction)
            document.removeEventListener('touchstart', playOnInteraction)
          }
          document.addEventListener('click', playOnInteraction)
          document.addEventListener('touchstart', playOnInteraction)
        })
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <>
      {/* Audio Element with autoplay */}
      <audio
        ref={audioRef}
        loop
        autoPlay
        preload="auto"
      >
        <source src="/PRETTYMUCH - Eyes Off You (Audio).mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      <motion.button
        onClick={togglePlay}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 bg-gradient-to-br from-purple-500 to-pink-500 backdrop-blur-sm rounded-full p-4 sm:p-5 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border-2 border-white/50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
        >
          {isPlaying ? (
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          )}
        </motion.div>
      </motion.button>
    </>
  )
}

export default BackgroundMusic
