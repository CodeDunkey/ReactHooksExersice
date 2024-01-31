import { useRef } from 'react'
import './ExerciseUseRef.scss'
export const ExerciseUseRef = () => {

    

    const ref1 = useRef()    

    return (
        <div className='exerciseUseRef'>useRef example
            <div>

            </div>
        </div>
    )
}


// common use-cases for useRef:
// To store persistent values that does Not trigger a re-render:
// #1: Accessing DOM elements
// #2: Storing previous values
// #3: Working with external libraries
// #1: 
// #1:

// muligt eksempel at prøve: 