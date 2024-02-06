import './ExercisePureComponent.scss'
import { Example1ParentComponent } from './Example1/Example1ParentComponent'
export const ExercisePureComponent = () => {
    return (
        <div className='exercisePureComponent'>Exercise PureComponent
            <Example1ParentComponent />
        </div>
    )
}

// In example 1, there must be a prant and a child component. The parent component must have a button that sets a state that triggers
// a re-render. But the child component must NEVER re-render.
// first the example must be made without a prop to the child. Second the example must be made with a prop to the child.