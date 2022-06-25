import React from 'react'
import Header from './Header'
import LoginForm from './LoginForm'
import Apple from '../images/AppleButton.svg'
import Google from '../images/GoogleButton.svg'
import Divider from '../images/divider.svg'

export default function Welcome() {
    const adminUser = {
        email: "",
        password: ""
      }
    const [user, setUser] = React.useState({name: "", email: ""})
    const [error, setError] = React.useState("")
    
    function Login (details) {
        console.log(details);
        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("User Already Registered");
            setError("Registration failed");
        } else {
            console.log("Registered successfully");
            setUser({
                name: details.name,
                email: details.email
            });
        }
    }
  
    return (
    <div className='welcome'>
        <Header />
        <div className='form-body'>
          <img src={Google} className="login-button"></img>
          <img src={Apple} className="login-button"></img>
          <div className='divider'>
            <img src={Divider} className="divider-img"></img>
            <p>OR</p>
            <img src={Divider} className="divider-img"></img>
          </div>
          <LoginForm Login={Login} error={error} />
          <div className='registered'>
            <p>Already have an account?</p>
            <button 
                    className="sign-button" 
                    >Sign In  
            </button>
          </div>
        </div>
    </div>
  )
}
