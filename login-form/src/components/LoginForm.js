import React from 'react'
import emailLogo from '../images/Mail.svg'
import smileLogo from '../images/Smile.svg'
import lock from '../images/Lock.svg'
import calendar from '../images/Calendar.svg'

export default function LoginForm({Login, error}) {
    const [details, setDetails] = React.useState({name: "", email: "", password: "", date: "", gender: ""})

    function submitHandler(e) {
        e.preventDefault()
        Login(details)
    }

    const genderSelected = details.gender === 'Male' ? 'male' : 'female';

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}

                <div className='form-group'>
                    <img src={emailLogo} className='form-logos'></img>
                    <input 
                        type='text' 
                        name="email" 
                        id='email' 
                        onChange={e => setDetails({...details, email: e.target.value})}
                        value={details.email}
                        placeholder='Your Email' 
                    />
                </div>
                
                <div className='form-group'>
                    <img src={smileLogo} className='form-logos'></img>
                    <input 
                        type='text' 
                        name="name" 
                        id='name' 
                        onChange={e => setDetails({...details, name: e.target.value})}
                        value={details.name}
                        placeholder='Your Name'
                    />
                </div>
                
                <div className='form-group'>
                    <img src={lock} className='form-logos'></img>
                    <input 
                        type='password' 
                        name="password" 
                        id='password' 
                        onChange={e => setDetails({...details, password: e.target.value})}
                        value={details.password}
                        placeholder='Create Password'
                    />
                </div> 

                <div className='forms-together'>
                    <div className='form-date'>
                        <img src={calendar} className='form-logos'/>
                        <input 
                            type='date'
                            name='date'
                            id='date'
                            onChange={e => setDetails({...details, date: e.target.value})}
                            value={details.date}
                            placeholder='Date of Birth'
                        />
                    </div> 
                    <div className='form-gender'>
                        <img src={`../images/${genderSelected}.svg`} className='form-logos' />
                        <input 
                            type="radio" 
                            value="Male" 
                            name="gender"
                            onChange={e => setDetails({...details, gender: e.target.value})} 
                        />
                        <label htmlFor='Male'>Male</label>
                        <input 
                            type="radio" 
                            value="Female" 
                            name="gender" 
                            onChange={e => setDetails({...details, gender: e.target.value})} 
                        />
                        <label htmlFor='Female'>Female</label>
                    </div>    
                </div>    

                <input type="submit" value="Sign up"></input>   
            </div>

        </form>
    )
}
