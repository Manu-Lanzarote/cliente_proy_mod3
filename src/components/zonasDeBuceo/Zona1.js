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

  const ver = () => {
    return "hacer esta función";
  };

  const mostrarZona1 = zona1.map(function (inmersion) {
    return (
      <div key={inmersion.nombre} className="resultados">
        <img src={inmersion.imagen} alt={inmersion.nombre} height="250px" />
        <h2>{inmersion.nombre}</h2>
        <p>{inmersion.descripcion}</p>
        <button onClick={ver}>Ver inmersión</button>
      </div>
    );
  });

  return mostrarZona1;
};

export default Zona1;
