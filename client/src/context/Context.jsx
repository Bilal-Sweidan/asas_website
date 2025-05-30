import { createContext, useState, useEffect } from "react";
import axios from 'axios'
import { useCookies } from 'react-cookie'


// services
import userService from "../services/userService";
import { useNavigate } from "react-router";

const UserContext = createContext()



const UserProvider = ({ children }) => {

    const [cookies, removeCookies] = useCookies()
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const verifyCookies = async () => {
            if (!cookies.token) {
                setLoading(false)
                return null
            }
            setLoading(true)
            const { data } = await userService.verifyCookies()
            const { account } = data
            setUser(account)
            setLoading(false)
            console.log('check the user')
        }
        verifyCookies()
    }, [cookies])

    const [isPending, setPending] = useState(false)
    async function handleLogin(e) {
        setPending(true)
        try {
            const input = e.target
            const formData = new FormData(input)
            const jsonForm = Object.fromEntries(formData.entries())
            const { data } = await userService.login(jsonForm)
            if (data.success) {
                setUser(data.account)
            }
        } catch (err) {
            throw new Error(err)
        } finally {
            setPending(false)
        }
    }

    async function logout() {
        const data = await userService.logout()
        console.log(data)
        if (data.status == 200) {
            setUser(null)
            return true
        }
        return false
    }
    return (
        <UserContext.Provider value={{ user, setUser, handleLogin, logout, isPending, isLoading }}>
            {children}
        </UserContext.Provider>
    )
}

const AuthContext = {
    UserContext,
    UserProvider
}
export default AuthContext

