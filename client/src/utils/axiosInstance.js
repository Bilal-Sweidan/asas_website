import axios from "axios";


const axiosInstance = axios.create({
    baseURL :  "http://localhost:4000", // "https://arraik-store.onrender.com"
    timeout : 60 * 1000 ,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default axiosInstance