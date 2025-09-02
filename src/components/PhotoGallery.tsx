// PhotoGallery.tsx
import React from "react";
import "./PhotoGallery.css";

// Import all image files in assets/photos
const images = Object.values(
    import.meta.glob<{
        default: string;
    }>("../assets/photos/*.{png,jpg,jpeg,gif}", { eager: true })
).map((mod) => mod.default);

const PhotoGallery: React.FC = () => {
    return (
        <section className="gallery" id="gallery">
            <h2>Mod Photo Gallery</h2>
            <div className="gallery-grid">
                {images.map((img, i) => (
                    <div className="gallery-item" key={i}>
                        <img src={img} alt={`Screenshot ${i + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotoGallery;