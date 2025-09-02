import React from 'react';

const QuestRegistry: React.FC = () => {
    return (
        <div>
            <code>ModRegistries.QUEST</code> – for custom Quests.
            This is a <strong>Datapack Registry</strong>, and it takes an
            <ul>
                <li>id (<code>ResourceLocation</code>)</li>
                <li>title (<code>Component</code>)</li>
                <li>description (<code>Component</code>)</li>
                <li>stages (a list of <code>QuestStages</code>)</li>
                <li>rewards (a list of <code>QuestRewards</code>)</li>
                <li>isRepeatable (<code>Boolean</code>)</li>
                <li>dependency (optional) (<code>ResourceLocation</code>)</li>
            </ul>
            QuestStages are written in this format:
            <p><code>QuestStage(Component.literal("Name"), "conditiontype:namespace:path")</code>.</p>
            and QuestRewards:
            <p><pre>
                <code>
                    {`QuestReward("rewardtype", buildJsonObject {addProperty("property", value)})`}
                </code>
            </pre>
            </p>
        </div>
    )
}

export default QuestRegistry;