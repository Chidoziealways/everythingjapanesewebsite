import React from 'react'
import './Banner.css'

interface BannerProps {
    title: string
    subtitle: string
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
    return (
        <header className="banner">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

export default Banner
