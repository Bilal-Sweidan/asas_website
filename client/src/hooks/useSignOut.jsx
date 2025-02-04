
// services
import userService from "../services/userService"
const useSignOut = async () => {
    const data = await userService.signOut()
    if (data.success) {
        setUser(null)
    }
}