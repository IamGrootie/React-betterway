import React from 'react'
import './slider.css'
import leftArrow from '../images/left-arrow.svg'
import rightArrow from '../images/right-arrow.svg'

export default function btnSlider({direction, moveSlide}) {
    return (
        <button
            onClick={moveSlide}
            className= {`btn--slide ${direction === "next" ? "next" : "prev"}`}
        >
            <img 
                src={direction === "next" ? rightArrow : leftArrow}
                alt="arrows"
            />
        </button>
    )
}
