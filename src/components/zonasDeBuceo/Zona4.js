import { useState, useEffect } from "react";

const Zona4 = (props) => {
  const [zona4, setZona4] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/lagraciosa/")
      .then((res) => res.json())
      .then(function (zona4) {
        console.log(zona4);
        setZona4(zona4);
      });
  }, []);

  const mostrarZona4 = zona4.map(function (inmersion) {
    return (
      <div key={inmersion.nombre}>
        <h2>{inmersion.nombre}</h2>
        <p>{inmersion.descripcion}</p>
        <img src={inmersion.mapa} alt={inmersion.nombre} height="250px" />
        <img src={inmersion.imagen} alt={inmersion.nombre} height="250px" />
        <p>{inmersion.nivel}</p>
        <p>{inmersion.profundidad}</p>
        <p>{inmersion.entrada}</p>
        <p>{inmersion.horario}</p>
        <p>{inmersion.temperatura}</p>
      </div>
    );
  });

  return mostrarZona4;
};

export default Zona4;
