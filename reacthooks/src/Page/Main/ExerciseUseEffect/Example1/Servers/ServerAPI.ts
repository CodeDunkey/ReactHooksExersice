import jsonNorth from './ServerNorth.json'
import jsonSouth from './ServerSouth.json'


class ServerAPI {

    // will return a promise with a timer. The promise will resolve the json after the timer has run out.
    getJsonNorth = async () => {



        return new Promise<any>((resolve, reject) => {

            setTimeout(()=>{
                resolve(jsonNorth)

            }, 4000)

        })
    }

    getJsonSouth = async () => {

        return new Promise<any>((resolve, reject) => {
            
            setTimeout(() => {
                resolve(jsonSouth)

            }, 2000)
        })
    }
}

export const serverApi = new ServerAPI();