import { useState } from 'react';

function KayitFormu() {
  const [isim, setIsim] = useState("");
  const [email, setEmail] = useState("");
  const [sehir, setSehir] = useState("İstanbul");
  const [gonderildi, setGonderildi] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isim || !email) {
      alert("Lütfen tüm alanları doldurun");
      return;
    }

    setGonderildi(true);
  };

  if (gonderildi) {
    return (
      <div>
        <h2>Hoşgeldiniz {isim}, kaydınız başarıyla alındı!</h2>
        <button onClick={() => setGonderildi(false)}>Yeni Kayıt</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
        placeholder="Lütfen isim giriniz"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Lütfen email giriniz"
      />

      <select value={sehir} onChange={(e) => setSehir(e.target.value)}>
        <option value="İstanbul">İstanbul</option>
        <option value="Balıkesir">Balıkesir</option>
        <option value="Ankara">Ankara</option>
        <option value="Adana">Adana</option>
        <option value="İzmir">İzmir</option>
      </select>

      <button type="submit">Kayıt Ol</button>
    </form>
  );
}

export default KayitFormu;