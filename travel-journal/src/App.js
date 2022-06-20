import React from "react"
import data from "./data.js"
import Navbar from "./components/Navbar"
import Body from "./components/Body.js"



export default function App() {
    const dataElements = data.map( item => {
        return (
          < Body
            key={item.id}
            {...item} 
          /> 
        )
    })

    return (
        <div>
            <Navbar/>
            <section className="">
                {dataElements}
            </section>
        </div>
    )
}