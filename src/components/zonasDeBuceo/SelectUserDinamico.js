const SelectUserDinamico = (props) => {
  return <h1>{props.nombre}</h1>;
};

export default SelectUserDinamico;

// const SelectUserDinamico = (props) => {
//   return (
//     <section className="dive">
//       <div className="bloque1">
//         <div className="video" id="miImagen">
//           <img src={props.imagen} alt="Blue Hole" />
//         </div>
//         <div className="contenido">
//           <h2>{props.nombre}</h2>
//           <p>{props.descripcion}</p>
//         </div>
//       </div>
//       <div>
//         <h2 id="bucear">
//           BUCEAR
//           <br />
//           EN LANZAROTE &nbsp;&nbsp;&nbsp;&nbsp;
//         </h2>
//       </div>
//       <div className="bloque2">
//         <div className="datos">
//           <div>
//             <i className="fas fa-star"></i>
//             <p>{props.lugar}</p>
//           </div>
//           <div>
//             <i className="fas fa-user"></i>
//             <p>{props.nivel}</p>
//           </div>
//           <div>
//             <i className="fas fa-sort-amount-down"></i>
//             <p>{props.profundidad}</p>
//           </div>
//           <div>
//             <i className="fas fa-flag"></i>
//             <p>{props.entrada}</p>
//           </div>
//           <div>
//             <i className="fas fa-history"></i>
//             <p>{props.horario}</p>
//           </div>
//           <div>
//             <i className="fas fa-certificate"></i>
//             <p>{props.temperatura}</p>
//           </div>
//         </div>
//         <div className="mapa" id="miMapa">
//           <img src={props.mapa} alt="Mapa" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SelectUserDinamico;
