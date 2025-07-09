import {createContext, useState} from 'react'

export const NameContext = createContext();

export const NameContextProvider = (props) => {
  let [theme,setTheme] = useState('light');
  return (
    <NameContext.Provider value={{theme, setTheme}}>
    {props.children}
    </NameContext.Provider>
  )
}