import './Show.scss'
import { ClientApp } from './ClientApp/ClientApp'
import { ServerNorth } from './Servers/ServerNorth'
export const ExerciseUseEffect = () => {

    // useEffect(() => {
        // logic inside effects is reactive
        
        // const getJsonSouth = async () => {
        //     const jsonS = await clientAPI.getJsonSouth()
        //     setJsonSouth(jsonS);
        // }
        // getJsonSouth();
        // the useEffect is running at least ones at initial render
        // Code to run

        // Optional return cleanup function 
        // return ()=>{
        // }
    // }, []); // Dependency array. dependency values is reactive values.
    // After every re-render with changed dependencies, 
    // React will first run the cleanup function (if you provided it) with the old values, 
    // and then run your setup function with the new values. After your component is removed from the DOM, 
    //React will run your cleanup function. 

    return (
        <div className='ShowWrapper'>useEffect example
            <div className='clientAndServerWrapper'>
                <ClientApp />
                <ServerNorth />
            </div>
        </div>
    )
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