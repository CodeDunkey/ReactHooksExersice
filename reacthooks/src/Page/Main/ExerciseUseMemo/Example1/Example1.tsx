import { useState, useMemo } from "react";

export const Example1UseMemo = () => {
    const [input, setInput] = useState()
    // const cal = useMemo(()=>{for(let i = 0; i <= 5999; i++){console.log('i', i);}}, []) 
    for(let i = 0; i <= 9999; i++){console.log('i', i); }
    // console.log('cal', cal);
    const textInput = (x:any) => {
        setInput(x.target.value)
    }
    
    return (
        <div>
            <input value={input} onChange={textInput}></input>
            <p>{input}</p>
            
        </div>
    )
}