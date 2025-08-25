import React from 'react'
import './DownloadCard.css'

interface DownloadCardProps {
    title: string
    description: string
    link: string
}

const DownloadCard: React.FC<DownloadCardProps> = ({ title, description, link }) => {
    return (
        <div className="download-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Download
            </a>
        </div>
    )
}

export default DownloadCard
