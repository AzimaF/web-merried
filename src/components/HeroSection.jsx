export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <p className="hero-subtitle">The Wedding Of</p>
        <h2 className="hero-name">Farah</h2>
        <span className="hero-ampersand">&</span>
        <h2 className="hero-name">Ikram</h2>
        <p className="hero-date">06.06.2027</p>
      </div>
      <div className="scroll-indicator" style={{ marginTop: 'auto', marginBottom: '2rem' }}>
        <svg 
          className="scroll-mouse-svg"
          viewBox="0 0 24 38" 
          fill="none" 
          stroke="var(--color-gold-dark)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ width: '24px', height: '38px' }}
        >
          <path 
            className="scroll-mouse-outline" 
            d="M12 2 A10 10 0 0 1 22 12 V26 A10 10 0 0 1 12 36 A10 10 0 0 1 2 26 V12 A10 10 0 0 1 12 2" 
            pathLength="100"
          />
          <path className="scroll-arrow" d="M12 10v12 M8 18l4 4 4-4" />
        </svg>
      </div>
    </section>
  )
}
