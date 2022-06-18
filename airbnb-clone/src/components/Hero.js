import React from "react"
import photoGrid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero--main">
            <img src={photoGrid} className="grid"/>
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving
                home.
            </p>
        </div>
    )
}