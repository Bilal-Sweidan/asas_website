import axios from "axios"
// axios instance
import axiosInstance from "../utils/axiosInstance"
import { PiApproximateEquals, PiThreeDFill } from "react-icons/pi"
const getUser = async () => {
    try {
        const { data } = await axiosInstance.post('/', {}, {
            withCredentials: true
        })
        return data
    } catch (err) {
        throw new Error(err)
    }
}

const login = async (signInData) => {
    try {
        const data = await axiosInstance.post('/login', signInData, { withCredentials: true })
        return data
    } catch (err) {
        throw new Error(err)
    }
}

const signUp = async (signUpData) => {
    try {
        const data = await axiosInstance.post('/register', signUpData, { withCredentials: true })
        return data
    } catch (err) {
        throw new Error(err)
    }
}

const logout = async () => {
    try {
        const data = await axiosInstance.get('/logout', { withCredentials: true })
        return data
    } catch (err) {
        throw new Error(err)
    }
}

const verifyCookies = async () => {
    try {
        const data = await axiosInstance.post('/', {}, { withCredentials: true })
        return data
    } catch (err) {
        throw new Error(err)
    }
}


const userService = {
    getUser,
    logout,
    login,
    signUp,
    verifyCookies
}

export default userService