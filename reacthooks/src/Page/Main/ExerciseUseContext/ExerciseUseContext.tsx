import { Example1WithUseContext } from './Exercise1/Example1WithUseContext'
import './ExerciseUseContext.scss'
export const ExerciseUseContext = () => {
    return (
        <div className="exerciseUseContextWrapper">useContext example
            <Example1WithUseContext />
        </div>
    )
}

// common use-cases for useContext:
// useContext is a React Hook that lets you read and subscribe to context from your component.
// #1: Passing data deeply into the tree
// #2: Updating data passed via context
// #3: Specifying a fallback default value
// #4: Overriding context for a part of the tree
// #5: Optimizing re-renders when passing objects and functions

// muligt eksempel at prøve:
// Example1: passing data without "prop-drilling".