import { useState } from "react";
import logo120 from "../imagenes/logo120.png";

const Cabecera = () => {
  let [nombre, setNombre] = useState("");
  let [contrasenya, setContrasenya] = useState("");

  function comprobarNombre() {
    setNombre(nombre);
    console.log(nombre);
  }

  function comprobarContrasenya() {
    setContrasenya(contrasenya);
    console.log(contrasenya);
  }

  function validar() {
    return "validar";
  }

  return (
    <div className="header">
      <img src={logo120} alt="Logo CID" id="logoCabecera" />
      <div className="usuario">
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={nombre}
          onChange={comprobarNombre}
        />
        <input
          type="text"
          placeholder="Contraseña"
          value={contrasenya}
          onChange={comprobarContrasenya}
        />
        <button onClick={validar}>ÁREA ADMIN</button>
      </div>
    </div>
  );
};

export default Cabecera;
