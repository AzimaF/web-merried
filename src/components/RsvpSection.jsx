import { useState, useCallback, useEffect } from 'react'
import { supabase } from '../config/supabase'

export default function RsvpSection() {
  const [wishes, setWishes] = useState([])
  const [form, setForm] = useState({ name: '', message: '', attendance: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchWishes()
  }, [])

  const fetchWishes = async () => {
    try {
      const { data, error } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      if (data) setWishes(data)
    } catch (error) {
      console.error('Error fetching wishes:', error.message)
      setWishes([
        { name: 'Sistem', text: 'Tabel wishes belum dibuat di database atau API key salah.', status: 'Hadir' }
      ])
    }
  }

  const handleChange = useCallback((e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim() || !form.attendance) return
    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('wishes')
        .insert([
          { name: form.name, text: form.message, status: form.attendance }
        ])

      if (error) throw error

      setWishes(prev => [{
        name: form.name,
        text: form.message,
        status: form.attendance,
      }, ...prev])
      
      setForm({ name: '', message: '', attendance: '' })
    } catch (error) {
      console.error('Error saving wish:', error.message)
      alert('Gagal mengirim ucapan. Pastikan tabel di database sudah siap.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="rsvp-section" id="rsvp" style={{ textAlign: 'center', position: 'relative' }}>
      <div className="reveal" style={{ position: 'relative', zIndex: 2, marginBottom: '2rem' }}>
        <h2 className="section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: '#1a1a1a', marginBottom: '0.5rem', fontWeight: 'normal' }}>
          Rsvp
        </h2>
        <p className="rsvp-subtitle" style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '500', lineHeight: '1.6' }}>
          Konfirmasi Kehadiran<br />& Ucapan Selamat
        </p>
      </div>

      <div style={{ background: '#FDFBF7', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', padding: '2rem 1.5rem', position: 'relative', zIndex: 2, boxShadow: '0 -4px 15px rgba(0,0,0,0.02)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#7A8BA8', marginBottom: '1.5rem', textAlign: 'left', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg viewBox="0 0 512 512" fill="currentColor" style={{ width: '16px' }}>
            <path d="M512 240c0 114.9-114.6 208-256 208-37.1 0-72.3-6.4-104.1-17.9-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
          </svg>
          {wishes.length} Comments
        </p>

        <form className="rsvp-form reveal reveal-delay-1" onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Nama..."
              value={form.name}
              onChange={handleChange}
              required
              id="rsvp-name"
              style={{ width: '100%', padding: '12px 15px', borderRadius: '5px', border: '1px solid #E5E5E5', background: '#FDFBF7', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <textarea
              name="message"
              placeholder="Ucapan"
              value={form.message}
              onChange={handleChange}
              required
              id="rsvp-message"
              style={{ width: '100%', padding: '12px 15px', borderRadius: '5px', border: '1px solid #E5E5E5', background: '#FDFBF7', fontFamily: 'var(--font-body)', fontSize: '0.9rem', minHeight: '80px' }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <select
              name="attendance"
              value={form.attendance}
              onChange={handleChange}
              required
              id="rsvp-attendance"
              style={{ width: '100%', padding: '12px 15px', borderRadius: '5px', border: '1px solid #E5E5E5', background: '#FDFBF7', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
            >
              <option value="" disabled>Konfirmasi Kehadiran</option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn-submit"
            disabled={isSubmitting}
            id="rsvp-submit"
            style={{ width: '100%', padding: '12px', borderRadius: '30px', border: 'none', background: '#7A8BA8', color: 'white', fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: '500', cursor: 'pointer' }}
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
          </button>
        </form>

        <div className="wishes-list reveal reveal-delay-2" style={{ marginTop: '2rem', textAlign: 'left' }}>
          {wishes.map((wish, idx) => (
            <div key={idx} className="wish-item" style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
              <div className="wish-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span className="wish-name" style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#1a1a1a' }}>{wish.name}</span>
                <span className={`wish-status ${wish.status === 'Hadir' ? 'hadir' : 'tidak'}`} style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '10px', background: wish.status === 'Hadir' ? '#e8f5e9' : '#ffebee', color: wish.status === 'Hadir' ? '#2e7d32' : '#c62828' }}>
                  {wish.status}
                </span>
              </div>
              <p className="wish-text" style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>{wish.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
