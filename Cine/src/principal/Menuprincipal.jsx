import React from "react";
import "./Principal.css";

function MenuPrincipal({ setSelectedSpan, selectedSpan }) {
  return (
    <div className="hola">
      <span
        className={`Selecionar1 ${selectedSpan === "pelicula" ? "selected" : ""}`}
        onClick={() => setSelectedSpan("pelicula")}
      >
        Elegir película
      </span>
      <span
        className={`selecionar2 ${selectedSpan === "cine" ? "selected" : ""}`}
        onClick={() => setSelectedSpan("cine")}
      >
        Seleccionar un cine
      </span>
      <span
        className={`selecionar3 ${selectedSpan === "proximamente" ? "selected" : ""}`}
        onClick={() => setSelectedSpan("proximamente")}
      >
        Próximamente
      </span>
    </div>
  );
}

export default MenuPrincipal;

