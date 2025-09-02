import React from 'react';

const KanjiRegistry: React.FC = () => {
    return (
        <div>
            <code>ModRegistries.KANJI</code> – for custom Kanji Types.
            This is a <strong>Datapack Registry</strong>. It takes
            <ul>
                <li>an id (<code>String</code>)</li>
                <li>a blockEffectId (<code>ResourceLocation</code>) which MUST point to a LUA Script in <code>data/&lt;namespace&gt;/scripts/effects/block</code></li>
                <li>an entityEffectId (<code>ResourceLocation</code>) which MUST point to a LUA Script in<code>data/&lt;namespace&gt;/scripts/effects/entity</code></li>
                <li>an overlay (<code>ResourceLocation</code>) which points to an item model</li>
            </ul>
            <p>
                <strong>Kanji Effects are written in Lua.</strong>, BlockEffect Scripts must return a function that takes these params: <code>function(level, pos, player)</code>
                where level is a Level, pos is a BlockPos and player is a Player. EntityEffect Scripts must return a function that takes these params: <code>function(level, pos, player, target)</code>
                the following are the methods that can be called in the lua scripts:
                <ul>
                    <li>Any Player methods</li>
                    <li>Any Level Methods</li>
                    <li>Any BlockPos Methods</li>
                    <li>Any LivingEntity Methods</li>
                </ul>
                To place blocks, spawn entities, give items, etc, You must NOT do luajava.bindClass("fully qualified class name"), as that touches Minecraft Registries on a Thread where they have <strong>not yet</strong> been registered. and so to get a block, to use, you use this global method:
                <code>getBlock("registryname")</code>, to summon entities, you use this method: <code>spawnEntity(level, pos, "registryname")</code>
            </p>
        </div>
    )
}

export default KanjiRegistry;
