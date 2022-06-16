import React from "react"
import IDpic from '../images/ID_pic.svg'
import ButtonEmail from "../images/ButtonEmail.svg"
import ButtonLinkedin from '../images/ButtonLinkedin.svg'

export default function info(){
   return(
        <div>
            <img src={IDpic}/>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <p className="info-site"><a href="laurasmith.website">laurasmith.website</a></p>
            <div className="info-links">
                <img src={ButtonEmail} />
                <img src={ButtonLinkedin}/>
            </div>
        </div>
   )
}