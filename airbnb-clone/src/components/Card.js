import React from "react"
import Star from "../images/Star.svg"

export default function Card(props) {
    return (
        <div className="card">
            {props.openSpots>0 ? <p className="card--spots">Online</p> : <p className="card--spots">SOLD OUT</p>}
            <img src={`../images/${props.coverImg}`} className="profile--pic"/>
            <div className="card--details">
                <img src={Star} className="card--star"/>
                <p>{props.stats.rating}</p>
                <p className="card--gray"> ({props.stats.reviewCount}) • {props.location}</p>
            </div>
            <p className="card--description">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}