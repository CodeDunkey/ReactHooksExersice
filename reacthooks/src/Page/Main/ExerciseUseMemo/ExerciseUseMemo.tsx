import { Example1WithoutUseMemo } from './Example1/Example1WithoutUseMemo'
import { Example1WithUseMemo } from './Example1/Example1WithUseMemo'
import './ExerciseUseMemo.scss'
export const ExerciseUseMemo = () => {
    return (
        <div className="exerciseUseMemoWrapper">useMemo example
            <div className="example1Wrapper">
                <Example1WithoutUseMemo />
                <Example1WithUseMemo />
            </div>
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