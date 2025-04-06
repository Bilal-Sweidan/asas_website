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

const forgetPassword = async (email) => {
    try {
        const res = await axiosInstance.post('/api/forget-password', { email })
        return res
    } catch (err) {
        throw new Error(err)
    }
}

const resetPassword = async (token, password) => {
    try {
        const res = await axiosInstance.post(`/api/reset-password/${token}`, { password })
        return res
    } catch (err) {
        throw new Error(err)
    }
}

const changePassword = async (currentPassword, newPassword) => {
    try {
        const res = await axiosInstance.put('/api/change-password', { currentPassword, newPassword }, { withCredentials: true })
        return res
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
    verifyCookies,
    forgetPassword,
    resetPassword,
    changePassword
}

export default userService