import { useState } from "react";
import { Example1ChildPureComponent } from "./Example1ChildPureComponent"
export const Example1ParentComponent = () => {
    const [theme, setTheme] = useState('white')
    const changeTheme = () => {

    }

    const obj = { a: 2, b: "hello", c: ()=>console.log('hello world')};

    console.log('parent render');
    return (
        <div className="example1ParentComponent" style={{backgroundColor: theme}} 
        >Parent Component
            <button onClick={()=> setTheme(theme === 'white' ? 'black' : 'white')}>Change theme</button>
            <Example1ChildPureComponent myObj={obj}/>
        </div>
    )
}