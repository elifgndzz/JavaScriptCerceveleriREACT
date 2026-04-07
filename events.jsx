import { useState } from 'react'
import './App.css'

function OlayOrnekleri(){
   const [tiklamaSayisi, setTiklamaSayisi] = useState(0);
   const[metin,setMetin]=useState("");
   const [fareUstunde, setFareUstunde]= useState(false);


   //onClick Olayı: Bir elemente tıklandığında gerçekleşen olaydır.
   //onChange Olayı: Bir inputun değeri değiştiğinde gerçekleşen olaydır.
    const tiklamaHandler=()=>{
    setTiklamaSayisi(tiklamaSayisi+1);}
    const metinDegisti=(e)=>{setMetin(e.target.value);}
  
  return(
<div>
<h2>OLAY ÖRNEKLERİ</h2>
<button onClick={tiklamaHandler}>
  Tıklandı: {tiklamaSayisi} kez
  </button>

   /onMouseEnter Olayı: Fare bir elementin üzerine geldiğinde gerçekleşen olaydır.
   //onMouseLeave Olayı: Fare bir elementin üzerinden ayrıldığında gerçekleşen olaydır.
<div> 
<input value={metin} 

onChange={metinDegisti} placeholder='Lütfen Bir Şeyler Giriniz.' />
<p>Girdiğiniz Metin: {metin}</p>
<p>Karakter Sayısı: {metin.length}</p>
</div>

<div
  onMouseEnter={()=>setFareUstunde(true)}
  onMouseLeave={()=>setFareUstunde(false)}
style={{
backgroundColor: fareUstunde ? "pink" : "yellow",
padding:'20px'
 }}>
</div>
{fareUstunde ? 'Fare Üstünde!' : 'Fare Üstünde Değil'}
</div>
 );
}
export default OlayOrnekleri;