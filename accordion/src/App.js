import React from "react"
import Accordion from "./components/Accordion.js"
import logoDiscord from "./images/discordLogo.png"

export default function App() {
    return (
        <div className="App">
            <Accordion
              title="Sort Home Feed By Default"
              content="
                <p>Default</p>
                </br>
                <p>Featured</p>
                </br>
                <p>Latest</p>
                </br>
                <p>Following</p>
                </br>
                <p>Bookmarks</p>
              "
            />
            <Accordion
              className = "accordion--section"
              title="More Things to Do"
              content="
              <table>
                <tr>
                  <td>✍️ Write a post </td>
                  <td>💵 Build a SAAS </td>
                </tr>
                <tr>
                  <td>🎨 Design a Site </td>
                  <td>🙋 Ask a Question </td>
                </tr>
                <tr>
                  <td>🚀 Ninja training </td>
                  <td>🍿 Watch Videos  </td>
                </tr>
                <tr>
                  <td>👓 Read Tutorials </td>
                  <td>⭐ Upgrade to Pro  </td>
                </tr>
              </table>
              "
            />
            <div className="discord--section">
              <img src={logoDiscord} alt="Discord Logo" className="logo--discord"/>
              <h1 className="discord--title">DevDojo Discord</h1>
              <p className="discord--paragraph">Join the DevDojo Community Discord server and connect with other like minded developers!</p>
            </div>
        </div>
    )
}