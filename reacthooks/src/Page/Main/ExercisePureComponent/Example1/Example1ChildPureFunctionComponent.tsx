import { memo, useState } from "react";
import { PropsForFunction } from "./Example1Types";

// const MemoFunction = memo(({}) => {
//     return(
//         <div>memo function</div>
//     )
// })
// 
export const Example1ChildPureFunctionComponent = memo(({ propObject, propValue }: { propObject: PropsForFunction, propValue: string }) => {

    const [theme, setTheme] = useState('white')
    const [theme2, setTheme2] = useState<string>('black')
    // 
    console.log('propObject', propObject);
    console.log('child render'); // , new Date().toLocaleTimeString()
    const changeTheme = () => {
        setTheme(theme === 'white' ? 'black' : 'white');
        setTheme2(theme2 === 'black' ? 'white' : 'black');
    }
    return (
        <div className="example1ChildPureComponent" style={{ backgroundColor: theme, color: theme2 }}>Child Pure Function Component
            <p>passing an object: {propObject.myObj.a}</p>
            <p>passing an object: {propObject.myObj.b}</p>
            <p>passing a primitive value: {propValue}</p>
            <button onClick={() => changeTheme()}>Change theme</button>
            <button onClick={() => propObject.myObj.c()}>callback function</button>
            {/* <MemoFunction /> */}

        </div>
    )

})

// export const Example1ChildPureFunctionComponent = memo(Example1ChildPureMemoFunctionComponent);

// function component wrapped med "memo" = class Example extends PureComponent {}
// button callback function må ikke trigger en re-render