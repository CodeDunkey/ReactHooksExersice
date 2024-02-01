import { useState, useEffect } from "react"
import { clientAPI } from "./ClientAPI"
export const useJsonNorth = () => {
    const [jsonNorth, setJsonNorth] = useState()
    
    useEffect(() => {
        // logic inside effects is reactive
        
        const getJsonNorth = async () => {
            const jsonN = await clientAPI.getJsonNorth()
            setJsonNorth(jsonN);
        }
        getJsonNorth();
        // the useEffect is running at least ones at initial render
        // Code to run

        // Optional return cleanup function 
        return ()=>{
        }
    }, []); // Dependency array. dependency values is reactive values.
    // After every re-render with changed dependencies, 
    // React will first run the cleanup function (if you provided it) with the old values, 
    // and then run your setup function with the new values. After your component is removed from the DOM, 
    //React will run your cleanup function. 
    

    return {
        jsonNorth,
        setJsonNorth
    }
}