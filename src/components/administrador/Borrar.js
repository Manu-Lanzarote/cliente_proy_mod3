//Borrar inmersión

const Borrar = () => {
  return (
    <>
      <div className="contenedor2">
        <h2>BORRA UNA INMERSIÓN</h2>
        <div className="formBorrar">
          <label className="red1">Campo requerido: </label>
          <input
            type="text"
            placeholder="Zona de inmersión"
            id="borrarLugar"
            className="red2"
          />
          <label className="red1">Campo requerido: </label>
          <input
            type="text"
            placeholder="Nombre de la inmersión"
            id="borrarNombre"
            className="red2"
          />
          <button onclick="borrarInmersion()" className="boton">
            BORRAR INMERSIÓN
          </button>
        </div>
      </div>
    </>
  );
};

export default Borrar;
