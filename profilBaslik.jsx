import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ProfilBaslik({kullaici}) {
  return (
    <div style={{padding:'20px',
    backgroundColor:'lightblue',
    color:'white',
    borderRadius:'12px',
    marginBottom:'20px', }}> 
    <h1>{kullaici.isim}</h1>
    <p>{kullaici.bio}</p>
    
    </div>
  );

}
//İSTATİSTİK BİLEŞENİ
function Istatistik({etiket, deger}) {
  return (
    <div style={{textAlign:'center',
     padding:'10px',}}>
      <p><strong>{deger}</strong></p>
     <p style={{color:'red'}}>{etiket}</p>
    </div>
  );
}
//İstatistik Barı bileşen
function IstatistikBar({takipci, takip, gonderi}) {
  return (
    <div style={{display:'flex', 
    justifyContent:'space-around',
    border:'1px solid gray',
     padding:'10px',  
     borderRadius:'8px',
     marginBottom:'20px',}}>
      <Istatistik etiket="Gönderi" deger={gonderi} />
      <Istatistik etiket="Takipçi" deger={takipci} />
      <Istatistik etiket="Takip" deger={takip} />
    </div>
  );
}
//Gönderi bileşei
function Gonderi({ icerik, tarih, begeni}) {
  return (
    <div style={{ border:'1px solid gray',
     borderRadius:'8px',
     padding:'16px',
     marginBottom:'10px',}}>
      <p>{icerik}</p>
      <p style={{color:'blue',}}>
        {tarih} -{begeni} beğeni</p>
    </div>
  );
}
//Ana bileşe-Hesini bileştirir
function SosyalMedyaProfil() {
  const kllanici={
    İsim:"Efe Çetinkaya",
    bio:"Yazılım öğrencisi |React Öğreniyorum!",
      };
            }
      const gonderiler =[
        {id:1, 
          icerik:"Bugün react öğrendim", 
          tarih:"2 saat önce", 
          begeni:12},
          {id:3,
          icerik:"İlk projemi Vite ile kurdum",
          tarih:"3 gün önce",
          begeni:24,
          },
        ];
        return (
 <div style={{maxWidth:'500px',
  margin:'0 auto',
   padding:'20px',}}>
    <ProfilBaslik kullaici={kllanici} />
    <İstatistikBari takipci={1234} 
    takip={567} gonderi={gonderiler.length} />
    <h2>Gönderiler</h2>
    {gonderiler.map(g=>(
      <Gonderi key={g.id} 
      icerik={g.icerik} 
      tarih={g.tarih}
       begeni={g.begeni} />))}


        </div> ); 
                  
            export default SosyalMedyaProfil;