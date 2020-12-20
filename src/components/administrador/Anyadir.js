//Añadir una nueva inmersión

const Anyadir = () => {
  return (
    <>
      <div className="contenedorUno">
        <div className="contenedor">
          <h2>INTRODUCE UNA NUEVA INMERSIÓN</h2>
          <div className="nuevoDato">
            <label>Imagen: </label>
            <input
              type="text"
              placeholder="Imagen de la inmersión"
              id="nuevaImagen"
            />
          </div>
          <div className="nuevoDato">
            <label>Zona de inmersión: </label>
            <input
              type="text"
              placeholder="Zona de inmersión"
              id="nuevoLugar"
            />
          </div>
          <div className="nuevoDato">
            <label>Nombre: </label>
            <input
              type="text"
              placeholder="Nombre de la inmersión"
              id="nuevoNombre"
            />
          </div>
          <div className="nuevoDato">
            <label>Descripción: </label>
            <input
              type="text"
              placeholder="Descripción"
              id="nuevaDescripcion"
            />
          </div>
          <div className="nuevoDato">
            <label>Mapa de la inmersión: </label>
            <input type="text" placeholder="Mapa" id="nuevoMapa" />
          </div>
          <div className="nuevoDato">
            <label>Nivel requerido: </label>
            <input type="text" placeholder="Nivel" id="nuevoNivel" />
          </div>
          <div className="nuevoDato">
            <label>Profundidad: </label>
            <input
              type="text"
              placeholder="Profundidad"
              id="nuevaProfundidad"
            />
          </div>
          <div className="nuevoDato">
            <label>Entrada: </label>
            <input type="text" placeholder="Entrada" id="nuevaEntrada" />
          </div>
          <div className="nuevoDato">
            <label>Horario: </label>
            <input type="text" placeholder="Horario" id="nuevoHorario" />
          </div>
          <div className="nuevoDato">
            <label>Temperatura del agua: </label>
            <input
              type="text"
              placeholder="Temperatura"
              id="nuevaTemperatura"
            />
          </div>
          <button onclick="nuevaInmersion()" className="boton">
            INTRODUCIR NUEVA INMERSIÓN
          </button>
        </div>
      </div>
    </>
  );
};

export default Anyadir;
