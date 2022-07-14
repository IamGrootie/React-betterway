import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"
import Home from "./components/Home"
import Notes from "./components/Notes"
import Contact from "./components/Contact"

//import { data } from "./data"


export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='notes' element={<Notes/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='*' element={<div>Page not found</div>}/>
            </Routes>
        </div>
    )
}
