import React from "react"
import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navBar">
            <img src={airbnbLogo} className="logo"/>
        </nav>
    )
}
