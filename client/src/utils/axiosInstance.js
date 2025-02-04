import axios from "axios";


const axiosInstance = axios.create({
    baseURL : process.env.BACK_END_URL,
    timeout : 60 * 1000 ,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default axiosInstance