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
        return data
    }catch(err){
        throw new Error(err)
    }
}

const getSearchedProducts = async (productId = "",productName = "") => {
    try{
        const res = await axiosInstance.get('/api/products/search',{
            params : {
                id : productId,
                name : productName
            }
        })
        return res
    }catch(err) {
        throw new Error(err)
    }
}
const productService = {
    getHomeProduct,
    getProductDetails,
    getSearchedProducts
}
export default productService