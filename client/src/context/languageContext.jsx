import { Children, createContext, useEffect, useState } from "react";
// import axios
import axios from "axios";


export const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    const [language,setLanguage] = useState(window.localStorage.language || "ar")
    window.localStorage.language = language
    return (
        <LanguageContext.Provider value={{language , setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

// export default languageContext