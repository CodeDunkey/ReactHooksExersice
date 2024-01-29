import { useState, useEffect } from 'react'
import './ExerciseUseState.scss'
import { StateComponent1 } from './StateComponents/StateComponent1'
import { StateComponent2 } from './StateComponents/StateComponent2'
import { StateComponent3 } from './StateComponents/StateComponent3'
export const ExerciseUseState = () => {

    const [themeMain, setThemeMain] = useState("")
    
    const buttonForMain = <button className='buttonForMain' onClick={()=> changeTheme()}>Change Main Theme</button>

    const changeTheme = () => {
        if (themeMain === "") {
            setThemeMain("darkblue")
        }
       
        if (themeMain === "darkblue") {
            setThemeMain("")
        }
    }

    useEffect(() => {

        // ### THIS WILL SHOW THE AMOUNT OF RERENDERES

        // console.count("theme Main have re-rendered")
    }, [themeMain])

    const Grid = ({child}: any) => {
        return (
            <div className='grid'>
                {child}
            </div>
        )
    }

    return (
        <div className='ExerciseUseState' style={{backgroundColor: themeMain}}>useState Example
            {buttonForMain}
            <Grid child={<div className='row'>
                <StateComponent1 />
                <StateComponent2 />
                <StateComponent3 />
            </div>}/>
        See The number of re-renderes in the console log</div>
    )
}
