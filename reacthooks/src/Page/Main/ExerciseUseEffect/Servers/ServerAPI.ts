import jsonNorth from './ServerNorth.json'
import jsonSouth from './ServerSouth.json'


class ServerAPI {

    getJsonNorth = async () => {

        return new Promise<any>((resolve, reject) => {
            resolve(jsonNorth)
        })
    }

    getJsonSouth = async () => {

        return new Promise<any>((resolve, reject) => {
            resolve(jsonSouth)
        })
    }
}

export const serverApi = new ServerAPI();