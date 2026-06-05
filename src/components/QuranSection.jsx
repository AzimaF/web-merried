export default function QuranSection() {
  return (
    <section className="quran-section" id="quran">
      <div className="reveal" style={{ padding: '0', textAlign: 'center' }}>
        <img 
          src="/images/Judul-Web-Nikah.png" 
          alt="Judul Web Nikah" 
          style={{ width: '240px', height: 'auto', margin: '0 auto 2.5rem', display: 'block' }} 
        />
        <p className="quran-text" style={{ margin: '0 auto', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: '1.8', color: 'var(--color-heading)', textAlign: 'center' }}>
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
        </p>
        <p className="quran-ref" style={{ marginTop: '1.5rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-heading)', textAlign: 'center' }}>
          - QS. Ar-Rum : 21 -
        </p>
        <img 
          src="/images/quran-section.png" 
          alt="Quran Illustration" 
          style={{ width: '100%', maxWidth: '300px', height: 'auto', margin: '2.5rem auto 0', display: 'block', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
        />
      </div>
    </section>
  )
}
