import { ChildComponent3 } from "./ChildComponent3"
export const ChildComponent2 = () => {
    return (
        <div className="childComponentB">
            <p>b: child of a</p> 
            <ChildComponent3 />
        </div>
    )
}