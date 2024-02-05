import { useEffect, useState } from "react";

export const Example1WithoutUseReducer = () => {
  
    const [input, setInput] = useState("")
    const [num1, setNum1] = useState(5)
    const [render, setRender] = useState<number>(0)
    
    // gets a new reference memory location after each render
    const test = () => num1;
    
    useEffect(()=> {
        console.log("render")
        // gives an infinite loop because after re-render 
        if(render < 25000){
            setRender(number => number + 1)
        }
    }, [test, input])
    return (
        <div className="example1CaseWrapper">
            <p>Example 1 Without UseCallback</p>
            <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
            <p>{input}</p>
            <p>renders {render}</p>
        </div>
    )
}