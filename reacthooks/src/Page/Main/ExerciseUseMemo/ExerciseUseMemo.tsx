import { Example1UseMemo } from './Example1/Example1'
import './ExerciseUseMemo.scss'
export const ExerciseUseMemo = () => {
    return (
        <div className="exerciseUseMemoWrapper">useMemo example
            <Example1UseMemo />
        </div>
    )
}

// common use-cases for useMemo:
// useMemo is a React Hook that lets you cache the result of a calculation between re-renders:
// #1: Skipping expensive recalculations
// #2: Skipping re-rendering of components
// #3: Memoizing a dependency of another Hook
// #4: Memoizing a function




// muligt eksempel at prøve: 