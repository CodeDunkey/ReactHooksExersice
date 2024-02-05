import { useCallback, useEffect, useState } from "react";

export const Example1WithUseReducer = () => {
  
    const [input, setInput] = useState("")
    const [num1, setNum1] = useState(5)
    const [render, setRender] = useState<number>(0)

    // caching the function (object) reference memory location and using it in future re-render  
    const test = useCallback(() => num1, [num1]);
    
    useEffect(()=> {
        console.log("render")
        setRender(number => number + 1)
    }, [test, input])
    return (
        <div className="example1CaseWrapper">
            <p>Example 1 With UseCallback</p>
            <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
            <p>{input}</p>
            <p>renders {render}</p>
        </div>
    )
}