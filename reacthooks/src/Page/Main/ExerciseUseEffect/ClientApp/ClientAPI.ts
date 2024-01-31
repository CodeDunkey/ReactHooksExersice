// would be a fetch in a real scenario
import { serverApi } from "../Servers/ServerAPI";

class ClientAPI {

    getJsonNorth = async () => {
        return serverApi.getJsonNorth();
    }

    getJsonSouth = async () => {
        return serverApi.getJsonSouth();
    }
}

export const clientAPI = new ClientAPI();