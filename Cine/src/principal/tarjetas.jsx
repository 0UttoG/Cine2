import React from "react";
import Targeta from "./Targeta";
import "./Targeta.css";

function Tarjeta() {
  // Función para manejar el clic en una tarjeta
  const handleClick = (titulo) => {
    alert(`¡Has clickeado la tarjeta de "${titulo}"!`);
  };

  return (
    <div className="contenedor-tarjetas">
      <Targeta
        id="1"
        imagen="/peliculas/peli1.png"
        titulo="Anora"
        descripcion="Mayores de 18 años"
        tiempo="139 minutos"
        genero="Drama, Comedia"
        reparto="Karren Karagullan, Mikey Madison, Mark Eidelshtein, Paul Weissman"
        director="Sean Baker"
        fechaEstreno="2025-01-23"
        tituloOriginal="Anora Sub"
        restriccionesEdad="Mayores de 18 años"
        formatoExhibicion="2D | VIP | SUBTITLE"
        informacion= "alhshdfkadhfañsfe fisjrfsjknfña eu rhf"
        onClick={() => handleClick("Anora")} // Pasamos el título como argumento
      />
      <Targeta
        id="2"
        imagen="/peliculas/peli2.png"
        titulo="Atentado en Madrid Esp"
        descripcion="Mayores de 15 años"
        tiempo="106 minutos"
        genero="Acción, Thriller"
        reparto="Actor 1, Actor 2, Actor 3"
        director="Director 2"
        fechaEstreno="2024-05-15"
        tituloOriginal="Atentado en Madrid"
        restriccionesEdad="Mayores de 15 años"
        formatoExhibicion="2D | SUBTITLE"
        onClick={() => handleClick("Atentado en Madrid Esp")}
      />
      <Targeta
        id="3"
        imagen="/peliculas/peli3.png"
        titulo="Blanca Nieves"
        descripcion="A-Todo Publico"
        tiempo="110 minutos"
        genero="Animación, Aventura"
        reparto="Actor 4, Actor 5, Actor 6"
        director="Director 3"
        fechaEstreno="2023-12-20"
        tituloOriginal="Blanca Nieves"
        restriccionesEdad="Apto para todo público"
        formatoExhibicion="2D | VIP"
        onClick={() => handleClick("Blanca Nieves")}
      />
    </div>
  );
}

export default Tarjeta;


