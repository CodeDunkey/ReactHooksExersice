import { useEffect, useState } from "react";

import ServerNorth from "../Servers/ServerNorth.json";
export const useClientAPI = (options: any) => {
    const [data, setData] = useState<any>(null);
   
    let newData = ServerNorth
    // console.log(ServerNorth)



    useEffect(()=>{
        setData(newData);
    }, [data])

    
    return {
        data,
    }
}

// useEffect(()=>{
//     console.log("useFetch useEffect")
//     fetch(options.url)
//         .then((response) =>response.json())
//         .then((json) => setData(json));
// })