import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function Meyveler(){
const meyve=['Elma','Armut','Muz','Çilek','Erik'];
return(
<>
<h2>Meyve Listesi</h2>
<ul>
{meyve.map((meyvelerin,index)=>(
<li key={index}>{meyvelerin} </li>

))}
</ul>
<p>Toplam:{meyve.length}</p>
</>

);

}


function OgrenciListesi(){
const ogrenciler=[
{id:1, isim:'Elif',puan:85},
{id:2, isim:'Çisem',puan:55},
{id:3, isim:'Tuğba',puan:50},

];
return(
  <>
  <h3>Öğrenci Listesi</h3>
  <table>
    <tr>
      <th>ID</th>
      <th>Adı</th>
      <th>Puan</th>
       <th>Durum</th>
    </tr>
    {ogrenciler.map(ogr=>( 
    <tr key={ogr.id}>
<td>{ogr.id}</td>
<td>{ogr.isim}</td>
<td>{ogr.puan}</td>
<td>{ogr.puan>=80?'Başarılı':'Çalış'}</td>
    </tr>
    
   ) )}
  </table>
  </>

  );

}

function App(){
return(
<>
<Meyveler/>
<OgrenciListesi/>
</>
);

}




export default App;