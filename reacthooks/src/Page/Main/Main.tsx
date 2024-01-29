import './Main.scss'
import { ExerciseUseState } from './ExerciseUseState/ExerciseUseState'
import { ClientApp } from './ExerciseUseEffect/ClientApp/ClientApp'
export const Main = () => {
    return(
        <div className="main">
            <ExerciseUseState />
            <ClientApp />
        </div>
    )
}