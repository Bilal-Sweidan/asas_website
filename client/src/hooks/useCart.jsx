import { useEffect, useState } from "react"

// cart service
import cartService from "../services/cartService"


const useCart = () => {
    const [cartItems, setCartItems] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getItems = async () => {
        setLoading(true)
        const res = await cartService.getCartItems()
        setCartItems(res.data)
        setLoading(false)
    }
    useEffect(() => {
        getItems()
    }, [])


    const addToCart = async (productId, color, quantity) => {
        setLoading(true)
        try {
            const res = await cartService.addToCart(productId, color, quantity)
            return res 
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    const deleteFromCart = async (productId) => {
        setLoading(true)
        try {
            const res = await cartService.deleteFromCart(productId)
            setCartItems(res.data)
            return res
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }
    return { addToCart, isLoading, error, cartItems, deleteFromCart }
}

export default useCart