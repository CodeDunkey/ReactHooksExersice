import { memo, useState } from "react";
import { PropsForFunction } from "./Example1Types";

// const MemoFunction = memo(({}) => {
//     return(
//         <div>memo function</div>
//     )
// })
// 

interface Example1ChildPureFunctionComponentProps {
    myObj: { a: number, b: string};
    myCallback: () => void;
}

export const Example1ChildPureFunctionComponent = memo(({ myObj, myCallback }: Example1ChildPureFunctionComponentProps) => {
     
    console.log('myObjt', myObj);
    console.log('child render'); // , new Date().toLocaleTimeString()
    return (
        <div className="example1ChildPureComponent">Child Pure Function Component
            <p>passing an object: {myObj.a}</p>
            <p>passing an object: {myObj.b}</p>
            <button onClick={myCallback}>callback function</button>
            {/* <MemoFunction /> */}

        </div>
    )

})

// export const Example1ChildPureFunctionComponent = memo(Example1ChildPureMemoFunctionComponent);

// function component wrapped med "memo" = class Example extends PureComponent {}
// button callback function må ikke trigger en re-render