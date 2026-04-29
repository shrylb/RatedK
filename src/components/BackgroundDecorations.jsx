import React from 'react'
import { PawPrint } from './CatDoodles'

const BackgroundDecorations = () => {
  const paws = [
    { top: '8%', left: '5%', size: 20, rotate: -20, opacity: 0.15 },
    { top: '15%', left: '88%', size: 16, rotate: 30, opacity: 0.12 },
    { top: '32%', left: '3%', size: 14, rotate: -10, opacity: 0.1 },
    { top: '45%', left: '92%', size: 18, rotate: 15, opacity: 0.13 },
    { top: '65%', left: '7%', size: 22, rotate: -25, opacity: 0.15 },
    { top: '78%', left: '85%', size: 15, rotate: 40, opacity: 0.11 },
    { top: '88%', left: '12%', size: 17, rotate: -5, opacity: 0.12 },
    { top: '92%', left: '78%', size: 19, rotate: 20, opacity: 0.14 },
    { top: '55%', left: '96%', size: 13, rotate: -35, opacity: 0.1 },
    { top: '22%', left: '2%', size: 12, rotate: 10, opacity: 0.09 },
  ]

  const dots = [
    { top: '20%', left: '15%', size: 8, color: '#D4854A' },
    { top: '70%', left: '80%', size: 12, color: '#7C1C2A' },
    { top: '40%', left: '90%', size: 6, color: '#C9A87C' },
    { top: '10%', left: '60%', size: 10, color: '#8BAA7A' },
    { top: '85%', left: '30%', size: 7, color: '#D4956A' },
  ]

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {paws.map((p, i) => (
        <PawPrint
          key={i}
          size={p.size}
          color="#2C2018"
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            transform: `rotate(${p.rotate}deg)`,
            opacity: p.opacity,
          }}
        />
      ))}
      {dots.map((d, i) => (
        <div
          key={`dot-${i}`}
          style={{
            position: 'absolute',
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            borderRadius: '50%',
            background: d.color,
            opacity: 0.2,
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundDecorations
