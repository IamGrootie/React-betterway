import React from "react"
import TwitterIcon from '../images/TwitterIcon.svg'
import FacebookIcon from '../images/FacebookIcon.svg'
import InstagramIcon from '../images/InstagramIcon.svg'
import GitHubIcon from '../images/GitHubIcon.svg'

export default function footer(){ 
    return(
        <div className="footer">
            <img src={TwitterIcon} />
            <img src={FacebookIcon} />
            <img src={InstagramIcon} />
            <img src={GitHubIcon} />
        </div>
    )
}