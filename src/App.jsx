import { useState } from 'react'
import GreetingCard from './components/GreetingCard'
import BackgroundMusic from './components/BackgroundMusic'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-orange-200 flex items-center justify-center overflow-hidden touch-none">
      <BackgroundMusic />
      <GreetingCard />
    </div>
  )
}

export default App
