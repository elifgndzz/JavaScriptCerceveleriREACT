
import './App.css'

function Deneme({ad}){
  return(
    <h2>Merhaba {ad}</h2>
  );

}

function App(){
  return(
    <div>
      <h1>React İlk Uygulamam</h1>
      <Deneme ad="Çisem"></Deneme>
      <Deneme ad="Elif"></Deneme>
    </div>
  );
}
export default App;