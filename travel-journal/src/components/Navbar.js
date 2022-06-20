import React from "react"
import logo from "../images/logo.svg"

export default function Navbar() {
    return (
        <nav className="navBar">
            <img src={logo} className="navBar--logo" alt="logo"/>
            <h2 className="journal--title">my travel journal.</h2>
        </nav>
    )
}
