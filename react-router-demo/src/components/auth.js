import React from 'react'

const AuthContext = React.createContext(null)

export function AuthProvider ({children}) {
    const [user, setUser] = React.useState(null)

    const login = user => setUser(user)

    const logout = () => setUser(null)

    return (
        <AuthContext.Provider value={{ user, login, logout }}> 
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return(
        React.useContext(AuthContext)
    )
}


