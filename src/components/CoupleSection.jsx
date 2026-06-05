export default function CoupleSection() {
  return (
    <section className="couple-section" id="couple" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
      <div className="reveal">
        <h2 className="section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--color-heading)', marginBottom: '1.5rem', textTransform: 'capitalize' }}>
          The Bride & The Groom
        </h2>
        
        <p className="intro-text" style={{ marginBottom: '4rem', color: 'var(--color-text)' }}>
          Assalamu'alaikum Wr. Wb.<br/>
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami:
        </p>

        <div className="couple-card" style={{ marginBottom: '3rem' }}>
          <div className="arch-frame">
            <img src="/images/bride_portrait.png" alt="Farah" />
          </div>
          <h3 className="couple-name" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-heading)' }}>Farah</h3>
          <p className="couple-fullname" style={{ fontWeight: '600', color: 'var(--color-text)' }}>Farah Dzakiyyah</p>
          <p className="couple-parents" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Putri dari Bapak Fulan<br/>
            & Ibu Fulanah
          </p>
          <a href="https://instagram.com/farah" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-blue)', fontWeight: '500' }}>
            @instagram_farah
          </a>
        </div>

        <div className="couple-ampersand" style={{ margin: '3rem 0', fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--color-gold)' }}>&</div>

        <div className="couple-card">
          <div className="arch-frame">
            <img src="/images/couple_main.png" alt="Ikram" />
          </div>
          <h3 className="couple-name" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-heading)' }}>Ikram</h3>
          <p className="couple-fullname" style={{ fontWeight: '600', color: 'var(--color-text)' }}>Muhammad Ikram</p>
          <p className="couple-parents" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Putra dari Bapak Fulan<br/>
            & Ibu Fulanah
          </p>
          <a href="https://instagram.com/ikram" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-blue)', fontWeight: '500' }}>
            @instagram_ikram
          </a>
        </div>
      </div>
    </section>
  )
}
