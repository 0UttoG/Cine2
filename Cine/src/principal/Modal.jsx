import React, { useState } from "react";
import "./Modal.css"; // Archivo de estilos para el modal

function Modal({ onClose, onConfirm }) {
  // Estado para manejar los asientos seleccionados
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);

  // Función para manejar la selección de asientos
  const handleSeleccionAsiento = (asiento) => {
    if (asientosSeleccionados.includes(asiento)) {
      // Si el asiento ya está seleccionado, lo quitamos
      setAsientosSeleccionados(asientosSeleccionados.filter((a) => a !== asiento));
    } else {
      // Si no está seleccionado, lo agregamos
      setAsientosSeleccionados([...asientosSeleccionados, asiento]);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Selecciona tus asientos</h2>
        <div className="asientos-container">
          {/* Generamos 50 asientos (puedes ajustar este número) */}
          {[...Array(50)].map((_, index) => (
            <div
              key={index}
              className={`asiento ${
                asientosSeleccionados.includes(index) ? "selected" : ""
              }`}
              onClick={() => handleSeleccionAsiento(index)}
            >
              {index + 1} {/* Mostramos el número del asiento */}
            </div>
          ))}
        </div>
        <div className="modal-buttons">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={() => onConfirm(asientosSeleccionados)}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
