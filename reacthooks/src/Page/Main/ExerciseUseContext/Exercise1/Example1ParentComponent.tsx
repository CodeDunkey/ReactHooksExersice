import { ContextProvider } from "./UseContextCreateContextProviderUseHook"
import { ChildComponent1 } from "./ChildComponents/ChildComponent1"
import './Exercise1.scss'

export const Example1WithUseContext = () => {
    // the parent component and all the children down the tree is provided with the context
    return (
        <ContextProvider>
            <div className="example1CaseWrapper">
                <p>Example 1</p>
                <p>parent component is provided the theme and font</p>
                <ChildComponent1 />
            </div>
        </ContextProvider>
    )
}