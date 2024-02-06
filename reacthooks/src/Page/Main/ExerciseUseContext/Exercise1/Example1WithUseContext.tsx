import { Example1ContextProvider, Example1Context } from "./Example1WithUseContextCreateContentProvider"
import { ChildComponent1 } from "./ChildComponents/ChildComponent1"
import { useContext } from "react"

export const Example1WithUseContext = () => {

    const example1Context = useContext(Example1Context)

    return (
        <Example1ContextProvider>
            <div className="example1CaseWrapper">
                <p>Example 1 With UseContext</p>
                <p>parent component</p>
                <ChildComponent1 />
            </div>
        </Example1ContextProvider>
    )
}