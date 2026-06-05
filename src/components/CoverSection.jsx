import { useMemo } from 'react'

export default function CoverSection({ isOpen, onOpen }) {
  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('to') || 'Tamu Undangan'
  }, [])

  return (
    <section className={`cover-section ${isOpen ? 'hidden' : ''}`} id="cover">
      <img src="./images/dashboard.png" alt="Cover" className="cover-bg" />
      <div className="cover-content" style={{ zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p className="cover-label" style={{ color: '#1a1a1a', marginBottom: '0.5rem', letterSpacing: '2px', fontSize: '0.85rem' }}>The Wedding of</p>
        <h1 className="cover-title" style={{ color: '#5D3F6A', fontFamily: 'var(--font-display)', fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Farah & Ikram</h1>
        <p className="cover-hashtag" style={{ color: '#333333', fontSize: '0.85rem', letterSpacing: '1px' }}>#FarrahnyabersamaIkram</p>

        <p className="cover-guest-label" style={{ color: '#1a1a1a', marginTop: '2.5rem', fontWeight: 'bold' }}>Kepada Yth:</p>
        <p className="cover-guest-name" style={{ color: '#5D3F6A', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.5rem' }}>{guestName}</p>

        <button className="btn-open" onClick={onOpen} id="btn-open-invitation" style={{ background: 'rgba(93, 63, 106, 0.1)', border: '1px solid #5D3F6A', color: '#5D3F6A', padding: '10px 24px', borderRadius: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', letterSpacing: '0.5px' }}>
          <svg viewBox="0 0 512 512" fill="currentColor" style={{ width: '16px', marginRight: '8px' }}>
            <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
          </svg>
          Buka Undangan
        </button>
      </div>
    </section>
  )
}
