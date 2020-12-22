const SelectUser = () => {
  return (
    <section className="dive">
      <div className="bloque1">
        <div className="video" id="miImagen">
          <img
            src={
              "https://cidlanzarote.com/wp-content/uploads/2017/06/youtube-bluehole.jpg"
            }
            alt="Blue Hole"
          />
        </div>
        <div className="contenido">
          <h2>Blue Hole</h2>
          <p>
            Las dos caras del Blue Hole nos abren las puertas a un rincón de
            Playa Chica que nos enamora irremediablemente.
            <br />
            <br />
            A menudo llegamos a un punto en el que sólo hay que dejar de
            aletear, relajarse y disfrutar del espectáculo de la vida.
            <br />
            Imprescindible.
          </p>
        </div>
      </div>
      <div>
        <h2 id="bucear">
          BUCEAR
          <br />
          EN LANZAROTE &nbsp;&nbsp;&nbsp;&nbsp;
        </h2>
      </div>
      <div className="bloque2">
        <div className="datos">
          <div>
            <i className="fas fa-star"></i>
            <p>Pto. del Carmen</p>
          </div>
          <div>
            <i className="fas fa-user"></i>
            <p>PADI AOWD</p>
          </div>
          <div>
            <i className="fas fa-sort-amount-down"></i>
            <p>30 mts.</p>
          </div>
          <div>
            <i className="fas fa-flag"></i>
            <p>Costa / Shore</p>
          </div>
          <div>
            <i className="fas fa-history"></i>
            <p>09:00 / 22:00</p>
          </div>
          <div>
            <i className="fas fa-certificate"></i>
            <p>17º / 24º</p>
          </div>
        </div>
        <div className="mapa" id="miMapa">
          <img
            src="https://cidlanzarote.com/wp-content/uploads/2017/06/blue_hole-compressor.jpg"
            alt="Mapa"
          />
        </div>
      </div>
    </section>
  );
};

export default SelectUser;
