import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Importa useLocation
import Nav1 from './menu/nav1';
import Slider from './anuncios/Slider';
import Principal from './principal/principal';
import DetallePelicula from '../src/principal/redirecion/DetallesPelicula';


function App() {
  const [selectedCine, setSelectedCine] = useState("");

  return (
    <Router>
      <div className='elpapi'>
        <Nav1 selectedCine={selectedCine} setSelectedCine={setSelectedCine} />

        {/* Usamos el componente AppContent para manejar la lógica del Slider */}
        <AppContent selectedCine={selectedCine} setSelectedCine={setSelectedCine} />
      </div>
    </Router>
  );
}

// Componente adicional para manejar la lógica del Slider
function AppContent({ selectedCine, setSelectedCine }) {
  const location = useLocation(); // Usamos useLocation para obtener la ruta actual

  return (
    <>
      {/* Renderizamos el Slider solo si estamos en la ruta principal */}
      {location.pathname === "/" && <Slider />}

      <Routes>
        <Route
          path="/"
          element={
            <Principal selectedCine={selectedCine} setSelectedCine={setSelectedCine} />
          }
        />
        <Route
          path="/pelicula/:id"
          element={
            <DetallePelicula
              selectedCine={selectedCine}
              setSelectedCine={setSelectedCine}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
