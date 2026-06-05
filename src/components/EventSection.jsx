const MapIcon = () => (
  <svg viewBox="0 0 384 512" fill="currentColor">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
  </svg>
)

export default function EventSection() {
  return (
    <section className="event-section" id="event">
      <div className="reveal" style={{ padding: '0', textAlign: 'center' }}>
        
        <div style={{ color: '#1a1a1a', marginBottom: '3rem', padding: '0 1rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 'normal' }}>Wedding Event</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '500' }}>
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami:
          </p>
        </div>
        {/* Akad Nikah Card */}
        <div className="event-card" style={{ 
          backgroundImage: "url('/images/event-section.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          borderRadius: '30px', 
          padding: '4rem 2rem', 
          marginBottom: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          color: 'var(--color-heading)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '1.5rem', color: '#1a1a1a', fontWeight: 'normal' }}>Akad Nikah</h3>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', fontWeight: '500', marginBottom: '2rem', lineHeight: '1.4', color: '#1a1a1a' }}>
            Sabtu<br/>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>6 Juni 2026</span><br/>
            <span style={{ fontSize: '1rem' }}>06.00 - 08.00 WIB</span>
          </div>
          
          <div style={{ marginBottom: '0.5rem', color: '#7A8BA8' }}>
            <svg viewBox="0 0 384 512" fill="currentColor" style={{ width: '20px', margin: '0 auto' }}>
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817-80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
            </svg>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', fontWeight: '500', marginBottom: '2rem', lineHeight: '1.4', color: '#1a1a1a' }}>
            Masjid Jami' Shodri<br/>Asshiddiq
          </p>
          
          <a href="#" className="btn-map" style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 28px', background: '#7A8BA8', color: 'white', borderRadius: '30px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
            <svg viewBox="0 0 384 512" fill="currentColor" style={{ width: '14px', marginRight: '8px' }}>
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817-80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
            </svg>
            Google Map
          </a>
        </div>

        {/* Resepsi Card */}
        <div className="event-card" style={{ 
          backgroundImage: "url('/images/event-section.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          borderRadius: '30px', 
          padding: '4rem 2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          color: 'var(--color-heading)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '1.5rem', color: '#1a1a1a', fontWeight: 'normal' }}>Resepsi</h3>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', fontWeight: '500', marginBottom: '2rem', lineHeight: '1.4', color: '#1a1a1a' }}>
            Sabtu<br/>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>6 Juni 2026</span><br/>
            <span style={{ fontSize: '1rem' }}>11.00 - Selesai</span>
          </div>
          
          <div style={{ marginBottom: '0.5rem', color: '#7A8BA8' }}>
            <svg viewBox="0 0 384 512" fill="currentColor" style={{ width: '20px', margin: '0 auto' }}>
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817-80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
            </svg>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', fontWeight: '500', marginBottom: '2rem', lineHeight: '1.4', color: '#1a1a1a' }}>
            Gedung Serbaguna<br/>Mempelai
          </p>
          
          <a href="#" className="btn-map" style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 28px', background: '#7A8BA8', color: 'white', borderRadius: '30px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
            <svg viewBox="0 0 384 512" fill="currentColor" style={{ width: '14px', marginRight: '8px' }}>
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817-80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
            </svg>
            Google Map
          </a>
        </div>

      </div>
    </section>
  )
}
