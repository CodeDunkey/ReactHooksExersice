import './Main.scss'
import { ExerciseUseState } from './ExerciseUseState/ExerciseUseState'
import { ExerciseUseEffect } from './ExerciseUseEffect/ExerciseUseEffect'
import { ExerciseUseRef } from './ExerciseUseRef/ExerciseUseRef'
import { ExerciseUseCallback } from './ExerciseUseCallback/ExerciseUseCallback'
import { ExerciseUseMemo } from './ExerciseUseMemo/ExerciseUseMemo'
import { ExerciseUseReducer } from './ExerciseUseReducer/ExerciseUseReducer'
import { ExerciseUseContext } from './ExerciseUseContext/ExerciseUseContext'
import { ExercisePureComponent } from './ExercisePureComponent/ExercisePureComponent'
export const Main = () => {
    return(
        <div className="main">
            {/* <ExerciseUseState /> */}
            {/* <ExerciseUseEffect /> */}
            {/* <ExerciseUseRef /> */}
            {/* <ExerciseUseCallback /> */}
            {/* <ExerciseUseMemo /> */}
            {/* <ExerciseUseReducer /> */}
            <ExerciseUseContext />
            {/* <ExercisePureComponent /> */}
        </div>
    )
}