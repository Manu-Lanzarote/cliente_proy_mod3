//CLIENTE
// Instalar React con el terminal   ---       npx create-react-app .
import "./App.css";

//Rutas
import { BrowserRouter, Route, Link } from "react-router-dom";

//Importo los componentes donde haré los fetch y mostraré los resultados en el navegador
import MultiZona from "./components/zonasDeBuceo/MultiZona";

//Importo los componentes Header y Footer
import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import SelectUser from "./components/zonasDeBuceo/SelectUser";
import PanelDeControl from "./components/administrador/PanelDeControl";
import SelectUserDinamico from "./components/zonasDeBuceo/SelectUserDinamico";

function App() {
  return (
    //<BrowserRouter></BrowserRouter> Será com el div que envuelve todas mis rutas y mis componentes
    <BrowserRouter>
      <div className="body">
        <Route exact path="/">
          <div className="landing">
            <Link to="/principal" className="enlaces">
              <div className="bg-5">
                <h1 className="animated-shadow">
                  GUIA DE <br /> INMERSIONES
                  <br />
                  DE LANZAROTE
                </h1>
              </div>
            </Link>
          </div>
        </Route>

        <Route exact path="/principal">
          <Cabecera />
          <div className="main">
            <MultiZona />
            <SelectUser />
            <SelectUserDinamico />
          </div>
          <Footer />
        </Route>

        <Route exact path="/control-panel">
          <Cabecera />
          <div className="main">
            <PanelDeControl />
          </div>
          <Footer />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
