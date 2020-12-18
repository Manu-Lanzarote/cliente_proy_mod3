import { useState, useEffect } from "react";

const Zona1 = () => {
  const [zona1, setZona1] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/puertodelcarmen/")
      .then((res) => res.json())
      .then(function (zona1) {
        console.log(zona1);
        setZona1(zona1);
      });
  }, []);

  const mostrarZona1 = zona1.map(function (inmersion) {
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

  return mostrarZona1;
};

export default Zona1;
