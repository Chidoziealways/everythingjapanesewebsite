// VideoGallery.tsx
import React from "react";
import "./VideoGallery.css";

// Import all video files in assets/videos
const videos = Object.values(
    import.meta.glob<{
        default: string;
    }>("../assets/videos/*.{mp4,webm}", { eager: true })
).map((mod) => mod.default);

const VideoGallery: React.FC = () => {
    return (
        <section className="video-gallery" id="video-gallery">
            <h2>Mod Video Gallery</h2>
            <div className="video-gallery-grid">
                {videos.map((vid, i) => (
                    <div className="video-gallery-item" key={i}>
                        <video controls>
                            <source src={vid} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoGallery;