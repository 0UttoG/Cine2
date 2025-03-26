import React from "react";
import Targeta from "./Targeta";
import "./Targeta.css";

function proximos() {
  return (
    <div className="contenedor-tarjetas">
      <Targeta
        imagen="/peliculas/peli7.png"
        titulo="Mickey 17"
        descripcion="Mayores de 15 años"
        tiempo="137 minutos"
      />
    </div>
  );
}

export default proximos;
