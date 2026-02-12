import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TimeSinceCounter = ({ isOpen }) => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set your starting date here (YYYY-MM-DD)
    const startDate = new Date('2025-10-26T00:00:00')

    const updateTimer = () => {
      const now = new Date()
      const diff = now - startDate

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeElapsed({ days, hours, minutes, seconds })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg px-2 sm:px-3 md:px-4 py-2 sm:py-3 border border-purple-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : 20,
      }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <div className="text-center">
        <p className="text-[10px] sm:text-xs text-purple-600 font-medium mb-1">Since We First Spoke</p>
        <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
          <div className="flex flex-col items-center">
            <span className="font-bold text-purple-700 text-sm sm:text-base md:text-lg">{timeElapsed.days}</span>
            <span className="text-[9px] sm:text-[10px] text-gray-600">days</span>
          </div>
          <span className="text-purple-400 text-xs">:</span>
          <div className="flex flex-col items-center">
            <span className="font-bold text-purple-700 text-sm sm:text-base md:text-lg">{timeElapsed.hours}</span>
            <span className="text-[9px] sm:text-[10px] text-gray-600">hrs</span>
          </div>
          <span className="text-purple-400 text-xs">:</span>
          <div className="flex flex-col items-center">
            <span className="font-bold text-purple-700 text-sm sm:text-base md:text-lg">{timeElapsed.minutes}</span>
            <span className="text-[9px] sm:text-[10px] text-gray-600">min</span>
          </div>
          <span className="text-purple-400 text-xs">:</span>
          <div className="flex flex-col items-center">
            <span className="font-bold text-purple-700 text-sm sm:text-base md:text-lg">{timeElapsed.seconds}</span>
            <span className="text-[9px] sm:text-[10px] text-gray-600">sec</span>
          </div>
        </div>
        <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 mt-1 sm:mt-2 italic">October 26, 2025</p>
      </div>
    </motion.div>
  )
}

export default TimeSinceCounter
