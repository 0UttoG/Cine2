import React, { useState } from "react";
import "./Principal.css";
import MenuPrincipal from "../principal/Menuprincipal";
import "./Targeta.css";
import Tarjetas from "./tarjetas";
import TarjetasFijas from "./TarjetasFijas";
import Footer from "./Footer";
import Proximos from "./proximos"

function Principal({ selectedCine, setSelectedCine }) {
  const [selectedSpan, setSelectedSpan] = useState("pelicula");

  // Función para manejar la selección de una opción
  const handleOptionClick = (option, event) => {
    event.preventDefault();
    setSelectedCine(option); // Actualiza el estado en App.jsx
    console.log("Cine seleccionado:", option);
  };

  return (
    <>
      <div className="Menu2">
        <MenuPrincipal setSelectedSpan={setSelectedSpan} selectedSpan={selectedSpan} />

        {/* Mostrar las tarjetas normales si está seleccionada "pelicula" */}
        {selectedSpan === "pelicula" && (
          <div className="contenedor-tarjetas1">
            <Tarjetas />
          </div>
        )}

        {/* Mostrar las tarjetas fijas si está seleccionada "cine" */}
        {selectedSpan === "cine" && (
          <div className="contenedor-tarjetas-fijas">
            <TarjetasFijas onSelect={handleOptionClick} /> {/* Pasa la función handleOptionClick */}
          </div>
        )}
         {selectedSpan === "proximamente" && (
          <div className="contenedor-tarjetas1">
            <Proximos onSelect={handleOptionClick} /> {/* Pasa la función handleOptionClick */}
          </div>
        )}


      </div>
      <Footer />
    </>
  );
}

export default Principal;
