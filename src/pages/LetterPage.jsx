import React, { useEffect, useState } from 'react'
import { PawPrint, SleepingCat } from '../components/CatDoodles'
import './LetterPage.css'
import photo1 from '../assets/photos/photo1.jpg'
import photo2 from '../assets/photos/photo2.jpg'
import photo4 from '../assets/photos/photo4.jpg'


const PolaroidPhoto = ({ src, caption, rotate, delay }) => (
  <div className="polaroid" style={{ '--rotate': `${rotate}deg`, animationDelay: `${delay}s` }}>
    <div className="polaroid-photo">
      {src
        ? <img src={src} alt={caption} className="polaroid-img" />
        : <div className="polaroid-placeholder">📷</div>
      }
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
          <PolaroidPhoto src={photo1} caption="birthday!" rotate={-8} delay={0.3} />
          <PolaroidPhoto src={photo2} caption="cheers!"   rotate={5}  delay={0.5} />
          <PolaroidPhoto src={photo4} caption="for you~"  rotate={-4} delay={0.7} />

          {/* Pocket decoration */}
          <div className="denim-pocket">
            <SleepingCat size={55} />
          </div>
        </div>

        {/* Right column: letter */}
        <div className="letter-card">
          {/* Star badge */}
          <div className="star-badge">⭐</div>

          <h2 className="letter-salutation">Dear Gwaps,</h2>

          <div className="letter-body">
            <p>
              As your special day begins, I'm once again reminded nga nag labor imong Nanay on Labor's Day. 
              But even more so, I'm reminded how far you have come. The past few months have given you challenges but through it all, the strength you've shown has been nothing short of inspiring. You are growing into such a remarkable person, and I am so proud of you.
            </p>
            <p>
              May you have fun and laughter that comes easily, wins that match your effort, 
              and kindness that circles back to you in the most unexpected ways. I wish you good health, restful sleep, on-time sweldo, and yes, good kalibangs too. May life treat you a little more gently, always.
            </p>
            <p>
              And most of all, thank you for choosing me and for the kind of love that touches every bit of me. Thank you for being patient with me, for listening to my random thoughts and updates, and for staying even on the days that aren’t easy, even sauna when we were still classmates, boardmates, barkada and best friends pro max pa. Being with you feels like home. I don’t take what we have for granted, not even for a second. I’m so grateful it’s you, and I’ll keep choosing you, every day. I love you soooo much gwapa ko.
              🐾
            </p>
            <p>
              Above is the sweet and caring version. Would you like me to make another one that sounds more heartfelt and personal? HAHAHAHHAHAHA I love you gwaps, always.
            </p>
          </div>

          {/* Signature */}
          <div className="letter-signature">
            <span>With all my love</span>
            <span className="signature-name">~ always yours, SherylB </span>
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
