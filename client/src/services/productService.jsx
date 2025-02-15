import axios from 'axios'

// axios instance
import axiosInstance from '../utils/axiosInstance'

const backendUrl =  "http://localhost:4000"
const getHomeProduct = async () => {
    try{
        const response = await axiosInstance.get(`/api/products`) 
        return response.data
    }catch(err){
        throw new Error(err)
    }
}

const getProductDetails = async (productId) => {
    try{
        const {data} = await axiosInstance.get(`/api/product/${productId}`)
        console.log(data)
        return data
    }catch(err){
        throw new Error(err)
    }
}

const productService = {
    getHomeProduct,
    getProductDetails
}
export default productService