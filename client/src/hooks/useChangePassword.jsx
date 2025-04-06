import { useState } from "react"
// service  
import userService from "../services/userService"


const useChangePassword = () => {
    const [isLoading,setLoading] = useState(false)
    const [error, setError] = useState("")
    const changePassword = async (currentPassword,newPassword) => {
        setLoading(true)
        try{    
            const res = await userService.changePassword(currentPassword,newPassword)
            return res
        }catch(err){
            setError(err.message)
            throw new Error(err)
        }finally{
            setLoading(false)
        }
    }

    return { changePassword , isLoading , error }
}

export default useChangePassword