import { useState, useEffect, useRef, useCallback } from 'react'
import CoverSection from './components/CoverSection'
import HeroSection from './components/HeroSection'
import QuranSection from './components/QuranSection'
import CoupleSection from './components/CoupleSection'
import EventSection from './components/EventSection'
import SlideshowSection from './components/SlideshowSection'
import CountdownSection from './components/CountdownSection'
import GallerySection from './components/GallerySection'
import StorySection from './components/StorySection'
import GiftSection from './components/GiftSection'
import RsvpSection from './components/RsvpSection'
import ClosingSection from './components/ClosingSection'
import Footer from './components/Footer'
import MusicButton from './components/MusicButton'
import Divider from './components/Divider'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  // Audio element reference
  const audioRef = useRef(null)


  useEffect(() => {
    if (!isOpen) {
      document.body.classList.add('no-scroll')
      const rightPanel = document.querySelector('.right-panel')
      if (rightPanel) rightPanel.style.overflowY = 'hidden'
    } else {
      document.body.classList.remove('no-scroll')
      const rightPanel = document.querySelector('.right-panel')
      if (rightPanel) rightPanel.style.overflowY = 'auto'
    }
  }, [isOpen])

  // Reveal on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(el => {
        const top = el.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (top < windowHeight - 50) {
          el.classList.add('active')
        } else {
          el.classList.remove('active')
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    const rightPanel = document.querySelector('.right-panel')
    if (rightPanel) {
      rightPanel.addEventListener('scroll', handleScroll)
    }
    
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rightPanel) {
        rightPanel.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isOpen])

  // Pause/resume audio on visibility change
  useEffect(() => {
    const handleVisibility = () => {
      if (!audioRef.current) return
      if (document.visibilityState === 'hidden') {
        if (isPlaying) {
          audioRef.current.pause()
        }
      } else if (document.visibilityState === 'visible') {
        if (isPlaying) {
          audioRef.current.play().catch(e => console.log('Audio play failed:', e))
        }
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [isPlaying])

  const handleOpen = useCallback(() => {
    setIsOpen(true)
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch(e => console.log('Audio play failed:', e))
      }
    }, 100)
  }, [])

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e))
      setIsPlaying(true)
    }
  }, [isPlaying])

  return (
    <>
      <audio
        ref={audioRef}
        src="./music/teman-hidup.dat"
        loop
      />

      <div className="desktop-layout">
        {/* Left Panel - Sticky Desktop Hero */}
        <div className="desktop-hero">
          <img src="./images/couple_main.png" alt="Farah & Ikram" className="desktop-hero-bg" />
          <div className="desktop-hero-overlay" />
          <div className="desktop-hero-content" style={{ marginTop: '30vh' }}>
            <p className="desktop-hero-label" style={{ fontFamily: 'var(--font-elegant)', fontSize: '1.2rem', marginBottom: '0.5rem', textTransform: 'none', letterSpacing: '1px' }}>The Wedding of</p>
            <h1 className="desktop-hero-names" style={{ fontSize: '3.5rem', marginBottom: '1rem', whiteSpace: 'nowrap' }}>Farah & Ikram</h1>
            <p className="desktop-hero-hashtag" style={{ marginBottom: '0.5rem', letterSpacing: '1px' }}>#FarrahnyabersamaIkram</p>
            <p className="desktop-hero-date" style={{ letterSpacing: '1px' }}>Sabtu, 6 Juni 2026</p>
          </div>
        </div>

        {/* Right Panel - Scrollable Content */}
        <div className="right-panel">
          <CoverSection isOpen={isOpen} onOpen={handleOpen} />
          
          <HeroSection />
          
          <div style={{ backgroundColor: 'rgb(242, 218, 220)', padding: '3rem 0 2rem', position: 'relative', zIndex: 2 }}>
            <div style={{ backgroundColor: '#FAFAFA', borderRadius: 'min(45vw, 240px) min(45vw, 240px) 0 0', padding: '4rem 1.5rem 2rem', margin: '0 1.5rem', boxShadow: '0 15px 30px rgba(0,0,0,0.15)' }}>
              <QuranSection />
            </div>
          </div>
          
          <div style={{ padding: '4rem 0 2rem' }}>
            <CoupleSection />
          </div>
          
          <div style={{ padding: '0' }}>
            <SlideshowSection />
          </div>
          
          <div style={{ backgroundColor: 'rgb(242, 218, 220)', padding: '4rem 1.5rem 2rem', position: 'relative', zIndex: 2 }}>
            <EventSection />
          </div>
          
          <div style={{ position: 'relative', zIndex: 2, padding: '4rem 0 2rem' }}>
            <div style={{ backgroundColor: '#FDFBF7', borderRadius: 'min(45vw, 240px) min(45vw, 240px) 20px 20px', margin: '0 1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', overflow: 'hidden', border: '3px solid #C5A866' }}>
              <StorySection />
            </div>
          </div>
          
          <div style={{ padding: '0' }}>
            <GallerySection />
          </div>
          
          <div style={{ position: 'relative', zIndex: 2, padding: '4rem 0 2rem' }}>
            <div style={{ backgroundColor: '#FAFAFA', borderRadius: 'min(45vw, 240px) min(45vw, 240px) 20px 20px', padding: '4rem 1.5rem 2rem', margin: '0 1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '3px solid #C5A866' }}>
              <GiftSection />
            </div>
          </div>

          <div style={{ padding: '0' }}>
            <CountdownSection />
          </div>
          
          <div style={{ position: 'relative', zIndex: 2, padding: '4rem 0 2rem' }}>
            <div style={{ backgroundColor: '#FAFAFA', borderRadius: 'min(45vw, 240px) min(45vw, 240px) 20px 20px', padding: '4rem 1.5rem 2rem', margin: '0 1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '3px solid #C5A866' }}>
              <RsvpSection />
            </div>
          </div>

          <div style={{ padding: '0' }}>
            <ClosingSection />
          </div>
          
          <Footer />
        </div>
      </div>

      {isOpen && <MusicButton isPlaying={isPlaying} onToggle={toggleMusic} />}
    </>
  )
}

export default App
