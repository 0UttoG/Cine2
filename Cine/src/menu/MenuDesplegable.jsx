import { useState, useRef, useEffect } from "react";
import Localizador from "./Localizador";
import TarjetaMenu from "./TarjetaMenu";
import "./MenuDesplegable.css";

function MenuDesplegable({ selectedCine, setSelectedCine }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option, event) => {
    event.preventDefault();
    setSelectedCine(option); // Actualiza el estado en App.jsx
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="menu-container">
      {/* Contenedor principal con el evento onClick */}
      <div className="juntos" onClick={toggleMenu} style={{ cursor: "pointer" }}>
        <div className="localizador">
          <Localizador />
        </div>
        <div className="selected-option">
          {selectedCine ? (
            <span>{selectedCine}</span> // Muestra el cine seleccionado
          ) : (
            <span>Selecciona un cine</span> // Muestra "Selecciona un cine" si no hay selección
          )}
        </div>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          <TarjetaMenu
            titulo="Cinépolis Galerias Escalon VIP"
            descripcion="Colonia Escalon Centro Comercial Galerias, Paseo General Escalon #3700, San Salvador"
            opciones={["20", "DOB", "VIP", "SUBTITLE"]}
            onSelect={handleOptionClick}
          />
          <TarjetaMenu
            titulo="Cinépolis Multiplaza Panamericana"
            descripcion="Centro Comercial Multiplaza, Carretera Panamericana, 3er nivel, La Libertad"
            opciones={["JUNIOR", "2D", "DOB", "SUBTITLE"]}
            onSelect={handleOptionClick}
          />
          <TarjetaMenu
            titulo="Cinépolis Metrocentro Santa Ana"
            descripcion="Metrocentro Santa Ana, Av. Independencia Sur, LOC 22, Santa Ana"
            opciones={["20", "DOB", "SUBTITLE"]}
            onSelect={handleOptionClick}
          />
          <TarjetaMenu
            titulo="Cinépolis Galerias Escalon"
            descripcion="Colonia Escalon Centro Comercial Galerias, Paseo General Escalon #3700, San Salvador"
            opciones={["20", "DOB", "SUBTITLE"]}
            onSelect={handleOptionClick}
          />
        </div>
      )}
    </div>
  );
}

export default MenuDesplegable;
