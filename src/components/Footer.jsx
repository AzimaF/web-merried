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
      
      {/* Custom Logo */}
      <div style={{ 
        width: '60px', 
        height: '60px', 
        margin: '0 auto 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img src="/web-merried/images/Logo-footer.png" alt="Logo Footer" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      <p className="footer-text" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: '500', marginBottom: '1.5rem' }}>
        Made with ❤️ by @thetumpuls
      </p>

      {/* Social Icons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="https://wa.me/6285781021417" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px' }}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </div>
    </footer>
  )
}
