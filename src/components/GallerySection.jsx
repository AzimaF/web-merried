import { useState } from 'react'

const galleryImages = [
  '/images/couple_main.png',
  '/images/bride_portrait.png',
  '/images/quran-section.png',
  '/images/couple_main.png',
]

export default function GallerySection() {
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handleNext = (e) => {
    e?.stopPropagation()
    setLightboxIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = (e) => {
    e?.stopPropagation()
    setLightboxIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) handleNext()
    if (distance < -50) handlePrev()
  }

  return (
    <section className="gallery-section" id="gallery" style={{ 
      background: 'rgb(242, 218, 220)', 
      padding: '5rem 1.5rem', 
      position: 'relative', 
      zIndex: 2,
      boxShadow: '0 -10px 30px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.05)'
    }}>
      <div className="reveal" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: '#1a1a1a', marginBottom: '3rem', fontWeight: 'normal' }}>
          Galeri
        </h2>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="gallery-item reveal"
            style={{ transitionDelay: `${idx * 0.1}s` }}
            onClick={() => setLightboxIdx(idx)}
          >
            <img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div className="lightbox" onClick={() => setLightboxIdx(null)}>
          <button
            className="lightbox-close"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(null) }}
            aria-label="Close lightbox"
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', fontSize: '24px', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', zIndex: 100 }}
          >
            ✕
          </button>
          
          <button
            onClick={handlePrev}
            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', fontSize: '24px', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', zIndex: 100 }}
          >
            ❮
          </button>

          <img
            src={galleryImages[lightboxIdx]}
            alt={`Gallery ${lightboxIdx + 1}`}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }}
          />

          <button
            onClick={handleNext}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', fontSize: '24px', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', zIndex: 100 }}
          >
            ❯
          </button>
        </div>
      )}
    </section>
  )
}
