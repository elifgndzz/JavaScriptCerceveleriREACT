import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Header-Üst Bileşen
function Header(){
return( 
<>
<h2>Benim Sitem</h2>
<nav>
  <a href="#">Anasayfa |</a>
  <a href="#">Hakkımızda |</a>
  <a href="#">İletişim</a>
</nav>
</>

);
};
//main
function Main(){
return(
<main>
<h4>Hoş Geldiniz!</h4>
<p>Bu benim React ile yaptığım ilk çok bileşenli sayfam.</p>
<KartAlani/>
</main>
);
 }

 //Kart Alanı-Main Alt Bileşeni
   function KartAlani(){
  return(
    <div className='kart-alani'>
            <Kart baslik="HTML" aciklama="Yapıyı oluşturur."/>
            <Kart baslik="CSS" aciklama="Görünümü oluşturur."/>
            <Kart baslik="JavaScript" aciklama="Etkileşimi ekler."/>
    </div>
  );
 }
//Tekrar kullanılabilir hale getirme
function Kart(props){
return(
<div className="kart">
<h3>{props.baslik}</h3>
<h3>{props.aciklama}</h3>
</div>

)
};

function Footer(){
return(
<footer>2026- İstanbul Gelişim Üniversitesi-Tüm hakları saklıdır.</footer>

);
};
//App-Tüm bileşenleri biraraya getirir.
function App(){
return(
  <>
<Header/>
 <Main/>
 <Footer/>
  </>

);
};
export default App;