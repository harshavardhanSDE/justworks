import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light'); 

    const toggleTheme = () => {
        setTheme(
            (prevTheme) => {
                if (prevTheme === 'light') {
                  return 'dark';
                } else if (prevTheme === 'dark') {
                  return 'light';
                }
              }
        ); 
    }; 

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    ); 

}; 

const useTheme = () => useContext(ThemeContext); 

export {
    ThemeProvider, 
    useTheme,
}

