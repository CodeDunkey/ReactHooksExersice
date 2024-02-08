import { useState, useEffect, useRef } from 'react'
import './ExerciseUseState.scss'
import { StateComponent1 } from './ChildComponents/ChildComponent1'
import { StateComponent2 } from './ChildComponents/ChildComponent2'
import { StateComponent3 } from './ChildComponents/ChildComponent3'



export const ExerciseUseState = () => {

    const [themeMain, setThemeMain] = useState("")
    const parentCount = useRef(0)
    const child1Count = useRef(0)
    const child2Count = useRef(0)
    const child3Count = useRef(0)
    const buttonForMain = <button className='buttonForMain' onClick={() => changeTheme()}>Change Main Theme</button>

    const changeTheme = () => {
        if (themeMain === "") {
            setThemeMain("lightblue")
        }

        if (themeMain === "lightblue") {
            setThemeMain("")
        }
    }

    useEffect(() => {
        parentCount.current++
        // ### THIS WILL SHOW THE AMOUNT OF RERENDERES

        console.count("theme Main have re-rendered")
    }, [themeMain])

    const Grid = ({ child }: any) => {
        return (
            <div className='grid'>
                {child}
            </div>
        )
    }

    return (
        <div className='ExerciseUseState' style={{ backgroundColor: themeMain }}>useState Example
            <p>Parent component {parentCount.current}</p>
            {buttonForMain}
            <Grid child={<div className='row'>
                <StateComponent1 />
                <StateComponent2 />
                <StateComponent3 prop={child3Count.current}/>
            </div>} />
            See The number of re-renderes in the console log</div>
    )
}
