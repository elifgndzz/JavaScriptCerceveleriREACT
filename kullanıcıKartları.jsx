import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Kullanicikarti({isim='Anonim', mail='belirtilmedi', rol='Ögrenci'})
{
return( 
  <>
  <h3>{isim}</h3>
  <p>Mail:{mail}</p>
  <p>Rol:{rol}</p>
  
  </>
);
}

function App(){
  return(
    <>
    <h1>Kullanıcılar</h1>
    <Kullanicikarti isim='Çisem' mail='cyasar@gmail.com' rol='Bölüm Başkanı'/>
    <Kullanicikarti isim='Tuğba' mail='tsaray@gmail.com' rol='Program Başkanı'/>
    <Kullanicikarti/>
    </>
  );
}
export default App;

