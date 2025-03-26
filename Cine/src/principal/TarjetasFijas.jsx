import React from "react";
import TarjetaMenu from "../menu/TarjetaMenu";
import "./Targeta.css";

const cines = [
  {
    titulo: "Cinépolis Galerias Escalon VIP",
    descripcion: "Colonia Escalon Centro Comercial Galerias, San Salvador",
    opciones: ["20", "DOB", "VIP", "SUBTITLE"],
  },
  {
    titulo: "Cinépolis Multiplaza Panamericana",
    descripcion: "Centro Comercial Multiplaza, La Libertad",
    opciones: ["JUNIOR", "2D", "DOB", "SUBTITLE"],
  },
  {
    titulo: "Cinépolis Metrocentro Santa Ana",
    descripcion: "Metrocentro Santa Ana, Av. Independencia Sur",
    opciones: ["20", "DOB", "SUBTITLE"],
  },
  {
    titulo: "Cinépolis Galerias Escalon",
    descripcion: "Colonia Escalon Centro Comercial Galerias, San Salvador",
    opciones: ["20", "DOB", "SUBTITLE"],
  },
];

function TarjetasFijas({ onSelect }) {
  return (
    <div className="tarjetas-fijas-container">
      {cines.map((cine, index) => (
        <TarjetaMenu
          key={index}
          titulo={cine.titulo}
          descripcion={cine.descripcion}
          opciones={cine.opciones}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default TarjetasFijas;
