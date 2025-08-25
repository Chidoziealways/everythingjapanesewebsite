import React from 'react'
import './Gallery.css'
import screenshot1 from '../assets/screenshot1.png'
import screenshot2 from '../assets/screenshot2.png'

const Gallery: React.FC = () => {
    const images = [screenshot1, screenshot2] // add more screenshots here

    return (
        <section className="gallery" id="gallery">
            <h2>Mod Gallery</h2>
            <div className="gallery-grid">
                {images.map((img, i) => (
                    <div className="gallery-item" key={i}>
                        <img src={img} alt={`Screenshot ${i + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
