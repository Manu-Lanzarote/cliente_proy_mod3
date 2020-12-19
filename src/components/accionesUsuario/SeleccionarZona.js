//Input y botón para permitir al usuario escribir algo y enviarlo.
//Primero tengo que crear un estado, así que hay que importar useState fuera y crear la variable de estado dentro de la función. El useState contendrá un string vacío para indicar a react que tenemos un dato de tipo string. Si no lo hacemos, la consola me devolverá un error.

// import { useState } from "react";

// const InputUser = () => {
//   const [nombre, setNombre] = useState("");

//Para que el usuario pueda escribir creo un input type="text" que contenga un evento   onChange   que contenga  la función    cambiarNombre que lo que hará será cambiar el valor de la variable de estado    nombre

//Para que funcione correctamente la función debe "capturar el evento".
//Un evento es cualquier interacción del usuario con el navegador: .onClick, .onMouseOver, .onScroll, .onFocus ...
//La función cambiarNombre recibe como parámetro ese evento y accede a su valor con   event.target.value
//Por convención llamaremos al evento  event  ó    e    (cualquiera de las dos maneras es aceptada).

// const cambiarNombre = (event) => {
//   setNombre(event.target.value);
// };

//Y por últimno necesitaremos un botón dentro del return para borrar el lo que escribamos en el input y almacenarlo en la varible de estado para ello crearemos la función    borrarNombre   en el onClick

//   const borrarNombre = () => {
//     setNombre("");
//   };

//   return (
//     <>
//       <input type="text" value={nombre} onChange={cambiarNombre} />
//       <h1>{nombre}</h1>
//       <button onClick={borrarNombre}>Borrar nombre</button>
//     </>
//   );
// };
// export default InputUser;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { useState } from "react";
import Zona from "./Zona";

const SeleccionarZona = () => {
  const [zona, setZona] = useState("");

  const escribirZona = (event) => {
    setZona(event.target.value);
  };

  const verInmersiones = () => {
    setZona("");
  };

  //Creo un objeto con el estado para pasarselo por parámetros a otro componente que quiero usar para que el usuario elija la zona de buceo:
  const usuario = { zonaUser: zona };
  //console.log(usuario.zonaUser);
  //Y lo paso por parámetros al componente Zona  -- No olvidar importar Zona

  return (
    <>
      <input type="text" value={zona} onChange={escribirZona} />
      <button onClick={verInmersiones} placeholder="Zona de buceo">
        Borrar
      </button>
      <Zona zonaUser={usuario.zonaUser} />
    </>
  );
};

export default SeleccionarZona;
