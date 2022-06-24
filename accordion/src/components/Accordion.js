import React from 'react'
import Chevron from './Chevron'
import "./Accordion.css"

export default function Accordion(props) {
    const [active, setActive] = React.useState("")
    const [height, setHeight] = React.useState("0px")
    const [isOpen, setIsOpen] = React.useState("accordion--icon")

    const content = React.useRef(null)

    function toggle() {
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setIsOpen(active === "active" ? "accordion--icon" : "accordion--icon open")
    }

  return (
    <div className='accordion--section'>
        <button 
            className={`accordion ${active}`}
            onClick={toggle}
        >
            <p className='accordion--title'>{props.title}</p>
            <Chevron 
                className={`accordion--icon ${isOpen}`}
                width={10}
                fill={"#777"}
            />
        </button>

        <div
            ref={content}
            style={{maxHeight: `${height}`}} 
            className='accordion--content'>
            <div 
                className='accordion--text'
                dangerouslySetInnerHTML={{ __html: props.content}}
            >    
            </div>
        </div>
    </div>
  )
}
