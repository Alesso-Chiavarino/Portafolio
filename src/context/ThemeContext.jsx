import { useContext, useEffect, useState } from "../config/import.config.js";
import { createContext } from "react";
const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(!isDark)
        localStorage.setItem('theme', JSON.stringify(!isDark))
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme === null) {
            localStorage.setItem('theme', isDark)
        } else {
            setIsDark(JSON.parse(storedTheme))
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;
