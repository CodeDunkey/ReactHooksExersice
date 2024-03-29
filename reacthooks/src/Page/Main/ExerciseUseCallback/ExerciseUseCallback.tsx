import { Example1WithoutUseCallback } from "./Exercise1/Example1WithoutUseCallback"
import { Example1WithUseCallback } from "./Exercise1/Example2WithUseCallback"
import './ExerciseUseCallback.scss'
export const ExerciseUseCallback = () => {
    return (
        <div className="exerciseUseCallbackWrapper">useCallback example
            <div className="example1Wrapper">
                <Example1WithoutUseCallback />
                <Example1WithUseCallback />
            </div>
        </div>
    )
}

// common use-cases for useCallback:
// useCallback is a React Hook that lets you cache a function definition between re-renders.
// #1: Skipping re-rendering of components
// #2: Updating state from a memoized callback
// #3: Preventing an Effect from firing too often
// #4: Optimizing a custom Hook

// muligt eksempel at prøve: 