import React, { useEffect, useState } from 'react'
import './Confetti.css'

const COLORS = ['#D4854A', '#7C1C2A', '#C9A87C', '#2C2018', '#8BAA7A', '#D4956A', '#F0C8B8', '#E8A96E']
const SHAPES = ['🐾', '⭐', '🌸', '✦', '♥', '🐟', '✿', '◆']

const Confetti = () => {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const arr = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2.5 + Math.random() * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      size: 0.8 + Math.random() * 0.8,
      spin: Math.random() > 0.5 ? 1 : -1,
    }))
    setPieces(arr)
  }, [])

  return (
    <div className="confetti-container">
      {pieces.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            color: p.color,
            fontSize: `${p.size}rem`,
          }}
        >
          {p.shape}
        </div>
      ))}
    </div>
  )
}

export default Confetti
