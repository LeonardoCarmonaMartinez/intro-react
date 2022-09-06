import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import Tarjeta from './componentes/Card';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="gallery">
      <div>
        <Header titulo ="Galeria de Imagenes con React"/>
      </div>
      <hr/>
      <div class="card-section">
        <Tarjeta url="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg" titulo="Gato" descripcion="Felis catus"/>
        <Tarjeta url="https://cdn.pixabay.com/photo/2016/11/29/05/32/rooster-1867562_960_720.jpg" titulo="Gallo" descripcion="Gallus Gallus domesticus"/>
        <Tarjeta url="https://cdn.pixabay.com/photo/2021/02/07/19/57/gazelle-5992510_960_720.jpg" titulo="Gacela" descripcion="Gazella"/>     
      </div>
      <div class="footer">
        <Footer parrafo="Ejemplos de nombres comunes de animales y su respectivo nombre cientifico"/>
      </div>     
    </div>   
  );
}

export default App;
