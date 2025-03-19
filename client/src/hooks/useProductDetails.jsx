import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

// service
import productService from "../services/productService"
const useProductDetails = () => {
    const [details,setDetails] = useState()
    const [loading,setLoading] = useState(true)
    const [error , setError] = useState('')

    const {id} = useParams()
    const getProduct =  async () => {
        try{
            const data = await productService.getProductDetails(id) 
            setDetails(data)
        }catch(err){
            console.log(err.message)
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        getProduct()
    },[])

    return {details,loading,error}
} 

export default useProductDetails
