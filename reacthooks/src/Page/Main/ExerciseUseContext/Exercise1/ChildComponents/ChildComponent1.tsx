import { ChildComponent2 } from "./ChildComponent2"
export const ChildComponent1 = () => {
    return (
        <div className="childComponent">
            <p>a: child of parent</p> 
            <ChildComponent2 />
        </div>
    )
}