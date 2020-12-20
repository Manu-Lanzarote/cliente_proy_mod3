import Anyadir from "./Anyadir";
import Modificar from "./Modificar";
import Borrar from "./Borrar";

const PanelDeControl = () => {
  return (
    <div>
      <h1 id="panel">PANEL DE CONTROL</h1>
      <div className="paneles">
        <div className="acciones">AÑADIR INMERSIÓN</div>
        <div className="acciones">MODIFICAR INMERSIÓN</div>
        <div className="acciones">BORRAR INMERSIÓN</div>
      </div>
      <div className="contenedorImagen"></div>
      <Anyadir />
      <Modificar />
      <Borrar />
    </div>
  );
};

export default PanelDeControl;
