import React from "react";

function TarjetaMenu({ titulo, descripcion, opciones, onSelect }) {
    return (
        <div className="card-content">
            <a href="/" onClick={(e) => onSelect(titulo, e)} className="card-link">
                <h3 className="card-title">{titulo}</h3>
                <p className="card-description">{descripcion}</p>
                <div className="inferiores">
                    <span className="camarita">
                        <img src="/ImgMenu/camara.svg" id="camara" alt="Cámara" />
                    </span>
                    {opciones.map((opcion, index) => (
                        <span key={index} className="info-item">{opcion}</span>
                    ))}
                </div>
            </a>
        </div>
    );
}

export default TarjetaMenu;
