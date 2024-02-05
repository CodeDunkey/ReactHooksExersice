import { useState, useMemo } from "react";

export const Example1WithUseMemo = () => {
    const [input2, setInput2] = useState()

    // here the useMemo hook is used to remember the calculation output to speedup the render/re-render
    const cal = useMemo(() => { for (let i = 0; i <= 5999; i++) { console.log('i', i); } }, [])

    const textInput2 = (x: any) => {
        setInput2(x.target.value)
    }

    return (
        <div className="example1CaseWrapper">
            <p>with useMemo.</p>
            <p>runs fast with useMemo.</p>
            <input value={input2} onChange={textInput2} placeholder="type here"></input>
            <p>{input2}</p>
        </div>
    )
}