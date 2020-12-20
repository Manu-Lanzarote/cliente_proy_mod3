//Modificar inmersión

function Modificar() {
  return (
    <>
      <div className="contenedor">
        <h2>EDITA UNA INMERSIÓN</h2>
        <div className="nuevoDato">
          <label>Imagen: </label>
          <input
            type="text"
            placeholder="Imagen de la inmersión"
            id="mo_Imagen"
          />
        </div>
        <div className="nuevoDato">
          <label className="red1">Campo requerido: </label>
          <input
            type="text"
            placeholder="Zona de inmersión"
            id="mo_Lugar"
            className="red2"
          />
        </div>
        <div className="nuevoDato">
          <label className="red1">Campo requerido: </label>
          <input
            type="text"
            placeholder="Nombre de la inmersión"
            id="mo_Nombre"
            className="red2"
          />
        </div>
        <div className="nuevoDato">
          <label>Descripción: </label>
          <input type="text" placeholder="Descripción" id="mo_Descripcion" />
        </div>
        <div className="nuevoDato">
          <label>Mapa de la inmersión: </label>
          <input type="text" placeholder="Mapa" id="mo_Mapa" />
        </div>
        <div className="nuevoDato">
          <label>Nivel requerido: </label>
          <input type="text" placeholder="Nivel" id="mo_Nivel" />
        </div>
        <div className="nuevoDato">
          <label>Profundidad: </label>
          <input type="text" placeholder="Profundidad" id="mo_Profundidad" />
        </div>
        <div className="nuevoDato">
          <label>Entrada: </label>
          <input type="text" placeholder="Entrada" id="mo_Entrada" />
        </div>
        <div className="nuevoDato">
          <label>Horario: </label>
          <input type="text" placeholder="Horario" id="mo_Horario" />
        </div>
        <div className="nuevoDato">
          <label>Temperatura del agua: </label>
          <input type="text" placeholder="Temperatura" id="mo_Temperatura" />
        </div>
        <button onclick="editarInmersion()" className="boton">
          EDITAR INMERSIÓN
        </button>
      </div>
    </>
  );
}

export default Modificar;
