import { useState, useEffect  } from "react"
import { useCookies } from "react-cookie"

// services
import userService from "../services/userService"
const useGetUser = () => {
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
            const data = await userService.getUser()
            const { account } = data
            setUser(account)
            setLoading(false)
            console.log('check the user')
        }
        verifyCookies()
    }, [cookies])

    return {user,isLoading}
}

export default useGetUser