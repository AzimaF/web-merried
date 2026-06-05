import { useState, useEffect } from 'react'

const images = [
  '/images/couple_main.png',
  '/images/bride_portrait.png',
  '/images/cover_bg.png'
]

export default function SlideshowSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="slideshow-section" id="slideshow">
      <div className="slideshow-content reveal">
        <div className="slideshow-container">
          {images.map((img, index) => (
            <div 
              key={index}
              className={`slideshow-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          
          <div className="slideshow-indicators">
            {images.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
