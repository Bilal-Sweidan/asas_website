import axios from "axios";


const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BACK_END_URL || "http://localhost:4000",
    timeout : 60 * 1000 ,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default axiosInstance