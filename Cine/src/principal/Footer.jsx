import React from "react";
import "./Footer.css"; // Importa los estilos del footer desde un archivo CSS externo.

function Footer() {
  return (
    // Estructura principal del footer con la clase "footer"
    <footer className="footer"> 

      {/* Primera sección: Cartelera */}
      <div className="footer-section">
        <h3>CARTELERA</h3>
        {/* Enlaces o textos relacionados con la cartelera y aplicaciones */}
        <span>Preventas</span>
        <span>Muestras y festivales</span>
        <span>Google Play</span>
        <span>Apple Store</span>
      </div>

      {/* Segunda sección: Información sobre la empresa */}
      <div className="footer-section">
        <h3>¿QUIÉNES SOMOS?</h3>
        <span>Próximas Aperturas</span>
      </div>

      {/* Tercera sección: Información legal */}
      <div className="footer-section">
        <h3>LEGALES</h3>
        {/* Enlaces a términos y condiciones y aviso de privacidad */}
        <span>Términos y condiciones</span>
        <span>Aviso de privacidad</span>
      </div>

      {/* Cuarta sección: Formulario de contacto */}
      <div className="footer-contact">
        <h3>CONTACTO</h3>
        <span>Correo electrónico</span>
        {/* Campo de entrada para el correo electrónico */}
        <input type="text" placeholder="Ingresa tu correo" />
        
        <span>Mensaje</span>
        {/* Campo de entrada para el mensaje */}
        <input type="text" placeholder="Escribe tu mensaje" />
      </div>
      
    </footer>
  ) ;
}

export default Footer; // Exporta el componente Footer para su uso en otras partes de la aplicación.
