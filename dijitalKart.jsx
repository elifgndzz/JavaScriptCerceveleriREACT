import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Baslik(){
return(
<>
<h2>İstanbul Gelişim Ünivesitesi</h2>
</>

);


};
function KisiKarti(){
return(
<>
<p>Adı: Efe Çetikaya</p>
<p>Programı: Ön Yüz Yazılım Geliştirme</p>
<p>Dönem: 2.Dönem</p>
</>
);
};

function AltBilgi(){
return(
<>
<p>2025- Tüm hakları saklıdır.
</p>
</>
);

};
function App(){
  return(
<>
<Baslik/>
<KisiKarti/>
<AltBilgi/>
</>
  );
};
export default App;

