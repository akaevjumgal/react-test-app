import { useContext } from "react"
import { ThemeContext } from './theme';

export default function ThemeButton({ children }) {

    const { theme, setTheme } = useContext(ThemeContext)

    const styles = {
        light: {
            background: 'orange',
            color: 'black',
        },
        dark: {
            background: 'black',
            color: 'white',
        }
    }

    return (
        <button 
            style={styles[theme]} 
            onClick={setTheme}
        >
            {children}
        </button>
    )
}