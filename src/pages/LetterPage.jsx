import React, { useEffect, useState } from 'react'
import { PawPrint, SleepingCat } from '../components/CatDoodles'
import './LetterPage.css'

// Polaroid photo placeholder
const PolaroidPhoto = ({ emoji, caption, rotate, delay }) => (
  <div className="polaroid" style={{ '--rotate': `${rotate}deg`, animationDelay: `${delay}s` }}>
    <div className="polaroid-photo">
      <div className="polaroid-emoji">{emoji}</div>
    </div>
    <p className="polaroid-caption">{caption}</p>
  </div>
)

const LetterPage = ({ onBack }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 50)
  }, [])

  return (
    <div className={`letter-page ${mounted ? 'mounted' : ''}`}>
      {/* Denim/fabric-like background */}
      <div className="letter-bg">
        {/* Stars scattered */}
        {['12%','35%','58%','78%','22%','88%','45%','67%'].map((left, i) => (
          <div key={i} className="bg-star" style={{
            left, top: `${5 + i * 12}%`,
            fontSize: i % 3 === 0 ? '1.2rem' : i % 3 === 1 ? '0.8rem' : '1rem',
            animationDelay: `${i * 0.5}s`,
          }}>
            {i % 3 === 0 ? '★' : i % 3 === 1 ? '✦' : '⭐'}
          </div>
        ))}

        {/* Scattered paw prints */}
        {[0,1,2,3,4].map(i => (
          <PawPrint key={i} size={16} color="rgba(255,255,255,0.15)" style={{
            position: 'absolute',
            left: `${15 + i * 18}%`,
            top: `${60 + (i%3) * 12}%`,
            transform: `rotate(${-20 + i * 10}deg)`,
          }}/>
        ))}
      </div>

      <div className="letter-content">
        {/* Left column: photos */}
        <div className="photos-column">
          <PolaroidPhoto emoji="🎂" caption="birthday!" rotate={-8} delay={0.3} />
          <PolaroidPhoto emoji="🥂" caption="cheers!" rotate={5} delay={0.5} />
          <PolaroidPhoto emoji="🌸" caption="for you~" rotate={-4} delay={0.7} />

          {/* Pocket decoration */}
          <div className="denim-pocket">
            <SleepingCat size={55} />
          </div>
        </div>

        {/* Right column: letter */}
        <div className="letter-card">
          {/* Star badge */}
          <div className="star-badge">⭐</div>

          <h2 className="letter-salutation">Dear Love,</h2>

          <div className="letter-body">
            <p>
              As your special day begins, I'm reminded of how deeply you are cherished 
              and how much light you bring into every day. May the months ahead hold 
              calm mornings, brave hopes, and moments that taste like home.
            </p>
            <p>
              I wish you laughter that comes easily, wins that match your effort, 
              and kindness that circles back to you in the most unexpected ways. 
              Keep trusting your quiet magic — even when days feel plain, your 
              heart stays open, your mind stays steady, and your smile stays true.
            </p>
            <p>
              Here's to gentle growth, sweet surprises, and memories worth keeping. 
              Happy Birthday — may everything you give the world return to you 
              brighter. Today, tomorrow, always. I love you more than you'll ever know. 🐾
            </p>
          </div>

          {/* Signature */}
          <div className="letter-signature">
            <span>With all my love</span>
            <span className="signature-name">~ always yours 🐱</span>
          </div>

          {/* Ribbon bow decoration */}
          <div className="card-bow">
            <svg viewBox="0 0 80 40" width="80" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="28" cy="20" rx="24" ry="14" fill="#7C1C2A" opacity="0.8" transform="rotate(-15 28 20)"/>
              <ellipse cx="52" cy="20" rx="24" ry="14" fill="#7C1C2A" opacity="0.8" transform="rotate(15 52 20)"/>
              <ellipse cx="40" cy="20" rx="10" ry="9" fill="#A52B3C"/>
              <circle cx="40" cy="20" r="5" fill="#7C1C2A"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Back button */}
      <button className="back-btn" onClick={onBack}>
        ← Back to gifts
      </button>
    </div>
  )
}

export default LetterPage
