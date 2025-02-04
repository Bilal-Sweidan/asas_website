import { useState , useEffect } from "react";
import productService from '../services/productService'

const useHomeProducts = () => {
    const [products,setProducts] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')

    useEffect(() => {
        const getHomeProduct = async () => {
            try{
                const data = await productService.getHomeProduct()
                setProducts(data)
            }catch(err){
                console.log(err.message )
                setError(err.message)
            }finally{
                setLoading(false)
            }
        } 
        getHomeProduct()
    },[])

    return {products , loading , error}
}

export default useHomeProducts