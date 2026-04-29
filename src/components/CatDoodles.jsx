import React from 'react'

// Pixel-art style doodle cat (like in screenshot)
export const DoodleCat = ({ size = 80, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={{ imageRendering: 'pixelated' }}
  >
    {/* Ears */}
    <rect x="10" y="6" width="10" height="12" rx="2" fill="#F5EDD8" stroke="#2C2018" strokeWidth="2"/>
    <rect x="44" y="6" width="10" height="12" rx="2" fill="#F5EDD8" stroke="#2C2018" strokeWidth="2"/>
    <rect x="12" y="8" width="6" height="7" rx="1" fill="#F0C8B8"/>
    <rect x="46" y="8" width="6" height="7" rx="1" fill="#F0C8B8"/>
    {/* Head */}
    <rect x="10" y="14" width="44" height="34" rx="10" fill="#F5EDD8" stroke="#2C2018" strokeWidth="2.5"/>
    {/* Orange patch */}
    <ellipse cx="20" cy="22" rx="8" ry="7" fill="#D4854A" opacity="0.7"/>
    {/* Black patch */}
    <ellipse cx="46" cy="28" rx="7" ry="6" fill="#2C2018" opacity="0.15"/>
    {/* Eyes */}
    <ellipse cx="24" cy="26" rx="4" ry="5" fill="#2C2018"/>
    <ellipse cx="40" cy="26" rx="4" ry="5" fill="#2C2018"/>
    <circle cx="25.5" cy="24.5" r="1.5" fill="white"/>
    <circle cx="41.5" cy="24.5" r="1.5" fill="white"/>
    {/* Nose */}
    <ellipse cx="32" cy="33" rx="2.5" ry="2" fill="#D4956A"/>
    {/* Mouth */}
    <path d="M29 35.5 Q32 38 35 35.5" stroke="#2C2018" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* Whiskers */}
    <line x1="12" y1="32" x2="24" y2="33" stroke="#2C2018" strokeWidth="1" opacity="0.6"/>
    <line x1="12" y1="35" x2="24" y2="35" stroke="#2C2018" strokeWidth="1" opacity="0.6"/>
    <line x1="40" y1="33" x2="52" y2="32" stroke="#2C2018" strokeWidth="1" opacity="0.6"/>
    <line x1="40" y1="35" x2="52" y2="35" stroke="#2C2018" strokeWidth="1" opacity="0.6"/>
    {/* Blush */}
    <ellipse cx="18" cy="36" rx="4" ry="2.5" fill="#F0C8B8" opacity="0.8"/>
    <ellipse cx="46" cy="36" rx="4" ry="2.5" fill="#F0C8B8" opacity="0.8"/>
    {/* Body */}
    <rect x="18" y="44" width="28" height="16" rx="8" fill="#F5EDD8" stroke="#2C2018" strokeWidth="2"/>
    {/* Paws */}
    <ellipse cx="20" cy="60" rx="7" ry="4" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
    <ellipse cx="44" cy="60" rx="7" ry="4" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
    {/* Raised paw */}
    <rect x="50" y="38" width="10" height="14" rx="5" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
    <ellipse cx="55" cy="37" rx="5" ry="4" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
    {/* Toe beans */}
    <circle cx="52" cy="37" r="1.2" fill="#F0C8B8"/>
    <circle cx="55" cy="35.5" r="1.2" fill="#F0C8B8"/>
    <circle cx="58" cy="37" r="1.2" fill="#F0C8B8"/>
    {/* Heart */}
    <text x="27" y="12" fontSize="8" fill="#D4854A">♥</text>
  </svg>
)

