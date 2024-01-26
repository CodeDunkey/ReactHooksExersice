import './Main.scss'
import { ExerciseUseState } from './ExerciseUseState/ExerciseUseState'
import { ExerciseUseEffect } from './ExerciseUseEffect/ExerciseUseEffect'
export const Main = () => {
   
    return(
        <div className="main">
            <ExerciseUseState />
            <ExerciseUseEffect />
        </div>
    )
}