//CLIENTE
// Instalar React con el terminal   ---       npx create-react-app .
import "./App.css";

//Importo los componentes donde haré los fetch y mostraré los resultados en el navegador
import MultiZona from "./components/zonasDeBuceo/MultiZona";

//Importo los componentes Header y Footer
import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import SelectUser from "./components/zonasDeBuceo/SelectUser";

function App() {
  return (
    <div>
      <div className="body">
        <Cabecera />
        <div className="main">
          <MultiZona />
          <SelectUser />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
