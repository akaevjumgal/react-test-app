import { createContext } from "react";

const initialState = {
    theme: 'light', // light or dark
    setTheme: () => null,
}

export const ThemeContext = createContext(initialState)
