// axios instance
import axiosInstance from "../utils/axiosInstance"
const getSocialMediaInfo = async () => {
    try {
        const res = await axiosInstance.get('/api/social-media', { withCredentials: true })
        return res
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

const updateSocialMedia = async (newData) => {
    try {
        const res = await axiosInstance.put('/api/social-media/update', newData, { withCredentials: true })
        return res
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

const socialMediaService = {
    getSocialMediaInfo,
    updateSocialMedia
}

export default socialMediaService