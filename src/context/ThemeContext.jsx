import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;
