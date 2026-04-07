import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function SifreUretici() {
  const[uzunluk,setUzunluk] = useState(10);
  const[sifre,setSifre] = useState("");

  const uret=() => {
  const torba="ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZabcçdefgğhıijklmnoöprsştuüvyz0123456789";
  let sonuc="";
  for(let i=0; i< uzunluk; i++){
    const rastgeleIndex=Math.floor(Math.random() * torba.length);
    sonuc += torba.charAt(rastgeleYer);

  }
  setSifre(sonuc);
};
return(
  <div className="sifre-kart">
<h1>Şifre Üretici</h1>
<div className ="sifre-ekrani">
  {sifre||"****"}
</div>
  <div style={{marginBottom:'20px'}}>
    <input
    type="number"
    value={uzunluk}
    onChange={(e)=>setUzunluk(e.target.value)}
  />
  <span>Karakter</span>
  </div>
  <button onClick={uret}>Yeni Şifre Üret</button>
  </div>
);
}
    export default SifreUretici;