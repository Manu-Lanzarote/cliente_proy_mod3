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

  const ver = () => {
    return "hacer esta función";
  };

  const mostrarZona3 = zona3.map(function (inmersion) {
    return (
      <div key={inmersion.nombre} className="resultados">
        <img src={inmersion.imagen} alt={inmersion.nombre} height="250px" />
        <h2>{inmersion.nombre}</h2>
        <p>{inmersion.descripcion}</p>
        <button onClick={ver}>Ver inmersión</button>
      </div>
    );
  });

  return mostrarZona3;
};

export default Zona3;
