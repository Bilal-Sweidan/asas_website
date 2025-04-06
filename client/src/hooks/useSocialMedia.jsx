import { useEffect, useState } from "react";
// services
import socialMediaService from "../services/socialMediaService";

const useSocialMedia = () => {
    const [socialMedia, setSocialMedia] = useState()
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getSocialInfo = async () => {
        setLoading(true)
        try {
            const res = await socialMediaService.getSocialMediaInfo()
            console.log(...res.data)
            setSocialMedia(...res.data)
            return res
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getSocialInfo()
    }, [])

    const changeSocialMediaData = async (newData) => {
        setLoading(true)
        try {
            const res = await socialMediaService.updateSocialMedia(newData)
            setSocialMedia(...res.data)
            return res
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return { socialMedia, isLoading, error, changeSocialMediaData }
}


export default useSocialMedia