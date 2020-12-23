// Queremos hacer un fetch así que tendremos que importar useEffect que ejecutará lo que hay en la página nada más abrirla y comprobará si hay alguna variable que cambie en el array.
// Importo los módulos    useState    y    useEffect    del paquete "react"

import { useState, useEffect } from "react";

import SelectUserDinamico from "./SelectUserDinamico";

const Zona2 = () => {
  // Y creo una variable de estado por cada zona donde guardaré la información que nos devuelva el servidor.
  // Como lo que me va a llegar desde el servidor es un array con las inmersiones tendré que hacer un map dentro del useState.
  // Por eso meto corchetes para que me pueda llegar el map a un array vacío de momento

  const [zona2, setZona2] = useState([]);

  const [boolean, setBoolean] = useState(false);
  const [num, setNum] = useState(0);

  // useEeffect
  // useEffect es una función que recibe una función y un array vacío por parámetros. Con el array vacío lo que conseguimos es que se ejecute una sola vez.
  // useEffect(() => {}, [])

  useEffect(() => {
    fetch("http://localhost:3001/playablanca/")
      .then((res) => res.json())
      // En este   .then   nos llegan los datos dentro de una función
      .then(function (zona2) {
        //Para combrobar en la consola que el array me llega correctamente.
        console.log(zona2);
        //Y hago el setData
        setZona2(zona2);
        // NOTA. En este ejercicio me estoy trayendo los datos de mi array de objetos y por eso en el setData pongo (data) pero si por ejemplo me estuviera trayendo los datos de una API, tengo que mirar en la consola dentro de que parte del objeto tengo el array.
        //Así si por ejemplo veo en la consola      results: Array(7) [ {...}, {...}, ...]     setData quedaría de la siguiente manera:    setData (data.results)     Si solo escribiera  setData (data)  me traería el objeto y no el array.
      });
  }, []);

  //Ahora que tengo el array lo quiero sacar en pantalla y lo haría con un .map

  const mostrarZona2 = zona2.map(function (inmersion, index) {
    return (
      <div key={inmersion.nombre} className="resultados">
        <img src={inmersion.imagen} alt={inmersion.nombre} height="250px" />
        <h2>{inmersion.nombre}</h2>
        <p>{inmersion.descripcion}</p>
        <button
          onClick={() => {
            setNum(index);
            setBoolean(true);
          }}
        >
          Ver inmersión
        </button>
      </div>
    );
  });

  if (boolean) {
    return (
      <div className="mostrarZona">
        <div className="grid">
          <Zona2 />
        </div>
        <div>
          <SelectUserDinamico
            nombre={zona2[num].nombre}
            descripcion={zona2[num].descripcion}
            mapa={zona2[num].mapa}
            imagen={zona2[num].imagen}
            nivel={zona2[num].nivel}
            profundidad={zona2[num].profundidad}
            entrada={zona2[num].entrada}
            horario={zona2[num].horario}
            temperatura={zona2[num].temperatura}
          />
        </div>
      </div>
    );
  } else {
    return mostrarZona2;
  }
};

export default Zona2;
