import { Children, createContext, useEffect, useState } from "react";
// import axios
import axios from "axios";


const languageContext = createContext()

const languageProvider = ({children}) => {
    const [language,setLanguage] = useState(window.localStorage.language)

    const changeLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage)
    }

    return (
        <languageContext.Provider value={{language , changeLanguage}}>
            {children}
        </languageContext.Provider>
    )
}

export default languageContext