import Zona1 from "./Zona1";
import Zona2 from "./Zona2";
import Zona3 from "./Zona3";
import Zona4 from "./Zona4";

function ZonaSeleccionada() {
  return (
    <div>
      <h1>
        TODO aquí un SWITCH con la selección del usuario. de momento lo muestro
        todo. Aquí maquetaré CON CSS
      </h1>
      <h2>PUERTO DEL CARMEN</h2>
      <Zona1 />
      <h2>PLAYA BLANCA</h2>
      <Zona2 />
      <h2>MALA</h2>
      <Zona3 />
      <h2>LA GRACIOSA</h2>
      <Zona4 />
    </div>
  );
}

export default ZonaSeleccionada;
