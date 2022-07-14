import { NavLink } from 'react-router-dom'
import logo from "../images/logo2.png";

export default function NavBar() {
  return (
    <nav className="lateral--nav">
        <img src={logo} alt="logo" className='img-logo'/>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/notes'>Notes</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}
