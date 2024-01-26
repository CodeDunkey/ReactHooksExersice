import { useEffect, useState } from "react"
import './ExerciseUseEffect.scss'
import { ChildComponent1 } from "./ChildComponenet1"
export const ExerciseUseEffect = () => {
    const [boolState, setBoolState] = useState(false)
    const [theme, setTheme] = useState("")
    
    // the useEffect will run every time teh component is rendered

    const changeState = ()=> {
        setBoolState(e => !e)
        if(boolState){
                setTheme("blue")
            }
            if(!boolState){
                setTheme("")
            }
    }
    useEffect(()=>{
        // #2 then the 
        const anEffect = () => {
            console.log("ParentComponent useEffect method", boolState.toString());
        }
        anEffect()

        // #1 the return will run first 
        return(console.log("ParentComponent useEffect return"))
    }, [boolState]
    )

    return(
        <div className="ExerciseUseEffect" style={{backgroundColor: theme}}>
            <button onClick={()=>changeState()}>Change theme of Parent Component: {boolState.toString()}</button>
            <ChildComponent1 />
        </div>
    )
}