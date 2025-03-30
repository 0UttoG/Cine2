import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
    const slides = [
        { 
            image: "imagen1.jpg",
            video: "/videos/Blancanieves.mp4" // Ruta correcta desde public
        
        },
        { 
            image: "imagen2.jpg",
            
            // Sin video
        },
        { 
            image: "imagen3.jpg"
            // Sin video
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    const [videoToPlay, setVideoToPlay] = useState("");

    // Transición automática más lenta (20 segundos)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 20000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleSlideClick = (slide) => {
        if (slide.video) {
            setVideoToPlay(slide.video);
            setShowVideo(true);
        }
    };

    return (
        <div className="slider-container">
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={`slide-wrapper ${index === currentIndex ? 'active' : ''} ${slide.video ? 'has-video' : ''}`}
                    onClick={() => handleSlideClick(slide)}
                >
                    <img 
                        src={slide.image} 
                        alt={`Slide ${index}`} 
                        className="slider-image"
                    />
                    {slide.video && <div className="play-indicator">▶</div>}
                </div>
            ))}

            {showVideo && videoToPlay && (
                <div className="trailer-modal">
                    <div className="modal-content">
                        <button 
                            className="close-modal" 
                            onClick={() => {
                                setShowVideo(false);
                                setVideoToPlay("");
                            }}
                        >
                            ✕
                        </button>
                        <video 
                            controls 
                            autoPlay 
                            key={videoToPlay}
                            style={{ width: "100%", height: "auto" }}
                        >
                            <source src={videoToPlay} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slider;