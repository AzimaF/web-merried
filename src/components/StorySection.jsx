const storyData = [
  {
    year: '2024',
    paragraphs: [
      'Tidak ada yang benar-benar direncanakan pada pertemuan itu. Sebuah acara kampus mempertemukan banyak orang yang datang membawa cerita dan mimpinya masing-masing.',
      'Di antara ramai yang saling berlalu, dua orang yang sebelumnya asing dipertemukan dalam percakapan sederhana.',
      'Hanya beberapa obrolan ringan yang ternyata diam-diam tinggal lebih lama dari yang seharusnya.',
      'Lalu waktu terus berjalan, bersama kedekatan yang perlahan tumbuh tanpa pernah diminta. Sejak hari-hari itu, jarak yang awalnya biasa perlahan berubah menjadi kedekatan yang tak lagi asing.',
    ],
  },
  {
    year: '2025',
    paragraphs: [
      'Waktu membuat banyak hal tumbuh tanpa suara. Tentang nyaman yang hadir perlahan, tentang doa-doa yang mulai saling disebut dalam diam.',
      'Hingga di penghujung tahun, tanpa banyak janji yang berlebihan, Ikram datang membawa niat baik untuk melangkah ke arah yang lebih serius.',
      'Bukan sekadar tentang bersama, tetapi tentang menyempurnakan separuh agama dalam ridho Allah.',
    ],
  },
  {
    year: '2026',
    paragraphs: [
      'Dan di sinilah kami, di titik di mana semua perjalanan kecil itu menemukan maknanya. Sebuah awal baru yang dibangun di atas cinta, kepercayaan, dan doa.',
      'Farah & Ikram — resmi menjadi satu dalam ikatan suci pernikahan.',
    ],
  },
]

export default function StorySection() {
  return (
    <section className="story-section" id="story" style={{ textAlign: 'center', paddingBottom: '2rem' }}>
      <div className="reveal" style={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%',
        margin: '0 auto'
      }}>
        
        <h2 className="section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: '#1a1a1a', marginBottom: '3rem', fontWeight: 'normal', padding: '0 1.5rem', marginTop: '2rem' }}>
          Love Story
        </h2>

        <div className="story-timeline" style={{ textAlign: 'left', padding: '0 2rem' }}>
          {storyData.map((item, idx) => (
            <div key={idx} className="story-item reveal" style={{ transitionDelay: `${idx * 0.15}s`, marginBottom: '2.5rem' }}>
              <h3 className="story-year" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#1a1a1a', marginBottom: '1rem', fontWeight: '600' }}>{item.year}</h3>
              {item.paragraphs.map((text, pIdx) => (
                <p key={pIdx} className="story-text" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1a1a1a', marginBottom: '1rem', lineHeight: '1.6', fontWeight: '500' }}>
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
