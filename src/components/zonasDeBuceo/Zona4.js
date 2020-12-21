import { useState, useEffect } from "react";

const Zona4 = () => {
  const [zona4, setZona4] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/lagraciosa/")
      .then((res) => res.json())
      .then(function (zona4) {
        console.log(zona4);
        setZona4(zona4);
      });
  }, []);

  const ver = () => {
    return "hacer esta función";
  };

  const mostrarZona4 = zona4.map(function (inmersion) {
    return (
      <div key={inmersion.nombre} className="resultados">
        <img src={inmersion.imagen} alt={inmersion.nombre} height="250px" />
        <h2>{inmersion.nombre}</h2>
        <p>{inmersion.descripcion}</p>
        <button onClick={ver}>Ver inmersión</button>
      </div>
    );
  });

  return mostrarZona4;
};

export default Zona4;
