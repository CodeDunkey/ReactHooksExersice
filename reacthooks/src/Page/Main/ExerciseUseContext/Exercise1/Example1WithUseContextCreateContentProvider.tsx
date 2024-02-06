import { ReactElement, createContext, useState } from "react";

export type Example1ContextValue = {
    theme: string,
    setTheme: (theme: string)=>void,
    fontFam: string,
    setFontFam: (fontFam: string)=>void,
}

export const Example1Context = createContext<Example1ContextValue>({
    theme: 'grey',
    setTheme: ()=>{},
    fontFam: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    setFontFam: ()=>{},
})


// this function is used to wrap the top component level that so that the children component can get the context provided
// the children prop is the prop that 
export const Example1ContextProvider = ({children}: {children: ReactElement}) => {
    // har skal state være og ikke i hooken da den vil få sin egen instans hvis det er i hooken.
    const [theme, setTheme] = useState<string>('grey')
 
    const [fontFam, setFontFam] = useState<string>("'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif")

    return (
        <Example1Context.Provider value={{theme, setTheme, fontFam, setFontFam}}>
            {children}
        </Example1Context.Provider>
    )
}