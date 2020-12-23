import { useState, useEffect } from "react";

import SelectUserDinamico from "./SelectUserDinamico";

const Zona4 = () => {
  const [zona4, setZona4] = useState([]);

  const [boolean, setBoolean] = useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/lagraciosa/")
      .then((res) => res.json())
      .then(function (zona4) {
        console.log(zona4);
        setZona4(zona4);
      });
  }, []);

  const mostrarZona4 = zona4.map(function (inmersion, index) {
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
          <Zona4 />
        </div>
        <div>
          <SelectUserDinamico
            nombre={zona4[num].nombre}
            descripcion={zona4[num].descripcion}
            mapa={zona4[num].mapa}
            imagen={zona4[num].imagen}
            nivel={zona4[num].nivel}
            profundidad={zona4[num].profundidad}
            entrada={zona4[num].entrada}
            horario={zona4[num].horario}
            temperatura={zona4[num].temperatura}
          />
        </div>
      </div>
    );
  } else {
    return mostrarZona4;
  }
};

export default Zona4;
