import { useState } from "react"
// services
import userService from "../services/userService"

const useRegister = () => {
    const [pending, setPending] = useState(false)
    const [error, setError] = useState("")

    const register = async (e) => {
        e.preventDefault()
        setPending(true)
        try {
            const data = e.target
            const formData = new FormData(data)
            const jsonForm = Object.fromEntries(formData.entries())
            console.log(jsonForm)
            const res = await userService.signUp(jsonForm)
            return res
        } catch (err) {
            setError(err.message)
        } finally {
            setPending(false)
        }
    }
    return {register,pending,error}
}

export default useRegister

