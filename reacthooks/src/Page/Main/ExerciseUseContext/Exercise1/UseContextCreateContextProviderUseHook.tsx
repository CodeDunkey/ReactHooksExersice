import { ReactElement, createContext, useState, useContext } from "react";


// here the context is created and then returned in the useContext as a 
// custom hook which can be used i the child components.
const ThemeContext = createContext<string>("")
export const useTheme = () => { return useContext(ThemeContext) }


const ChangeTheme = createContext<any>("")
export const useSetTheme = () => { return useContext(ChangeTheme) }

// this function is used to wrap the top component level with so that the children component can get the context provided
// the children prop is the prop that 
export const ContextProvider = ({ children }: { children: ReactElement }) => {
    // har skal state være og ikke i hooken da den vil få sin egen instans hvis det er i hooken.
    const [theme, setTheme] = useState<string>('grey')
    
    return (
        <ThemeContext.Provider value={theme}>
            <ChangeTheme.Provider value={setTheme}>
                {children}
            </ChangeTheme.Provider>
        </ThemeContext.Provider>
    )
}