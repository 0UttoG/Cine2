import React, { useState, useEffect } from "react";
import "./Slider.css"; // Archivo CSS para estilos del slider

const Slider = () => {
    // Array de imágenes (puedes reemplazar estas rutas con las tuyas)
    const images = [
        "imagen1.jpg",
        "imagen2.jpg",
        "imagen3.jpg",
        "imagen4.png",
        "imagen5.jpg",
        "imagen7.jpg",  
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para la imagen actual

    // Efecto para la transición automática
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000); // Cambia la imagen cada 5 segundos (5000 ms)

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slider-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`slider-image ${
                        index === currentImageIndex ? "active" : ""
                    }`}
                />
            ))}
        </div>
    );
};

export default Slider;