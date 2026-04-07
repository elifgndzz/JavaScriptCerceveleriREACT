import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function Profil(){
const[isim,setİsim] = useState("");
const[mail,setMail] = useState("");
const isimDegisti=(e)=>{setİsim(e.target.value);}
const mailDegisti=(e)=>{setMail(e.target.value);}
return(
  <>
    <div className='profil'> 
      <h1>Profil Düzenleme</h1>
      <h3>İsim:</h3> 
      <input type="text" value={isim} onChange={isimDegisti} placeholder='Adınızı Yazın...' />
      
      <h3>Mail:</h3>  
      <input type="email" value={mail} onChange={mailDegisti} placeholder='EMail Adresinizi Yazın...' />
    </div>

    <div className='onizleme'>
      <h3>ÖNİZLEME</h3>
      <p><strong>İsim: </strong>{isim || 'boş'}</p>
      <p><strong>Mail: </strong>{mail || 'boş'}</p>
    </div>
  </>
);
}
export default Profil;

