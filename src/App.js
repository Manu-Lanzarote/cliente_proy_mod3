//CLIENTE
// Instalar React con el terminal   ---       npx create-react-app .
import "./App.css";

//Importo los componentes donde haré los fetch y mostraré los resultados en el navegador
import MultiZona from "./components/zonasDeBuceo/MultiZona";

function App() {
  return (
    <div>
      <MultiZona />
    </div>
  );
}

export default App;
