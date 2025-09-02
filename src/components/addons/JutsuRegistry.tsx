import React from "react";

const JutsuRegistry: React.FC = () => {
    return (
        <li>
            <div>
                <code>ModRegistries.JUTSU</code> – for custom Jutsu.
                This is a <strong>Runtime Registry</strong>, so you register into it using a Deferred Register.
            </div>
            <div>
                All Jutsu must have a class extending the base <code>Jutsu</code> class with these parameters:
                <ul>
                    <li><code>id</code> (<code>ResourceLocation</code>)</li>
                    <li><code>name</code> (<code>String</code>)</li>
                    <li><code>chakraCost</code> (<code>Float</code>)</li>
                    <li><code>powerLevel</code> (<code>Float</code>)</li>
                    <li><code>type</code> (<code>JutsuType</code> – <code>NINJUTSU</code>, <code>GENJUTSU</code>, <code>TAIJUTSU</code>, <code>HINOJUTSU</code>, <code>KUKINOJUTSU</code>, <code>TSUCHINOJUTSU</code>)</li>
                </ul>
            </div>
            <div>
                Each Jutsu must implement a <code>cast</code> method that takes a <code>ServerPlayer</code> and returns a <code>Boolean</code>.
            </div>
        </li>
    );
};

export default JutsuRegistry;
