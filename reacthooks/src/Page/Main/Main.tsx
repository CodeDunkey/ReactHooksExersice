import './Main.scss'
import { ExerciseUseState } from './ExerciseUseState/ExerciseUseState'
import { ExerciseUseEffect } from './ExerciseUseEffect/ExerciseUseEffect'
import { ExerciseUseRef } from './ExerciseUseRef/ExerciseUseRef'
export const Main = () => {
    return(
        <div className="main">
            <ExerciseUseState />
            <ExerciseUseEffect />
            <ExerciseUseRef />
        </div>
    )
}