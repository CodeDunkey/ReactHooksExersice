import { useEffect, useState } from "react"
import './StateComponent1.scss'

export const StateComponent1 = () => {

    const [theme1, setTheme1] = useState("")
   
    const changeTheme = () => {
        if (theme1 === "") {
            setTheme1("black")
        }
        if (theme1 === "black") {
            setTheme1("green")
        }
        if (theme1 === "green") {
            setTheme1("orange")
        }
        if (theme1 === "orange") {
            setTheme1("white")
        }
        if (theme1 === "white") {
            setTheme1("")
        }

    }
    useEffect(() => {
        console.count("theme 1 have re-rendered");
       
    })
    return (
        <div className="stateComponent1">
            <button className="buttonComponent1" onClick={() => changeTheme()}>Change Theme 1</button>
            <div className='gridSquare1' style={{ backgroundColor: theme1 }}>1</div>
            <div className='gridSquare4' style={{ backgroundColor: theme1 }}>4</div>
            <div className='gridSquare7' style={{ backgroundColor: theme1 }}>7</div>
        </div>
    )
}