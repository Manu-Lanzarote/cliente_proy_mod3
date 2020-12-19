import { useState, useEffect } from "react";

const Borrar = () => {
  const [dive, setDive] = useState("La Catedral");

  useEffect(function () {
    fetch("http://localhost:3001/borrarInmersion/")
      .then((res) => res.json())
      .then(function (dive) {
        console.log(dive);
        setDive(dive);
      });
  }, []);
};
export default Borrar;
