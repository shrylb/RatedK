import React, { useState, useEffect } from 'react'
import { PawPrint } from '../components/CatDoodles'
import BackgroundDecorations from '../components/BackgroundDecorations'
import './GiftBoxPage.css'

// Custom gift box SVG with cat peeking out
const GiftBox = ({ onClick, hovered, onHover, onLeave, label, color, ribbonColor, index }) => {
  return (
    <div
      className={`gift-box-wrapper ${hovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <svg viewBox="0 0 130 150" width="160" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow */}
        <ellipse cx="65" cy="148" rx="40" ry="6" fill="rgba(44,32,24,0.15)"/>
        {/* Box body */}
        <rect x="10" y="70" width="110" height="70" rx="8" fill={color} stroke="#2C2018" strokeWidth="2.5"/>
        {/* Vertical ribbon on box */}
        <rect x="59" y="70" width="12" height="70" fill={ribbonColor} opacity="0.85"/>
        {/* Horizontal ribbon on box */}
        <rect x="10" y="100" width="110" height="12" fill={ribbonColor} opacity="0.85"/>
        {/* Box lid */}
        <rect x="5" y="56" width="120" height="20" rx="5" fill={color} stroke="#2C2018" strokeWidth="2.5"/>
        {/* Ribbon on lid */}
        <rect x="59" y="56" width="12" height="20" fill={ribbonColor} opacity="0.85"/>
        {/* Bow left loop */}
        <ellipse cx="45" cy="50" rx="20" ry="12" fill={ribbonColor} stroke="#2C2018" strokeWidth="1.5"
          transform="rotate(-25 45 50)" opacity="0.95"/>
        {/* Bow right loop */}
        <ellipse cx="85" cy="50" rx="20" ry="12" fill={ribbonColor} stroke="#2C2018" strokeWidth="1.5"
          transform="rotate(25 85 50)" opacity="0.95"/>
        {/* Bow center knot */}
        <ellipse cx="65" cy="52" rx="10" ry="9" fill={ribbonColor} stroke="#2C2018" strokeWidth="1.5"/>
        <ellipse cx="65" cy="52" rx="6" ry="6" fill={color} opacity="0.5"/>
        {/* Bow ribbon tails */}
        <path d="M58 58 Q48 68 52 76" stroke={ribbonColor} strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M72 58 Q82 68 78 76" stroke={ribbonColor} strokeWidth="4" fill="none" strokeLinecap="round"/>

        {/* Cat peeking — only visible on hover */}
        <g className="cat-peek" style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          {/* Cat head */}
          <ellipse cx="65" cy="36" rx="22" ry="20" fill="#F5EDD8" stroke="#2C2018" strokeWidth="2"/>
          {/* Cat ears */}
          <polygon points="46,22 51,10 58,22" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
          <polygon points="72,22 79,10 84,22" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
          <polygon points="48,21 51,13 57,21" fill="#F0C8B8"/>
          <polygon points="73,21 79,13 82,21" fill="#F0C8B8"/>
          {/* Orange patch */}
          <ellipse cx="54" cy="30" rx="9" ry="8" fill="#D4854A" opacity="0.65"/>
          {/* Eyes (wide open / surprised) */}
          <ellipse cx="57" cy="33" rx="4.5" ry="5.5" fill="#2C2018"/>
          <ellipse cx="73" cy="33" rx="4.5" ry="5.5" fill="#2C2018"/>
          <circle cx="59" cy="31" r="1.8" fill="white"/>
          <circle cx="75" cy="31" r="1.8" fill="white"/>
          {/* Tiny stars in eyes from surprise */}
          <text x="54" y="35" fontSize="5" fill="white">★</text>
          <text x="70" y="35" fontSize="5" fill="white">★</text>
          {/* Nose */}
          <ellipse cx="65" cy="40" rx="2.5" ry="2" fill="#D4956A"/>
          {/* Open mouth smile */}
          <path d="M60 43 Q65 47 70 43" stroke="#2C2018" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          {/* Blush */}
          <ellipse cx="51" cy="40" rx="4" ry="2.5" fill="#F0C8B8" opacity="0.9"/>
          <ellipse cx="79" cy="40" rx="4" ry="2.5" fill="#F0C8B8" opacity="0.9"/>
          {/* Whiskers */}
          <line x1="40" y1="38" x2="56" y2="40" stroke="#2C2018" strokeWidth="1" opacity="0.5"/>
          <line x1="40" y1="42" x2="56" y2="42" stroke="#2C2018" strokeWidth="1" opacity="0.5"/>
          <line x1="74" y1="40" x2="90" y2="38" stroke="#2C2018" strokeWidth="1" opacity="0.5"/>
          <line x1="74" y1="42" x2="90" y2="42" stroke="#2C2018" strokeWidth="1" opacity="0.5"/>
        </g>

        {/* Static cat face (not hovered) */}
        {!hovered && (
          <g>
            <ellipse cx="65" cy="38" rx="20" ry="18" fill="#F5EDD8" stroke="#2C2018" strokeWidth="2" opacity="0.6"/>
            <path d="M58 36 Q61 34 64 36" stroke="#2C2018" strokeWidth="1.5" fill="none" opacity="0.5"/>
            <path d="M66 36 Q69 34 72 36" stroke="#2C2018" strokeWidth="1.5" fill="none" opacity="0.5"/>
          </g>
        )}
      </svg>

      <div className="gift-label">{label}</div>
    </div>
  )
}

const GiftBoxPage = ({ onBox1, onBox2, onBack }) => {
  const [hovered, setHovered] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 50)
  }, [])

  return (
    <div className={`gift-page ${mounted ? 'mounted' : ''}`}>
      <BackgroundDecorations />

      {/* Stars/sparkles */}
      {['10%','85%','25%','70%','50%'].map((left, i) => (
        <div key={i} className="sparkle-star" style={{
          left, top: `${10 + i * 15}%`,
          animationDelay: `${i * 0.4}s`,
          fontSize: i % 2 === 0 ? '1rem' : '0.7rem',
        }}>✦</div>
      ))}

      <div className="gift-content">
        <div className="gift-header">
          {/* <div className="gift-cat-emoji">🐱</div> */}
          <h1 className="gift-title">GIFTS FOR YOU!</h1>
          <p className="gift-subtitle">
            <span className="paw-icon">🐾</span>
            click a gift to open it
            <span className="paw-icon">🐾</span>
          </p>
        </div>

        <div className="gift-boxes-row">
          <GiftBox
            index={0}
            onClick={onBox1}
            hovered={hovered === 0}
            onHover={() => setHovered(0)}
            onLeave={() => setHovered(null)}
            label="🌸 Open me!"
            color="#E8A96E"
            ribbonColor="#7C1C2A"
          />
          <GiftBox
            index={1}
            onClick={onBox2}
            hovered={hovered === 1}
            onHover={() => setHovered(1)}
            onLeave={() => setHovered(null)}
            label="💌 And me!"
            color="#D4956A"
            ribbonColor="#4A5A8A"
          />
        </div>

        <div className="gift-paw-trail">
          {[0,1,2,3,4,5].map(i => (
            <PawPrint key={i} size={12} color="var(--tan)" style={{ opacity: 0.4, margin: '0 3px' }}/>
          ))}
        </div>
      </div>
      
        <button className="back-btn-coupons" onClick={onBack}>
            ← Back to home
        </button>
              
    </div>
  )
}

export default GiftBoxPage
