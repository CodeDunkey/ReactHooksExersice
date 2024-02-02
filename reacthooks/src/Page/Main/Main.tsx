import './Main.scss'
import { ExerciseUseState } from './ExerciseUseState/ExerciseUseState'
import { ExerciseUseEffect } from './ExerciseUseEffect/ExerciseUseEffect'
import { ExerciseUseRef } from './ExerciseUseRef/ExerciseUseRef'
import { ExerciseUseCallback } from './ExerciseUseCallback/ExerciseUseCallback'
import { ExerciseUseMemo } from './ExerciseUseMemo/ExerciseUseMemo'
export const Main = () => {
    return(
        <div className="main">
            {/* <ExerciseUseState /> */}
            {/* <ExerciseUseEffect /> */}
            {/* <ExerciseUseRef /> */}
            {/* <ExerciseUseCallback /> */}
            <ExerciseUseMemo />
        </div>
    )
}