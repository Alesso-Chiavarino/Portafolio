import { useContext, useEffect, useState } from "../config/import.config.js";
import { createContext } from "react";

interface ThemeContext {
    isDark: boolean,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContext>({ isDark: true, toggleTheme: () => { } })

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [isDark, setIsDark] = useState<boolean>(true);

    const toggleTheme = () => {
        setIsDark(!isDark)
        localStorage.setItem('theme', JSON.stringify(!isDark))
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme === null) {
            localStorage.setItem('theme', JSON.stringify(isDark))
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
