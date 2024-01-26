import { useState, useEffect } from "react"
import './StateComponent2.scss'
export const StateComponent2 = () => {
    const [theme2, setTheme2] = useState("")

    const changeTheme = () => {
        if (theme2 === "") {
            setTheme2("blue")
        }
        if (theme2 === "blue") {
            setTheme2("yellow")
        }
        if (theme2 === "yellow") {
            setTheme2("black")
        }
        if (theme2 === "black") {
            setTheme2("")
        }
    }
    useEffect(() => {

        // ### THIS WILL SHOW THE AMOUNT OF RERENDERES

        // console.count("theme 2 have re-rendered")
    })
    return (
        <div className="stateComponent2">
            <button className="buttonComponent2" onClick={() => changeTheme()}>Change Theme 2</button>
            
            <div className='gridSquare2' style={{ backgroundColor: theme2 }}>2</div>
            <div className='gridSquare5' style={{ backgroundColor: theme2 }}>5</div>
            <div className='gridSquare8' style={{ backgroundColor: theme2 }}>8</div>
        </div>
    )
}