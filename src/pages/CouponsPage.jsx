import React, { useEffect, useState } from 'react'
import { PawPrint, DoodleCat } from '../components/CatDoodles'
import './CouponsPage.css'

const COUPONS = [
  {
    id: 1,
    title: 'Unlimited Hugs',
    emoji: '🤗',
    color: '#4A6FA5',
    darkColor: '#355080',
    desc: 'Redeemable anytime, anywhere',
    paw: '🐾',
  },
  {
    id: 2,
    title: 'Your Wish',
    emoji: '⭐',
    color: '#3A7CC2',
    darkColor: '#2A5C9A',
    desc: 'Whatever your heart desires',
    paw: '✦',
  },
  {
    id: 3,
    title: 'Date Night',
    emoji: '🌙',
    color: '#5460A8',
    darkColor: '#3D4880',
    desc: 'Pick the perfect evening',
    paw: '🌸',
  },
  {
    id: 4,
    title: 'Unlimited Kisses',
    emoji: '💋',
    color: '#3B8CC4',
    darkColor: '#2A6A9A',
    desc: 'Never expires, never runs out',
    paw: '♥',
  },
]

const Coupon = ({ coupon, index, flipped, onFlip }) => (
  <div
    className={`coupon-wrapper ${flipped ? 'flipped' : ''}`}
    style={{ animationDelay: `${index * 0.15}s` }}
    onClick={() => onFlip(coupon.id)}
  >
    <div className="coupon-inner">
      {/* Front */}
      <div className="coupon-front" style={{ background: `linear-gradient(135deg, ${coupon.color}, ${coupon.darkColor})` }}>
        {/* Left notch */}
        <div className="coupon-notch left" />
        {/* Right notch */}
        <div className="coupon-notch right" />
        {/* Perforated line */}
        <div className="coupon-perf" />

        {/* Side labels */}
        <div className="coupon-side-label left-label">COUPON</div>
        <div className="coupon-side-label right-label">SINGLE USE</div>

        <div className="coupon-front-body">
          <div className="coupon-emoji">{coupon.emoji}</div>
          <h3 className="coupon-title">{coupon.title}</h3>
          <p className="coupon-paw">{coupon.paw}</p>
        </div>
      </div>

      {/* Back */}
      <div className="coupon-back" style={{ background: `linear-gradient(135deg, ${coupon.darkColor}, ${coupon.color})` }}>
        <div className="coupon-notch left" />
        <div className="coupon-notch right" />
        <div className="coupon-perf" />
        <div className="coupon-back-body">
          <div style={{ fontSize: '2rem' }}>🐱</div>
          <p className="coupon-desc">{coupon.desc}</p>
          <p className="coupon-infinite">∞</p>
          <p className="coupon-fine-print">valid forever • no expiry</p>
        </div>
      </div>
    </div>
  </div>
)

const CouponsPage = ({ onBack }) => {
  const [mounted, setMounted] = useState(false)
  const [flipped, setFlipped] = useState([])

  useEffect(() => {
    setTimeout(() => setMounted(true), 50)
  }, [])

  const handleFlip = (id) => {
    setFlipped(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  return (
    <div className={`coupons-page ${mounted ? 'mounted' : ''}`}>
      {/* Soft decorative background */}
      <div className="coupons-bg" />

      {/* Floating paw prints */}
      {[0,1,2,3,4,5].map(i => (
        <PawPrint key={i} size={14} color="rgba(74,111,165,0.15)" style={{
          position: 'fixed',
          left: `${8 + i * 16}%`,
          top: `${70 + (i % 3) * 8}%`,
          transform: `rotate(${-30 + i * 12}deg)`,
        }}/>
      ))}

      <div className="coupons-content">
        {/* Header */}
        <div className="coupons-header">
          <DoodleCat size={60} className="coupons-cat" />
          <h1 className="coupons-title">Love coupons</h1>
          <p className="coupons-subtitle">
            Use them freely... I never run out when it comes to you
          </p>
        </div>

        {/* Coupon grid */}
        <div className="coupons-grid">
          {COUPONS.map((c, i) => (
            <Coupon
              key={c.id}
              coupon={c}
              index={i}
              flipped={flipped.includes(c.id)}
              onFlip={handleFlip}
            />
          ))}
        </div>

        <p className="coupons-hint">🐾 click a coupon to flip it! 🐾</p>
      </div>

      {/* Back button */}
      <button className="back-btn-coupons" onClick={onBack}>
        ← Back to gifts
      </button>
    </div>
  )
}

export default CouponsPage
