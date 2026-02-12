import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const audioRef = useRef(null)

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
      setShowPrompt(false)
    }
  }

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
      {/* Initial Play Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm text-center shadow-2xl"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
            >
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                Play Background Music?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Enhance your experience with a romantic song
              </p>
              <button
                onClick={handlePlay}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Play Music
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      {!showPrompt && (
        <motion.button
          onClick={togglePlay}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
          >
            {isPlaying ? (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
            )}
          </motion.div>
        </motion.button>
      )}
    </>
  )
}

export default BackgroundMusic
