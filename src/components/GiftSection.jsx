import React, { useState } from 'react';

const GiftSection = () => {
  const [copiedBCA, setCopiedBCA] = useState(false);
  const [copiedMandiri, setCopiedMandiri] = useState(false);

  const handleCopy = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="gift-section" id="gift">
      <div className="reveal">
        <p className="section-label">Wedding Gift</p>
        <h2 className="section-title" style={{color: 'var(--color-heading)'}}>Kirim Hadiah</h2>
        <p className="gift-subtitle">
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. 
          Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
        </p>
      </div>

      <div className="gift-card reveal reveal-delay-1">
        <div className="gift-bank-logo">
          <span className="gift-bank-name">BCA</span>
        </div>
        <p className="gift-account-number">1234567890</p>
        <p className="gift-account-name">a.n. Farah Dzakiyyah</p>
        <button 
          className={`btn-copy ${copiedBCA ? 'copied' : ''}`}
          onClick={() => handleCopy('1234567890', setCopiedBCA)}
        >
          {copiedBCA ? 'Tersalin!' : 'Salin No. Rekening'}
        </button>
      </div>

      <div className="gift-card reveal reveal-delay-2">
        <div className="gift-bank-logo">
          <span className="gift-bank-name">MANDIRI</span>
        </div>
        <p className="gift-account-number">0987654321</p>
        <p className="gift-account-name">a.n. Ikram</p>
        <button 
          className={`btn-copy ${copiedMandiri ? 'copied' : ''}`}
          onClick={() => handleCopy('0987654321', setCopiedMandiri)}
        >
          {copiedMandiri ? 'Tersalin!' : 'Salin No. Rekening'}
        </button>
      </div>

      <div className="gift-address-section reveal reveal-delay-3">
        <div className="gift-address-card">
          <h3 className="gift-address-label">Kirim Kado Fisik</h3>
          <p className="gift-address-text">
            Jl. Contoh Alamat Rumah No. 123, RT 01/RW 02, 
            Kelurahan, Kecamatan, Kota, Provinsi, 12345
          </p>
          <p className="gift-account-name" style={{marginTop: '10px'}}>(Penerima: Farah)</p>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
