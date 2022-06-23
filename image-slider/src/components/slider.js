import React from "react"
import './slider.css'
import BtnSlider from './BtnSlider.js'
import dataSlider from './dataSlider'

export default function Slider() {
    const[currentSlide, setCurrentSlide] = React.useState(1)

    function nextSlide() {
        if(currentSlide !== dataSlider.length){
            setCurrentSlide(currentSlide + 1)
        } 
        else if (currentSlide === dataSlider.length){
            setCurrentSlide(1)
        }
    }

    function prevSlide() {
        if(currentSlide !== 1){
            setCurrentSlide(currentSlide - 1)
        }
        else if (currentSlide === 1){
            setCurrentSlide(dataSlider.length)
        }
    }
    
    return (
        <div className='container--slider'>
            <h1 className="title">My Italy trip 🇮🇹</h1>
            {dataSlider.map((obj, index) => {
                return (
                    <div 
                        className={currentSlide === index +1 ? 'slide active--anim' : 'slide'}
                        key={obj.id}
                    >
                        <img 
                            src={`/images/img${index+1}.jpg`} // If it would be published --> src={process.env.PUBLIC_URL+`/images/img${index+1}`}
                            alt={obj.title}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction='next'/>
            <BtnSlider moveSlide={prevSlide} direction='prev'/>
            <div
                className="container--dots" 
            >
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => setCurrentSlide(index + 1)}
                    className={currentSlide === index+1 ? "dot active" : "dot"}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}
