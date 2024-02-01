import { useRef, useState } from 'react'
import './AccessDomElement.scss'
let letTimerId: any = 0;
export const AccessDomElement = () => {
    const [textInput, setTextInput] = useState();
    const [seconds, setSecond] = useState(0);
    const render = useRef(0);
    const inputRef = useRef<any>();
    const timerId = useRef<any>()
    
    
    const handleTextInput = (x: any) => {
        setTextInput(x.target.value)
        render.current++;
    }

    // below the function is used to access the dom element
    const focusOnInput = () => {
        inputRef.current.focus();
    }

    const startTimer = () => {
        if (!letTimerId) {
            letTimerId = setInterval(() => {
                render.current++
                setSecond(e => e + 1) // or setSecond(e: any => e + 1)
            }, 1000);
        }
        
    }

    const stopTimer = () => {
        clearInterval(letTimerId); //timerId.current
        letTimerId = 0; //timerId.current
        console.log('timerId.current in stopTimer', letTimerId);
    }
    const resetTimer = () => {

        stopTimer();
        if (seconds) {
            render.current++;
            setSecond(0);

        }

    }

    let num1 = 1;
    let num2 = 2;
    num2 = num1;
    num2 = num2 + 3;
    console.log(num1);
    console.log(num2);
    let array1 = [1, 2, 3];
    let array2 = array1;
    array2.push(4);
    console.log(array1);
    console.log(array2);
    console.log('render', render);
    console.log('letTimerId', letTimerId);
    console.log('timerId.current', timerId.current);
    return (
        <div className="accessDomElement">

            {/* {below the 'ref' is used to access the dom element} */}
            <input ref={inputRef} value={textInput} onChange={handleTextInput}></input>
            <p>Renders: {render.current}</p>
            <button onClick={startTimer}>Start timer</button>
            <button onClick={stopTimer}>Stop timer</button>
            <button onClick={resetTimer}>Reset timer</button>

            <p>{seconds}</p>
            <button onClick={focusOnInput}>Focus on input</button>
        </div>
    )
}

