import "./About.css"

const About: React.FC = () => {
    return (
        <div className="about">
            <h1>What is EverythingJapanese?</h1>
            <p> EverythingJapanese is a mod for the Java Edition of Minecraft created in August 2024, but first published in September and has since been gaining popularity in the MC Modding Community </p>
            <p>
                This mod’s purpose is to bring Japanese-themed items... like
                <span className="jp"> 術</span> (Jutsu),
                <span className="jp"> お守り</span> (Talisman),
                and <span className="jp"> 刀</span> (The Katana)...
            </p>
            <h4>This mod was available for Minecraft Forge before being ported to NeoForge at version 1.6.0 for MC Version 1.21.8 and will continue as NeoForge from now henceforth.</h4>
            <h6>Compatibility for Minecraft Forge will remain on sites, and it supports mc versions 1.21-1.21.1 to 1.21.8</h6>
        </div>
    )
}

export default About