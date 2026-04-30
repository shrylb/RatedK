import React, { useState, useEffect } from 'react'
import { DoodleCat, PawPrint } from '../components/CatDoodles'
import BackgroundDecorations from '../components/BackgroundDecorations'
import './GreetingPage.css'

const GreetingPage = ({ onYes }) => {
  const [stage, setStage] = useState('initial') // 'initial' | 'ready'
  const [noVisible, setNoVisible] = useState(true)
  const [catMood, setCatMood] = useState('waving')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 50)
  }, [])

  const handleYes = () => {
    if (stage === 'initial') {
      setStage('ready')
      setCatMood('excited')
      setNoVisible(true)
    } else {
      onYes()
    }
  }

  return (
    <div className={`greeting-page ${mounted ? 'mounted' : ''}`}>
      <BackgroundDecorations />

      {/* Floral decorations */}
      <div className="floral-left">
        <svg viewBox="0 0 200 280" width="200" xmlns="http://www.w3.org/2000/svg">
          {/* Stems */}
          <path d="M60 280 Q55 200 70 150 Q80 120 65 80" stroke="#8BAA7A" strokeWidth="3" fill="none"/>
          <path d="M80 280 Q85 220 75 170 Q65 130 80 90" stroke="#8BAA7A" strokeWidth="2.5" fill="none"/>
          <path d="M50 280 Q40 230 55 190" stroke="#8BAA7A" strokeWidth="2" fill="none"/>
          {/* Leaves */}
          <ellipse cx="55" cy="180" rx="18" ry="9" fill="#8BAA7A" transform="rotate(-30 55 180)" opacity="0.8"/>
          <ellipse cx="80" cy="200" rx="15" ry="7" fill="#8BAA7A" transform="rotate(25 80 200)" opacity="0.7"/>
          <ellipse cx="45" cy="220" rx="12" ry="6" fill="#8BAA7A" transform="rotate(-15 45 220)" opacity="0.75"/>
          {/* Peony 1 */}
          <circle cx="65" cy="75" r="38" fill="#7C1C2A" opacity="0.9"/>
          <circle cx="65" cy="75" r="30" fill="#A52B3C"/>
          <circle cx="65" cy="75" r="22" fill="#7C1C2A"/>
          <circle cx="65" cy="75" r="14" fill="#A52B3C"/>
          <circle cx="65" cy="72" r="8" fill="#7C1C2A"/>
          {/* Petal details */}
          {[0,45,90,135,180,225,270,315].map((angle, i) => (
            <ellipse key={i} cx={65 + 26*Math.cos(angle*Math.PI/180)} cy={75 + 26*Math.sin(angle*Math.PI/180)}
              rx="9" ry="5" fill="#C0344A" opacity="0.6"
              transform={`rotate(${angle} ${65 + 26*Math.cos(angle*Math.PI/180)} ${75 + 26*Math.sin(angle*Math.PI/180)})`}/>
          ))}
          {/* Bud */}
          <ellipse cx="82" cy="130" rx="14" ry="20" fill="#7C1C2A" opacity="0.85"/>
          <ellipse cx="82" cy="122" rx="10" ry="12" fill="#A52B3C"/>
          <ellipse cx="45" cy="190" rx="10" ry="14" fill="#7C1C2A" opacity="0.7"/>
          <ellipse cx="45" cy="184" rx="7" ry="8" fill="#A52B3C"/>
        </svg>
      </div>

      <div className="floral-right">
        <svg viewBox="0 0 200 280" width="200" xmlns="http://www.w3.org/2000/svg">
          {/* Stems */}
          <path d="M130 280 Q135 200 120 140 Q110 100 125 60" stroke="#8BAA7A" strokeWidth="3" fill="none"/>
          <path d="M115 280 Q108 220 118 170" stroke="#8BAA7A" strokeWidth="2" fill="none"/>
          {/* Leaves */}
          <ellipse cx="128" cy="170" rx="20" ry="9" fill="#8BAA7A" transform="rotate(30 128 170)" opacity="0.8"/>
          <ellipse cx="112" cy="210" rx="14" ry="7" fill="#8BAA7A" transform="rotate(-20 112 210)" opacity="0.75"/>
          {/* Hibiscus */}
          {[0,72,144,216,288].map((angle, i) => (
            <ellipse key={i}
              cx={125 + 32*Math.cos(angle*Math.PI/180)}
              cy={55 + 28*Math.sin(angle*Math.PI/180)}
              rx="20" ry="12" fill="#D4956A" opacity="0.85"
              transform={`rotate(${angle+20} ${125 + 32*Math.cos(angle*Math.PI/180)} ${55 + 28*Math.sin(angle*Math.PI/180)})`}/>
          ))}
          <circle cx="125" cy="55" r="14" fill="#E8C08A"/>
          <circle cx="125" cy="55" r="8" fill="#D4956A"/>
          <circle cx="125" cy="55" r="4" fill="#7C1C2A"/>
          {/* Stamen */}
          <line x1="125" y1="46" x2="125" y2="36" stroke="#D4956A" strokeWidth="2"/>
          <circle cx="125" cy="34" r="3" fill="#E8A96E"/>
          {/* Bud 2 */}
          <ellipse cx="116" cy="185" rx="10" ry="16" fill="#D4956A" opacity="0.7"/>
          <ellipse cx="116" cy="177" rx="7" ry="9" fill="#E8C08A"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="greeting-content">
        {/* Cat */}
        <div className="cat-container">
          <DoodleCat size={90} className={`greeting-cat ${catMood === 'excited' ? 'excited' : ''}`} />
        </div>

        {/* Title */}
        <div className="greeting-title-wrap">
          <h1 className="greeting-title">
            {stage === 'initial' ? (
              <>Hello Gwaps<span className="title-punctuation">!</span></>
            ) : (
              <>Happy <span style={{ color: 'var(--burgundy)' }}>Birthday</span> My Love! 🎂</>
            )}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="greeting-subtitle">
          {stage === 'initial'
            ? 'do you want to see your gift? 🐾'
            : 'are you ready?'}
        </p>

        {/* Buttons */}
        <div className="greeting-buttons">
          <button className="btn-yes" onClick={handleYes}>
            <span>YES!</span>
            <span className="btn-paw">🐾</span>
          </button>

          {noVisible && (
            <button
              className="btn-no"
              onMouseEnter={() => setNoVisible(false)}
            >
              NO THANKS
            </button>
          )}
        </div>

        {/* Paw prints trail */}
        <div className="paw-trail">
          {[1,2,3,4].map(i => (
            <PawPrint
              key={i}
              size={14}
              color="var(--tan)"
              style={{
                display: 'inline-block',
                margin: '0 4px',
                opacity: 0.5,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GreetingPage
