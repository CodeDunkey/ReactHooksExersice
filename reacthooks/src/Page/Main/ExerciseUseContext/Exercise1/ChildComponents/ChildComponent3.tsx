import { useTheme, useSetTheme } from "../UseContextCreateContextProviderUseHook";
export const ChildComponent3 = () => {
    
    const theme = useTheme()
    const SetTheme = useSetTheme()
    
    const changeTheme = ()=>{
        if(theme === 'grey'){
            SetTheme('darkgrey')
        }
        if(theme === 'darkgrey'){
            SetTheme('grey')
        }
    };
    
    return (
        <div className="childComponentC" style={{backgroundColor: theme}}>
            <p>c: child of b. Is getting the theme and font without props</p>
            <button onClick={()=>changeTheme()}>Change theme</button>
        </div>
    )
}