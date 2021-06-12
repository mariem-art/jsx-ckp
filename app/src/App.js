
import './App.css';
// import imag1 from '../img/imageInPublic';
import imag2 from './img/imageInSrc.jpg';
function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidh:"100vw"}}>
     <h1 className="title red">Votre nom ici</h1>
     <br/>
     <img src ="imageInPublic.jpg" alt="img"/>

    <br/>
    <img src ={imag2}/>
    </div>
   
    <video width="320" height="240" controls >
    <source src="maVidéo.mp4" type="video/mp4"/>
    </video>
    </div>
  );
}

export default App;
