import { useState, useEffect } from "react";

const Zona3 = () => {
  const [zona3, setZona3] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/mala/")
      .then((res) => res.json())
      .then(function (zona3) {
        console.log(zona3);
        setZona3(zona3);
      });
  }, []);

  const mostrarZona3 = zona3.map(function (inmersion) {
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

  return mostrarZona3;
};

export default Zona3;
