import { useState } from "react"
// services
import userService from "../services/userService"
const useAuth = async (e) => {
    const [isPending, setPending] = useState(true)
    const [user, setUser] = useState()

    const input = e.target
    const formData = new FormData(input)
    const jsonForm = Object.fromEntries(formData.entries())

    const data = await userService.signIn(jsonForm)
    if (data.success) {
        setUser(data.account)
        console.log(data)
    }
    setPending(false)

    return { user, isPending }
}
export default useAuth