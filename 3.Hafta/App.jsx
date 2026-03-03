import { useState } from 'react'
import "./App.css"; 

function App() {
  const [isim, setIsim] = useState("");
  const [rol, setRol] = useState("Öğrenci");
  const [mesaj, setMesaj] = useState("");

  const handleSubmit = () => {
    if (isim.trim() === "") {
      setMesaj("Lütfen isminizi giriniz.");
    } else {
      setMesaj(`Etkinliğe hoş geldiniz☀️  ${rol} ${isim}`);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Etkinlik Katılım Formu 💗 </h1>

      <input
        type="text"
        placeholder="İsminizi girin"
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
      />
      <br /><br />

      <select value={rol} onChange={(e) => setRol(e.target.value)}>
        <option>Öğrenci</option>
        <option>Eğitmen</option>
      </select>
      <br /><br />

      <button onClick={handleSubmit}>Katılımı Tamamla</button>
      <br /><br />

      {mesaj && (
        <p style={{ color: "green", fontWeight: "bold" }}>{mesaj}</p>
      )}
    </div>
  );
}

export default App;