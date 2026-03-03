import { useState } from 'react'

import './App.css'

function App(){
  const [isim,SetIsim]=useState("");
  const [selamlama,setSelamlama]=useState("");
  return(
    <div>
    <h1>3. Hafta React Uygulamam</h1>
    <input
     type="text"
    placeholder="İsminizi Giriniz."
    value={isim}
    onChange={(e)=>SetIsim(e.target.value)}
    />
    <button onClick={()=>setSelamlama(`Merhaba ${isim}`)}
    style={{
      backgroundColor:"red",
      color:"white",
      borderRadius:"6px",
      marginLeft:"20px"
    }}
    >Gönder</button>
    {
      selamlama && (
        <p style={{color:"black",fontSize:"25px", fontWeight:"bold"}}>{selamlama}</p>
      )
    }
    </div>
  );
}
export default App;
