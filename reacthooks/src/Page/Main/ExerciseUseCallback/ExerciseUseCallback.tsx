import { Example1UseCallback } from "./Exercise1/Example1"
import './ExerciseUseCallback.scss'
export const ExerciseUseCallback = () => {
    return (
        <div className="exerciseUseCallbackWrapper">useCallback example
            <Example1UseCallback />
        </div>
    )
}

// common use-cases for useCallback:
// To store persistent values that does Not trigger a re-render:
// #1: Skipping re-rendering of components
// #2: Updating state from a memoized callback
// #3: Preventing an Effect from firing too often
// #4: Optimizing a custom Hook

// muligt eksempel at prøve: 