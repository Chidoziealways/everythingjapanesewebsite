// src/components/OpenSource.tsx
import React from "react";
import "./OpenSource.css";

const OpenSource: React.FC = () => {
    return (
        <section className="open-source" id="open-source">
            <h2>Open-Source & Contributions</h2>
            <p>
                EverythingJapanese is fully open-source under the MIT License.
                You can <a href="https://github.com/Chidoziealways/My_Forge_1.21.1_Everything_Japanese" target="_blank" rel="noopener noreferrer">view the repository on GitHub</a>, fork it, or submit pull requests.
            </p>
            <p>
                Please check out <a href="https://github.com/Chidoziealways/My_Forge_1.21.1_Everything_Japanese/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a> and <a href="https://github.com/Chidoziealways/My_Forge_1.21.1_Everything_Japanese/blob/master/CODE_OF_CONDUCT.md">CODE_OF_CONDUCT.md</a> for guidelines before contributing.
            </p>
        </section>
    )
}

export default OpenSource;
