import React from 'react'
import {useAuth} from './auth'
import {useNavigate, useLocation} from 'react-router-dom'

export default function Login() {
    const [user, setUser] = React.useState('')
    const location = useLocation()
    const auth = useAuth()
    const navigate = useNavigate()

    const redirectPath = location.state?.path || '/' //Allows after login to stay in profile page instead of being redirected to home page

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace: true}) //this replace true allows that when you login and press back it keeps logged in and turns back to the home page
    }

    return (
        <div>
            <label>
                Username: <input type='text' onChange={e => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
