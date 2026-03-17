import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const isim="Çisem";
const email="cyasar@mail.com";

function KullaniciBilgisi() {
return(
  /*fragment */
  <>
   <h2>{isim}</h2>
   <h3>{email}</h3>
  </>
);
  
}
const urun1 = "Kablosuz Kulaklık";
const fiyat1 = 299.99;
const kdv1 = fiyat1 * 1.20;
const stok1 = true;

const urun2 = "Bilgisayar";
const fiyat2 = 1099.99;
const kdv2 = fiyat2 * 1.20;
const stok2 = false;

function SepetBilgisi() {
  return (
    <>
      <h2>{urun1}</h2>
      <h3>Fiyat: {fiyat1} TL</h3>
      <h3>KDV dahil: {kdv1.toFixed(2)} TL</h3>
      {stok1 ? <p>Stokta var</p> : <p>Stokta yok</p>}

      <h2>{urun2}</h2>
      <h3>Fiyat: {fiyat2} TL</h3>
      <h3>KDV dahil: {kdv2.toFixed(2)} TL</h3>
      {stok2 ? <p>Stokta var</p> : <p>Stokta yok</p>}
    </>
  );
}

function App(){
return(
<>
<h1>Kullanıcı Bilgileri</h1>
<KullaniciBilgisi/>
<SepetBilgisi/>

</>
);
}
export default App;