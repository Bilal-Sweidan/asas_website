// search service
import { useState } from "react"
import productService from "../services/productService"
import { model } from "mongoose"
const useSearch = () => {
    const [isLoading, setLoading] = useState()
    const [searchRes, setSearchRes] = useState()
    const [error, setError] = useState()
    const search = async (id, name) => {
        try {
            setLoading(true)
            const res = await productService.getSearchedProducts(id, name)
            console.log(res.data)
            setSearchRes(res.data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return { searchRes, isLoading, error, search }
}

export default useSearch