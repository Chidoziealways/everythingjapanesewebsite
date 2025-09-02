import React from 'react';
import './Addons.css';
import JutsuRegistry from "./JutsuRegistry.tsx";
import QuestRegistry from "./QuestRegistry.tsx";
import KanjiRegistry from "./KanjiRegistry.tsx";

const Addons: React.FC = () => {
    return (
        <div className="addons">
            <h1 className="addons-header">Mod Addons</h1>
            <p>
                EverythingJapanese is open for addons! You can register your own custom content using our registries:
            </p>
            <ul>
                <JutsuRegistry />
                <li><QuestRegistry/></li>
                <li><KanjiRegistry/></li>
            </ul>
            <p>
                Simply import <code>ModRegistries</code> in your addon mod and use the registries to add new content seamlessly.
            </p>
        </div>
    )
}

export default Addons;
