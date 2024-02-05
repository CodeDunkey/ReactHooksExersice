import { Example1WithoutUseReducer } from './Exercise1/Example1WithoutUseReducer'
import { Example1WithUseReducer } from './Exercise1/Example1WithUseReducer'
import './ExerciseUseReducer.scss'
export const ExerciseUseReducer = () => {
    return (
        <div className="exerciseUseReducerWrapper">useReducer example
            <div className="example1Wrapper">
                {/* <Example1WithoutUseReducer /> */}
                <Example1WithUseReducer />
            </div>
        </div>
    )
}

// common use-cases for useReducer:
// useReducer is a React Hook that lets you add a reducer to your component.
// #1: Adding a reducer to a component
// #2: Writing the reducer function
// #3: Avoiding recreating the initial state

// muligt eksempel at prøve: 