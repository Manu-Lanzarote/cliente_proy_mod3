import { useState, useEffect } from "react";

import SelectUserDinamico from "./SelectUserDinamico";

const Zona1 = () => {
  const [zona1, setZona1] = useState([]);

  const [boolean, setBoolean] = useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/puertodelcarmen/")
      .then((res) => res.json())
      .then(function (zona1) {
        console.log(zona1);
        setZona1(zona1);
      });
  }, []);

  const mostrarZona1 = zona1.map(function (inmersion, index) {
    return (
      <div key={inmersion.nombre} className="resultados">
        <img src={inmersion.imagen} alt={inmersion.nombre} height="250px" />
        <h2>{inmersion.nombre}</h2>
        <p>{inmersion.descripcion}</p>
        {/* Visto con Ander. 
        Para pasar los datos de la inmersión al componente   SelectUserDinamico    en vez de llamar a una  función con el   button    meto directamente la función dentro del onClick del  button.
        De esta manera puedo crear una condición que me permita pasar por parámetros los datos al componente   SelectUserDinamico       */}
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
      <div>
        <SelectUserDinamico
          nombre={zona1[num].nombre}
          descripcion={zona1[num].descripcion}
          mapa={zona1[num].mapa}
          imagen={zona1[num].imagen}
          nivel={zona1[num].nivel}
          profundidad={zona1[num].profundidad}
          entrada={zona1[num].entrada}
          horario={zona1[num].horario}
          temperatura={zona1[num].temperatura}
        />
      </div>
    );
  } else {
    return mostrarZona1;
  }
};

export default Zona1;
