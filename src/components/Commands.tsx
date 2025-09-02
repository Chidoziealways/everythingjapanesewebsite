import './Commands.css'
import React from "react";

const Commands: React.FC = () => {
  return (
      <div className="commands">
            <h1 className="commands-header"> Commands </h1>
          <h2> Quest Commands </h2>
          <ol>
              <li>
                  <h3>
                      Start Quest Command
                      <p>
                          The Start Quest Command is used to start quests. Its syntax is as follows: <code>/startQuest &lt;id&gt;</code>
                      </p>
                  </h3>
              </li>
              <li>
                  <h3>
                      Finish Quest Command
                      <p>
                          The Finish Quest Command is used to finish quests. It's syntax is the same as the Start Quest Command: <code>/finishQuest &lt;id&gt;</code>
                      </p>
                  </h3>
              </li>
          </ol>
          <h2> Chakra Commands </h2>
          <ol>
              <li>
                  <h3>
                      Set Chakra Command
                      <p>
                          The Set Chakra Command is used to assign any amount of chakra to any player. It's syntax is as follows: <code>/setChakra &lt;target&gt; &lt;amount&gt;</code>
                      </p>
                  </h3>
              </li>
              <li>
                  <h3>
                      Get Chakra Command
                      <p>
                          The Get Chakra Command is used to retrieve the amount of chakra any player has. It's syntax is as follows: <code>/getChakra &lt;target&gt;</code>
                      </p>
                  </h3>
              </li>
          </ol>
      </div>
  )
}

export default Commands;