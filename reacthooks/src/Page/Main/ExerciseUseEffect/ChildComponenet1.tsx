import { useState, useEffect } from "react";
import './ChildComponent1.scss'
export const ChildComponent1 = () => {
    const [boolState, etBoolState] = useState(false)
    const [theme, setTheme] = useState("")

    let nonState = 1;
    // console.log("ChildComponent1 have rendered ")
    const changeState = () => {
        etBoolState(e => !e)
        if (boolState) {
            setTheme("blue")
        }
        if (!boolState) {
            setTheme("")
        }
    }

    const plus = () => {


        nonState++;
        // console.log("plus 'if' is working", nonState)


        console.log("showing nonState: ", nonState)
    }
    const minus = () => {


        nonState--;
        // console.log("minus 'if' is working", nonState)


        console.log("showing nonState: ", nonState)
    }
    const anEffect = () => {
        console.log("ChildComponent useEffect method");
    }
    // the useEffect will run every time the component is rendered if no dependencies.
    // Or if there is a dependency array with state variablesones, then at first render 
    // and then only if dependencies changes
    useEffect(() => {
        // #1 the body "content" run first 
        anEffect()
        console.log("body content")




        // #2 then the return will run which could be a cleanup function
        return (console.log("ChildComponent useEffect return"))
    },
        // the dependency array below will look for changes in the state variables 
        // in the 
        [boolState, nonState]
    )
    return (
        <div>
            <button onClick={() => changeState()} style={{ backgroundColor: theme }}>Change theme of Child Component1</button>

            <button onClick={() => plus()} >Change the nonState variable + 1: </button>
            <button onClick={() => minus()} >Change the nonState variable - 1: </button>

            {/* <video className="video" controls></video> */}
        </div>
    )
}