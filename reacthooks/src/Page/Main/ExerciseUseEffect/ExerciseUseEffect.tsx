import './Show.scss'
import { ClientApp } from './ClientApp/ClientApp'
import { ServerNorth } from './Servers/ServerNorth'
export const ExerciseUseEffect = () => {

    return (
        <div className='ShowWrapper'>useEffect example
            <div className='clientAndServerWrapper'>
                <ClientApp />
                <ServerNorth />
            </div>
        </div>
    )
}