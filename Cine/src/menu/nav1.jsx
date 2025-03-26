import React from 'react';
import MenuDesplegable from './MenuDesplegable';
import './nav1.css'; // Asegúrate de tener un archivo CSS para los estilos de Nav1
import Logo from './logo';

function Nav1({ selectedCine, setSelectedCine }) {
  return (
    <div className="nav1-container">
      {/* Barra superior con el logo y el Localizador */}
     
        <div className="logo">
          <Logo />
          
        </div>
        <div className="localizador-container">
          <MenuDesplegable selectedCine={selectedCine} setSelectedCine={setSelectedCine} />
        </div>
      

      {/* Otros componentes de Nav1 (si los hay) */}
    </div>
  );
}

export default Nav1;
