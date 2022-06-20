import React from "react"
import pin from "../images/pin.svg"

export default function Body(props) {
    return (
        <div className="body">
            <img src={props.imageUrl} alt="Image of the journal" className="front--img"/>
            <div className="text--body">
                <section className="location">
                    <img src={pin} alt="pin" className="pin"/>
                    <h3 className="caps">{props.location}</h3>
                    <p><a href={props.googleMapsUrl} className="link--location">View on Google Maps</a></p>
                </section>
                <h1>{props.title}</h1>
                <h3 className="dates">{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

