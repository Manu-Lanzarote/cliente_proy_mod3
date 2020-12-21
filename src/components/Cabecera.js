import { useState } from "react";
import logo120 from "../components/imagenes/logo120.png";

//Para la ruta /control-panel del botón  ÁREA ADMIN
import { Link } from "react-router-dom";

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
      <a href="http://localhost:3000" target="_self">
        <img src={logo120} alt="Logo CID" id="logoCabecera" />
      </a>
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
        <Link to="/control-panel">
          <button onClick={validar}>ÁREA ADMIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Cabecera;
