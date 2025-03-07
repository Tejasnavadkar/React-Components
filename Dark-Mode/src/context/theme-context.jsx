import {createContext, useContext, useEffect, useState } from "react";
// import { themeContext } from "./CreateContext";




 
export const themeContext = createContext({})


export const useTheme = () =>{

   const theme = useContext(themeContext)

   return theme
}



export const ContextProvider = ({children}) =>{

   const [isDark,setIsDark] = useState(false)  

   const themToggle = () =>{
    setIsDark(prev=>!prev)
   }
   const theme = isDark ? 'dark' : 'light' 

   useEffect(()=>{

      document.documentElement.setAttribute('theme-mode',theme)

   },[isDark])

    return <themeContext.Provider value={{theme,themToggle}}>
           {children}
    </themeContext.Provider>
}

