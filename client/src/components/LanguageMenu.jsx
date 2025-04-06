import React, { useContext } from 'react'
// context
import { LanguageContext } from '../context/languageContext'
export default function LanguageMenu({setLangWindow}) {
    const {language,setLanguage} = useContext(LanguageContext)

    function changeLanguage(language) {
        setLanguage(language)
        setLangWindow(false)
    }
    return (
        <div className='card position-absolute px-4 py-2 center z-3' style={{top : "55px"}}>
            <ul className='list-unstyled z-3'>
                <li className='pointer' onClick={() => changeLanguage("ar")}>العربية</li>
                <li className='pointer' onClick={() => changeLanguage("en")}>English</li>
                <li className='pointer' onClick={() => changeLanguage("tu")}> Turkish</li>
            </ul>
        </div>
    )
}
