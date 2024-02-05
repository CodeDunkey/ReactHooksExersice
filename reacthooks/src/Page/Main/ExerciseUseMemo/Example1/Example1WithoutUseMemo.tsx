import { useState, useMemo } from "react";

export const Example1WithoutUseMemo = () => {
    const [input, setInput] = useState()

    // here the for loop is a calculation used to slow down the component render/re-render
    for (let i = 0; i <= 9999; i++) { console.log('i', i); }

    const textInput = (x: any) => {
        setInput(x.target.value)
    }

    return (
        <div className="example1CaseWrapper">
            <p>without useMemo.</p>
            <p>runs slow without useMemo.</p>
            <input value={input} onChange={textInput} placeholder="type here"></input>
            <p>{input}</p>
        </div>
    )
}