import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import PhotoGallery from "./components/PhotoGallery.tsx";
import DownloadCard from "./components/DownloadCard";
import About from "./About.tsx";
import Commands from "./components/Commands.tsx";
import Addons from "./components/addons/Addons.tsx";
import VideoGallery from "./components/VideoGallery.tsx";
import OpenSource from "./components/OpenSource.tsx";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route
                    path="/photogallery"
                    element={
                        <>
                            <Banner
                                title="EverythingJapanese Mod"
                                subtitle="The ultimate Minecraft mod with Japanese flair!"
                            />
                            <PhotoGallery />
                        </>
                    }
                />
                <Route
                    path="/videogallery"
                    element={
                        <>
                            <Banner
                                title="EverythingJapanese Mod"
                                subtitle="The ultimate Minecraft mod with Japanese flair!"
                            />
                            <VideoGallery />
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
                        <OpenSource />
                    </>
                } />
                <Route path="/commands" element={
                    <>
                        <Commands />
                    </>
                } />
                <Route path="/addons" element={
                    <>
                        <Addons />
                    </>
                } />
            </Routes>
        </>
    );
}

export default App;
