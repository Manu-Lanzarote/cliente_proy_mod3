//Rutas
import { BrowserRouter, Route, Link } from "react-router-dom";

import Anyadir from "./Anyadir";
import Modificar from "./Modificar";
import Borrar from "./Borrar";

const PanelDeControl = () => {
  return (
    <BrowserRouter>
      <h1 id="panel">PANEL DE CONTROL</h1>
      <div className="paneles">
        <div className="acciones">
          <Link to="/anyadir-inmersion" className="enlaces">
            AÑADIR INMERSIÓN -
          </Link>
          <i className="fas fa-plus-circle"></i>
        </div>
        <div className="acciones">
          <Link to="/modificar-inmersion" className="enlaces">
            EDITAR INMERSIÓN -
          </Link>
          <i className="fas fa-edit"></i>
        </div>
        <div className="acciones">
          <Link to="/borrar-inmersion" className="enlaces">
            BORRAR INMERSIÓN -
          </Link>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
      <Route exact path="/anyadir-inmersion">
        <Anyadir />
      </Route>
      <Route exact path="/modificar-inmersion">
        <Modificar />
      </Route>
      <Route exact path="/borrar-inmersion">
        <Borrar />
      </Route>
    </BrowserRouter>
  );
};

export default PanelDeControl;
