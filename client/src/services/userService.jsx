import axios from "axios"
// axios instance
import axiosInstance from "../utils/axiosInstance"
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

const signIn = async (signInData) => {
    try{
        const data = await axiosInstance.post('/login', signInData, { withCredentials: true })
        return data
    }catch(err){
        throw new Error(err)
    }
}

const signUp = async (signUpData) => {
    try{
        const data = await axiosInstance.post('/register', signUpData, { withCredentials: true })
        return data
    }catch(err){
        throw new Error(err)
    }
}

const logOut = async () => {
    try {
        const data  = await axiosInstance.get('/logout', { withCredentials: true })
        return data
    } catch (err) {
        throw new Error(err)
    }
}


const userService = {
    getUser,
    logOut,
    signIn,
    signUp
}

export default userService