import './Theme.scss'
import { useState, useEffect } from 'react'

export const Theme = () => {

    // console.log(localStorage.getItem('theme'))

    const [currTheme, setCurrTheme] = useState(localStorage.getItem('theme'))
    // const [btnTheme, setBtnTheme] = useState(localStorage.getItem('theme'))

    const toggleTheme =()=>{
        // console.log(currTheme);
        if(currTheme === 'theme-light'){
            localStorage.setItem("theme", 'theme-dark')
            setCurrTheme(localStorage.getItem('theme'))
        } else {
           localStorage.setItem("theme", 'theme-light')
           setCurrTheme(localStorage.getItem('theme'))
        }
    }

    useEffect(()=>{
     document.body.className = currTheme;
    },[currTheme])


    return (
    <>
        <button onClick={toggleTheme} className={currTheme}>Theme</button>
    </>
    )

}