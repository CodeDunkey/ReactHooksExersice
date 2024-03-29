import { useState, useEffect, useRef } from "react"
import './ChildComponent.scss'
export const StateComponent3 = ({prop}: {prop: number}) => {
    const [theme3, setTheme3] = useState("")
    const count = useRef(0)

    const changeTheme = () => {
        if (theme3 === "") {
            setTheme3("black")
        }
        if (theme3 === "black") {
            setTheme3("green")
        }
        if (theme3 === "green") {
            setTheme3("orange")
        }
        if (theme3 === "orange") {
            setTheme3("white")
        }
        if (theme3 === "white") {
            setTheme3("")
        }
    }
    const counter = console.count
    useEffect(() => {
        prop++;
        // ### THIS WILL SHOW THE AMOUNT OF RERENDERES
        
        console.count("theme 3 have re-rendered")
    })
    return (
        <div className="stateComponent3">
            <button className="buttonComponent3" onClick={() => changeTheme()}>Change Theme 3</button>
            <div className='gridSquare3' style={{ backgroundColor: theme3 }}>3</div>
            <div className='gridSquare6' style={{ backgroundColor: theme3 }}>6</div>
            <div className='gridSquare9' style={{ backgroundColor: theme3 }}>9</div>
            {prop}
        </div>
    )
}