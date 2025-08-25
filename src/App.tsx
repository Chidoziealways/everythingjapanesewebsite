import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import DownloadCard from "./components/DownloadCard";
import About from "./About.tsx";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route
                    path="/gallery"
                    element={
                        <>
                            <Banner
                                title="EverythingJapanese Mod"
                                subtitle="The ultimate Minecraft mod with Japanese flair!"
                            />
                            <Gallery />
                        </>
                    }
                />
                <Route
                    path="/downloads"
                    element={
                    <>
                        <Banner
                            title="EverythingJapanese Mod"
                            subtitle="The ultimate Minecraft mod with Japanese flair!"
                        />
                        <section id="downloads" className="download-section">
                            <DownloadCard
                                title="CurseForge Download"
                                description="Available for Players on CurseForge!"
                                link="https://www.curseforge.com/minecraft/mc-mods/everything-japanese"
                            />
                            <DownloadCard
                                title="Modrinth Download"
                                description="Available for Players on Modrinth!"
                                link="https://modrinth.com/mod/everything-japanese"
                            />
                        </section>
                    </>
                    }
                />
                <Route path="/" element={
                    <>
                    <Banner
                        title="EverythingJapanese Mod"
                        subtitle="The ultimate Minecraft mod with Japanese flair!"
                    />
                    <About />
                    </>
                } />
            </Routes>
        </>
    );
}

export default App;
