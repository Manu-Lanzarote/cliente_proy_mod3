import { useState, useEffect } from "react";

import SelectUserDinamico from "./SelectUserDinamico";

const Zona3 = () => {
  const [zona3, setZona3] = useState([]);

  const [boolean, setBoolean] = useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/mala/")
      .then((res) => res.json())
      .then(function (zona3) {
        console.log(zona3);
        setZona3(zona3);
      });
  }, []);

  const mostrarZona3 = zona3.map(function (inmersion, index) {
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
          <Zona3 />
        </div>
        <div>
          <SelectUserDinamico
            nombre={zona3[num].nombre}
            descripcion={zona3[num].descripcion}
            mapa={zona3[num].mapa}
            imagen={zona3[num].imagen}
            nivel={zona3[num].nivel}
            profundidad={zona3[num].profundidad}
            entrada={zona3[num].entrada}
            horario={zona3[num].horario}
            temperatura={zona3[num].temperatura}
          />
        </div>
      </div>
    );
  } else {
    return mostrarZona3;
  }
};

export default Zona3;
