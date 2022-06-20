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

        // <div className="card">
        //     {props.openSpots>0 ? <p className="card--spots">Online</p> : <p className="card--spots">SOLD OUT</p>}
        //     <img src={`../images/${props.coverImg}`} className="profile--pic"/>
        //     <div className="card--details">
        //         <img src={Star} className="card--star"/>
        //         <p>{props.stats.rating}</p>
        //         <p className="card--gray"> ({props.stats.reviewCount}) • {props.location}</p>
        //     </div>
        //     <p className="card--description">{props.title}</p>
        //     <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        // </div>