import { useEffect } from "react"
import './ClientApp.scss'
import { useJsonNorth } from "./useJsonNorth"
import { useJsonSouth } from "./useJsonSouth"

// this app should show the json context on start

export const ClientApp = () => {
   
    const {jsonNorth, setJsonNorth} = useJsonNorth();
    const {jsonSouth, setJsonSouth} = useJsonSouth();


    return (<div className="clientApp" > Client app
        <button ></button>
        {JSON.stringify(jsonNorth)}
        {JSON.stringify(jsonSouth)}
    </div>)
}

