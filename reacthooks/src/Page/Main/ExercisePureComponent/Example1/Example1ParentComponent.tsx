import { useCallback, useMemo, useRef, useState } from "react";
import { Example1ChildPureClassComponent } from "./Example1ChildPureClassComponent"
import { Example1ChildPureFunctionComponent } from './Example1ChildPureFunctionComponent'
import { PropsForClass, PropsForFunction } from "./Example1Types";




export const Example1ParentComponent = () => {
    const [theme, setTheme] = useState<string>('white')
    const [theme2, setTheme2] = useState<string>('black')
    const [input, setInput] = useState<string>("")
    
    // the primitive value can be passed 
    const objForFunction2: string = input;

    // the object reference has to go in a callback with dependency 
    const objForFunction: PropsForFunction = {myObj: { a: 2, b: input, c: ()=>console.log('hello world', Math.random())}};
    const test = useCallback(()=> objForFunction, [objForFunction.myObj.b]);
    
    // only made to show that the useRef has no dependency, which means that the input can not be updated(changed)
    const testUseRef = useRef(test())
    // const objForClass: PropsForClass = {myObj: { a: 2, b: "hello", c: ()=>console.log('hello world', Math.random())}};
    // console.log('test() === objForFunction', test() === objForFunction);
    // console.log('test() === testUseRef.current', test() === testUseRef.current);
    // console.log('objForFunction === testUseRef.current', objForFunction === testUseRef.current);
    // console.log('objForFunction === test()', objForFunction === test());
    // console.log('test', test());
    console.log('parent render');

    const changeTheme = () => {
        setTheme(theme === 'white' ? 'black' : 'white'); 
        setTheme2(theme2 === 'black' ? 'white' : 'black');
    }

    return (
        <div className="example1ParentComponent" style={{backgroundColor: theme, color: theme2}} 
        >Parent Component
            <button onClick={()=> changeTheme()}>Change theme</button>
            <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
            {input}
            {/* <Example1ChildPureClassComponent props={objForClass}/> */}
            <Example1ChildPureFunctionComponent propObject={test()} propValue={objForFunction2}/>
            {/*   */}
        </div>
    )
}