import SeleccionarZona from "../accionesUsuario/SeleccionarZona";

function MultiZona() {
  return (
    <div>
      <h1>GUÍA DE INMERSIONES DE LANZAROTE</h1>
      <div className="cajaGuia">
        <h2>¿Donde quieres bucear?</h2>
        <p>
          Selecciona tu zona de buceo<br></br>(Puerto del Carmen, Playa Blanca,
          Mala o La Graciosa)
        </p>
        <SeleccionarZona />
      </div>
    </div>
  );
}

export default MultiZona;
