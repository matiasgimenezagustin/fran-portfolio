import React, {useContext, createContext, useEffect, useState} from 'react'


export const GlobalContext = createContext()

const GlobalContextProvider = ({children}) => {
    
    

    let KEY_GLOBAL = 'STATE_PORTFOLIO'

    let initialState = {lenguage: "es", theme: 'dark'}
    let currentState = localStorage.getItem(KEY_GLOBAL)
    if(currentState){
        initialState = JSON.parse(currentState)
    }
    else{
        localStorage.setItem(KEY_GLOBAL, JSON.stringify(initialState))
    }

    

    const [globalState, setGlobalState] = useState(initialState)

    const handleChangeLenguage = () =>{
        if(globalState.lenguage == 'es'){
            setGlobalState({...globalState, lenguage: 'en'})
        }
        else{
            setGlobalState({...globalState, lenguage: 'es'})
        }
    }
    const handleChangeTheme = () =>{
        if(globalState.theme == 'light'){
            setGlobalState({...globalState, theme: 'dark'})
            document.documentElement.style.setProperty('--bg-color', 'rgba(18, 14, 14, 1)');
            document.documentElement.style.setProperty('--text-color', 'rgba(240, 245, 241, 1)');
        }
        else{
            setGlobalState({...globalState, theme: 'light'})
            document.documentElement.style.setProperty('--bg-color', 'rgba(233, 252, 252, 1)');
            document.documentElement.style.setProperty('--text-color', 'rgba(10, 15, 11, 1)');

        }
    }
    let isLight = globalState.theme === 'light'
    let isEsp = globalState.lenguage === 'es'
    return (
        <GlobalContext.Provider value={{handleChangeLenguage, handleChangeTheme, isLight, isEsp}}>{children}</GlobalContext.Provider>
    )
}

export const useGlobalContext = ( ) => useContext(GlobalContext)

export default GlobalContextProvider