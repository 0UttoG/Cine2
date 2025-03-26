import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./Targeta.css";

function Targeta({
  imagen,
  titulo,
  descripcion,
  tiempo,
  id,
  genero,
  reparto,
  director,
  fechaEstreno,
  tituloOriginal,
  restriccionesEdad,
  formatoExhibicion,
  informacion,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pelicula/${id}`, {
      state: {
        imagen,
        titulo,
        descripcion,
        tiempo,
        genero,
        reparto,
        director,
        fechaEstreno,
        tituloOriginal,
        restriccionesEdad,
        formatoExhibicion,
        informacion,
      }, // Pasamos todos los datos necesarios como parte del estado
    });
  };

  return (
    <div className="targeta" onClick={handleClick}>
      <img className="ima1" src={imagen} alt={titulo} />
      <div className="contenido">
        <div className="titulo1">{titulo}</div>
        <div className="info">
          <span className="descripcion">{descripcion}</span>
          <div className="divisor"></div>
          <span className="clasificacion-tiempo">{tiempo}</span>
          

        </div>
      </div>
    </div>
  );
}

export default Targeta;
