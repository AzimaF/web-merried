export default function Footer() {
  return (
    <footer className="footer" style={{ 
      background: 'rgba(242, 218, 220, 0.85)', 
      padding: '1.5rem', 
      textAlign: 'center',
      color: '#1a1a1a',
      position: 'relative',
      zIndex: 2
    }}>
      
      {/* Gold Circle Logo */}
      <div style={{ 
        width: '60px', 
        height: '60px', 
        backgroundColor: '#C5A866', 
        borderRadius: '50%', 
        margin: '0 auto 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <svg viewBox="0 0 24 24" fill="white" style={{ width: '30px' }}>
          <path d="M12 2L2 22h20L12 2zm0 3.8l6.8 14.2H5.2L12 5.8z" />
        </svg>
      </div>

      <p className="footer-text" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: '500', marginBottom: '1.5rem' }}>
        Made with ❤️ by @aa_digital
      </p>

      {/* Social Icons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="#" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px' }}>
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </a>
        <a href="#" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px' }}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </div>
    </footer>
  )
}
