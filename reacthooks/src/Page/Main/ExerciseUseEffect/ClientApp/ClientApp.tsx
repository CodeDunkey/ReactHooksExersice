import { useEffect, useState } from "react"
import './ClientApp.scss'
import { useClientAPI } from "./useClientAPI"

export const ClientApp = () => {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState<number>(0)

    const { data } = useClientAPI({})
    
    let timerId: any; 

    const startTimer = () => {
        const startTime = Date.now();
        timerId = setInterval(()=>{
            const elapsedTime = Date.now() - startTime;
            // console.log(elapsedTime) 
            setTime(elapsedTime)
        }, 1000);

        // return timerId;
    }
    // const count = 1
    // console.log("timerId", timerId)

    // const changeCount = () => {
    //     return count + 1

    // }
    // changeCount()
    // console.log(JSON.stringify(data))


    // console.log("App rendered")


    useEffect(() => {
        // logic inside effects is reactive

        // the useEffect is running at least ones at initial render
        document.title = `You clicked ${count} times`;
        // Code to run
        startTimer()

        // Optional return cleanup function 
        return ()=>{
            clearInterval(timerId);
            timerId = null
        }
    }, [count]); // Dependency array. dependency values is reactive values.
    // After every re-render with changed dependencies, 
    // React will first run the cleanup function (if you provided it) with the old values, 
    // and then run your setup function with the new values. After your component is removed from the DOM, 
    //React will run your cleanup function. 

    return (<div className="clientApp" > Hello
        <button onClick={() => setCount((value) => value + 1)}>Click here. {Math.round(time/1000)} secs since last click</button>
        <div>{JSON.stringify(data)}</div>
    </div>)
}

// HVAD ER MOUNT OG UNMOUNT AF ET CMOPONENT?????????????????????????????????????????????

// common use-cases for useEffect:
// To handle side effects like:
// #1: fetching data, on mount
// #1: updating DOM
// #1: making API Calls
// #1: sub or unsubscribe to events
// #1:

// muligt eksempel at prøve: en timer i en useEffect der viser 