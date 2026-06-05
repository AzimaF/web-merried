export default function ClosingSection() {
  return (
    <section className="closing-section" id="closing" style={{ 
      position: 'relative', 
      backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.85) 100%), url('/images/couple_main.png')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      padding: '45vh 1.5rem 6rem', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }}>
      <div className="closing-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal">
          <p className="closing-text" style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: '600', color: '#1a1a1a', fontStyle: 'italic', textShadow: '0 0 15px rgba(255,255,255,0.9), 0 0 5px rgba(255,255,255,1)' }}>
            Suatu kebahagiaan & kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
          </p>
          <p className="closing-salam" style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '3rem', color: '#1a1a1a', textShadow: '0 0 15px rgba(255,255,255,0.9), 0 0 5px rgba(255,255,255,1)' }}>
            Wassalamu'alaikum Wr. Wb.
          </p>
        </div>

        <div className="reveal reveal-delay-1">
          <p className="closing-couple-label" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1a1a1a', textShadow: '0 0 15px rgba(255,255,255,0.9), 0 0 5px rgba(255,255,255,1)' }}>
            Kami Yang Berbahagia,
          </p>
          <p className="closing-couple-names" style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', marginBottom: '0.5rem', color: 'var(--color-gold-dark)', textShadow: '0 0 20px rgba(255,255,255,0.9), 0 0 5px rgba(255,255,255,1)' }}>
            Farah & Ikram
          </p>
          <p className="closing-hashtag" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', letterSpacing: '2px', color: '#555', fontWeight: '600', textShadow: '0 0 15px rgba(255,255,255,0.9), 0 0 5px rgba(255,255,255,1)' }}>
            #FarrahnyabersamaIkram
          </p>
        </div>
      </div>
    </section>
  )
}
