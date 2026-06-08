import { useState, useEffect } from 'react'

function getTimeRemaining(targetDate) {
  const total = targetDate - new Date()
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / 1000 / 60) % 60),
    seconds: Math.floor((total / 1000) % 60),
  }
}

const WEDDING_DATE = new Date('2027-06-07T08:00:00+07:00')

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeRemaining(WEDDING_DATE))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining(WEDDING_DATE))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Farah%20%26%20Ikram&dates=20270607T010000Z/20270607T070000Z&details=Undangan%20Pernikahan%20Farah%20Dzakiyyah%20%26%20Ikram&location=Jakarta`

  return (
    <section className="countdown-section" id="countdown" style={{ 
      background: 'rgb(242, 218, 220)', 
      padding: '5rem 1.5rem', 
      textAlign: 'center',
      position: 'relative'
    }}>
      <div className="reveal" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: '#1a1a1a', marginBottom: '2rem', textTransform: 'capitalize' }}>
          Count Down
        </h2>
        <div className="countdown-grid" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <div className="countdown-item" style={{ background: 'white', color: '#1a1a1a', padding: '15px 10px', borderRadius: '15px', minWidth: '70px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <span className="countdown-number" style={{ fontSize: '2rem', fontWeight: 'bold', display: 'block' }}>{pad(time.days)}</span>
            <span className="countdown-label" style={{ fontSize: '0.85rem', textTransform: 'capitalize', color: '#7A8BA8' }}>Hari</span>
          </div>
          <div className="countdown-item" style={{ background: 'white', color: '#1a1a1a', padding: '15px 10px', borderRadius: '15px', minWidth: '70px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <span className="countdown-number" style={{ fontSize: '2rem', fontWeight: 'bold', display: 'block' }}>{pad(time.hours)}</span>
            <span className="countdown-label" style={{ fontSize: '0.85rem', textTransform: 'capitalize', color: '#7A8BA8' }}>Jam</span>
          </div>
          <div className="countdown-item" style={{ background: 'white', color: '#1a1a1a', padding: '15px 10px', borderRadius: '15px', minWidth: '70px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <span className="countdown-number" style={{ fontSize: '2rem', fontWeight: 'bold', display: 'block' }}>{pad(time.minutes)}</span>
            <span className="countdown-label" style={{ fontSize: '0.85rem', textTransform: 'capitalize', color: '#7A8BA8' }}>Menit</span>
          </div>
          <div className="countdown-item" style={{ background: 'white', color: '#1a1a1a', padding: '15px 10px', borderRadius: '15px', minWidth: '70px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <span className="countdown-number" style={{ fontSize: '2rem', fontWeight: 'bold', display: 'block' }}>{pad(time.seconds)}</span>
            <span className="countdown-label" style={{ fontSize: '0.85rem', textTransform: 'capitalize', color: '#7A8BA8' }}>Detik</span>
          </div>
        </div>
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', marginTop: '2.5rem', padding: '10px 30px', borderRadius: '30px', border: '1px solid #7A8BA8', background: 'white', color: '#7A8BA8', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}
        >
          Save The Date
        </a>
      </div>
    </section>
  )
}
