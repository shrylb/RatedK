import React, { useState } from 'react'
import GreetingPage from './pages/GreetingPage'
import GiftBoxPage from './pages/GiftBoxPage'
import LetterPage from './pages/LetterPage'
import CouponsPage from './pages/CouponsPage'
import Confetti from './components/Confetti'

function App() {
  const [page, setPage] = useState('greeting')
  const [showConfetti, setShowConfetti] = useState(false)

  const navigate = (to) => {
    setPage(to)
    if (to === 'gifts') {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 4000)
    }
  }

  return (
    <div>
      {showConfetti && <Confetti />}
      {page === 'greeting' && <GreetingPage onYes={() => navigate('gifts')} />}
      {page === 'gifts' && <GiftBoxPage onBox1={() => navigate('letter')} onBox2={() => navigate('coupons')} onBack={() => navigate('greeting')} />}
      {page === 'letter' && <LetterPage onBack={() => navigate('gifts')} />}
      {page === 'coupons' && <CouponsPage onBack={() => navigate('gifts')} />}
    </div>
  )
}

export default App
