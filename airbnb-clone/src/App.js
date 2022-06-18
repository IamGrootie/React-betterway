import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"
// import img from `".../images/${data.img}"`


export default function App() {
    const dataElements = data.map(item => {
        return (
        <Card  
            key={item.id}
            {...item} //or item = {item} but it requires to call props.item
            // spots={item.openSpots}
            // img={item.coverImg} 
            // rating={item.stats.rating} 
            // reviewCount={item.stats.reviewCount} 
            // location={item.location} 
            // title={item.title} 
            // price={item.price}
            />)
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {dataElements}
            </section>
        </div>
    )
}