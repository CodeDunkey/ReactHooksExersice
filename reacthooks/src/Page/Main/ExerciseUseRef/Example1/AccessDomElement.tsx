import { useEffect, useRef, useState } from 'react'
import './AccessDomElement.scss'

export const AccessDomElement = () => {
    // let letTimerId: any; "will in this example be 'undefined'"
    const [textInput, setTextInput] = useState();
    const [seconds, setSecond] = useState(0);
    const render = useRef(0);
    const inputRef = useRef<any>();
    const timerId = useRef<any>()

    useEffect (()=> {
        // render.current++
    }, [])
    const handleTextInput = (x: any) => {
        console.log('x in handleTextInput', x.target.value);
        setTextInput(x.target.value)
        render.current++;
    }

    // below the function is used to access the dom element
    const focusOnInput = () => {
        inputRef.current.focus();
    }

    const startTimer = () => {
        if (!timerId.current) {
            timerId.current = setInterval(() => {
                render.current++
                setSecond(e => e + 1) // or setSecond(e: any => e + 1)
            }, 1000);
        }
    }

    // the example below with "letTimerId" will not work because when the interval runs the,
    // setSecond triggers a re-render, and after every re-render the letTimerId gets set to the init value which is "undefined",
    // and then the clearInterval does not know what interval to clear
    const stopTimer = () => {
        // clearInterval(letTimerId);
        
        clearInterval(timerId.current); //timerId.current
        timerId.current = 0; //timerId.current
    }
    const resetTimer = () => {

        stopTimer();
        if (seconds) {
            render.current++;
            setSecond(0);

        }

        
    }
    // console.log('render', render);
    // console.log('letTimerId', letTimerId);
    // console.log('timerId.current', timerId.current);
    return (
        <div className="accessDomElement">

            {/* {below the 'ref' is used to access the dom element} */}
            <input ref={inputRef} value={textInput} onChange={handleTextInput}></input>
            <p>{textInput}</p>
            <p>Renders: {render.current}</p>
            <button onClick={startTimer}>Start timer</button>
            <button onClick={stopTimer}>Stop timer</button>
            <button onClick={resetTimer}>Reset timer</button>

            <p>{seconds}</p>
            <button onClick={focusOnInput}>Focus on input</button>
        </div>
    )
}

