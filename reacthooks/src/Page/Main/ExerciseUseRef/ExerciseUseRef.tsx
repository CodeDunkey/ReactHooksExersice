import { useRef, useState } from 'react'
import './ExerciseUseRef.scss'
import { AccessDomElement } from './Example1/AccessDomElement'
export const ExerciseUseRef = () => {

    const [theme, setTheme] = useState("black")

    const changeTheme = () => {
        if (theme === "black"){
            setTheme("darkgreen")
        }
        if (theme === "darkgreen"){
            setTheme("black")
        }
    }

    return (
        <div className='exerciseUseRef' style={{borderColor: theme}}>useRef example
            <button onClick={changeTheme}>Change border theme</button>
                <AccessDomElement />
            
        </div>
    )
}




// common use-cases for useRef:
// To store persistent values that does Not trigger a re-render:
// #1: Accessing DOM elements
// #2: Storing previous values
// #3: Working with external libraries
// #1:
// #1:

// muligt eksempel at prøve: 