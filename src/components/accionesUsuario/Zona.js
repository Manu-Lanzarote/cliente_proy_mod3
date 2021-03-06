import Zona1 from "../zonasDeBuceo/Zona1";
import Zona2 from "../zonasDeBuceo/Zona2";
import Zona3 from "../zonasDeBuceo/Zona3";
import Zona4 from "../zonasDeBuceo/Zona4";

function Zona(props) {
  let aux = props.zonaUser.toUpperCase();
  if (aux === "MALA") {
    return <Zona3 />;
  } else if (aux === "LA GRACIOSA") {
    return <Zona4 />;
  } else if (aux === "PLAYA BLANCA") {
    return <Zona2 />;
  } else if (aux === "PUERTO DEL CARMEN") {
    return <Zona1 />;
  } else {
    return <i className="fas fa-water" id="ola"></i>;
  }
}
//
export default Zona;
