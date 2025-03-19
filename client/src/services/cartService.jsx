// axios instance
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

const getCartItems = async () => {
    try{
        const res = await axiosInstance.get('/api/cart',{withCredentials : true})
        return res
    }catch(err){
        throw new Error(err)
    }
}

const addToCart = async (productId,color,quantity) => {
    try{
        const res = await axiosInstance.post('/api/cart/add',{productId,color,quantity},{withCredentials : true}) 
        return res
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

const deleteFromCart = async (productId) => {
    try{
        const res = await axiosInstance.delete(`/api/cart/delete/${productId}`, {withCredentials : true})
        return res
    }catch(err){
        throw new Error(err)
    }
}
const cartService = {
    getCartItems,
    addToCart,
    deleteFromCart
}

export default cartService
