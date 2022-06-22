import React from "react"
import troll from "../images/TrollFace.svg"

export default function Navbar() {
    return (
        <nav className="navBar">
            <div className="nav--title">
                <img src={troll} alt="troll" className="troll--img"/>
                <h1 className="main-title">Meme Generator</h1>
            </div>
            <div>
                <h2 className="nav-course">React Course - Project 3</h2>
            </div>
        </nav>
    )
}