// Sleeping cat doodle
export const SleepingCat = ({ size = 60, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 80 50" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Body curled */}
    <ellipse cx="40" cy="32" rx="32" ry="14" fill="#F5EDD8" stroke="#2C2018" strokeWidth="2"/>
    {/* Orange patches */}
    <ellipse cx="25" cy="30" rx="10" ry="8" fill="#D4854A" opacity="0.6"/>
    <ellipse cx="55" cy="33" rx="8" ry="6" fill="#2C2018" opacity="0.1"/>
    {/* Head */}
    <ellipse cx="62" cy="24" rx="14" ry="13" fill="#F5EDD8" stroke="#2C2018" strokeWidth="2"/>
    {/* Ears */}
    <polygon points="52,14 56,6 62,14" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
    <polygon points="62,14 68,6 72,14" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
    <polygon points="53,13 56,8 61,13" fill="#F0C8B8"/>
    <polygon points="63,13 68,8 71,13" fill="#F0C8B8"/>
    {/* Closed eyes (sleeping) */}
    <path d="M56 23 Q59 21 62 23" stroke="#2C2018" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M63 23 Q66 21 69 23" stroke="#2C2018" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Nose */}
    <ellipse cx="63" cy="27" rx="2" ry="1.5" fill="#D4956A"/>
    {/* Smile */}
    <path d="M60 29 Q63 31 66 29" stroke="#2C2018" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    {/* Blush */}
    <ellipse cx="56" cy="29" rx="3" ry="2" fill="#F0C8B8" opacity="0.9"/>
    <ellipse cx="70" cy="29" rx="3" ry="2" fill="#F0C8B8" opacity="0.9"/>
    {/* Tail curled */}
    <path d="M10 32 Q0 20 10 12 Q18 6 20 16" stroke="#2C2018" strokeWidth="3" fill="none" strokeLinecap="round"/>
    {/* Zzz */}
    <text x="74" y="14" fontSize="7" fill="#7C1C2A" fontFamily="Caveat">z</text>
    <text x="78" y="9" fontSize="9" fill="#7C1C2A" fontFamily="Caveat">z</text>
    <text x="82" y="4" fontSize="11" fill="#7C1C2A" fontFamily="Caveat">z</text>
  </svg>
)

// Paw print decoration
export const PawPrint = ({ size = 24, color = '#2C2018', className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="16" rx="5" ry="4" fill={color} opacity="0.7"/>
    <ellipse cx="6" cy="11" rx="2.5" ry="2" fill={color} opacity="0.7"/>
    <ellipse cx="18" cy="11" rx="2.5" ry="2" fill={color} opacity="0.7"/>
    <ellipse cx="9" cy="8" rx="2" ry="1.8" fill={color} opacity="0.7"/>
    <ellipse cx="15" cy="8" rx="2" ry="1.8" fill={color} opacity="0.7"/>
  </svg>
)

// Gift box with cat
export const CatGiftBox = ({ size = 140, className = '', onClick, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 130"
    className={className}
    style={{ cursor: 'pointer', ...style }}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Box bottom */}
    <rect x="10" y="60" width="100" height="65" rx="6" fill="#E8A96E" stroke="#2C2018" strokeWidth="2.5"/>
    {/* Box stripes */}
    <rect x="10" y="60" width="100" height="65" rx="6" fill="none" stroke="#2C2018" strokeWidth="2.5"/>
    <line x1="60" y1="60" x2="60" y2="125" stroke="#7C1C2A" strokeWidth="4"/>
    <line x1="10" y1="92" x2="110" y2="92" stroke="#7C1C2A" strokeWidth="4"/>
    {/* Lid */}
    <rect x="5" y="48" width="110" height="18" rx="4" fill="#D4854A" stroke="#2C2018" strokeWidth="2.5"/>
    {/* Lid stripe */}
    <rect x="55" y="48" width="10" height="18" fill="#7C1C2A"/>
    {/* Bow loops */}
    <ellipse cx="45" cy="44" rx="16" ry="10" fill="#7C1C2A" stroke="#2C2018" strokeWidth="1.5" transform="rotate(-20 45 44)"/>
    <ellipse cx="75" cy="44" rx="16" ry="10" fill="#7C1C2A" stroke="#2C2018" strokeWidth="1.5" transform="rotate(20 75 44)"/>
    {/* Bow center */}
    <ellipse cx="60" cy="46" rx="8" ry="7" fill="#A52B3C" stroke="#2C2018" strokeWidth="1.5"/>
    {/* Cat peeking out */}
    <ellipse cx="60" cy="30" rx="18" ry="16" fill="#F5EDD8" stroke="#2C2018" strokeWidth="2"/>
    {/* Cat ears */}
    <polygon points="44,20 48,10 54,20" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
    <polygon points="66,20 72,10 76,20" fill="#F5EDD8" stroke="#2C2018" strokeWidth="1.5"/>
    <polygon points="46,19 48,13 53,19" fill="#F0C8B8"/>
    <polygon points="67,19 72,13 74,19" fill="#F0C8B8"/>
    {/* Eyes */}
    <ellipse cx="53" cy="28" rx="3.5" ry="4" fill="#2C2018"/>
    <ellipse cx="67" cy="28" rx="3.5" ry="4" fill="#2C2018"/>
    <circle cx="54.5" cy="26.5" r="1.3" fill="white"/>
    <circle cx="68.5" cy="26.5" r="1.3" fill="white"/>
    {/* Nose */}
    <ellipse cx="60" cy="34" rx="2" ry="1.5" fill="#D4956A"/>
    {/* Smile */}
    <path d="M57 36 Q60 38.5 63 36" stroke="#2C2018" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    {/* Blush */}
    <ellipse cx="49" cy="34" rx="3" ry="2" fill="#F0C8B8" opacity="0.9"/>
    <ellipse cx="71" cy="34" rx="3" ry="2" fill="#F0C8B8" opacity="0.9"/>
    {/* Whiskers */}
    <line x1="40" y1="32" x2="52" y2="33" stroke="#2C2018" strokeWidth="1" opacity="0.5"/>
    <line x1="40" y1="35" x2="52" y2="35" stroke="#2C2018" strokeWidth="1" opacity="0.5"/>
    <line x1="68" y1="33" x2="80" y2="32" stroke="#2C2018" strokeWidth="1" opacity="0.5"/>
    <line x1="68" y1="35" x2="80" y2="35" stroke="#2C2018" strokeWidth="1" opacity="0.5"/>
  </svg>
)

// Coupon ticket shape
export const CouponTicket = ({ children, color = '#4A7FB5', className = '', onClick }) => (
  <div
    className={`coupon-ticket ${className}`}
    onClick={onClick}
    style={{
      background: color,
      borderRadius: '12px',
      padding: '20px 30px',
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
      border: '2px solid rgba(255,255,255,0.2)',
      minWidth: '180px',
      minHeight: '90px',
    }}
  >
    {/* Notches */}
    <div style={{
      position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%)',
      width: '20px', height: '20px', borderRadius: '50%',
      background: 'var(--cream)', border: '2px solid rgba(0,0,0,0.1)'
    }}/>
    <div style={{
      position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)',
      width: '20px', height: '20px', borderRadius: '50%',
      background: 'var(--cream)', border: '2px solid rgba(0,0,0,0.1)'
    }}/>
    {children}
  </div>
)
