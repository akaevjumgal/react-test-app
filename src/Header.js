
import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './theme';
import ThemeButton from './ThemeButton';

export default function Header() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`header c-${theme}`}>
            <p>Главная</p>
            <p>О нас</p>
            <ThemeButton>Mode</ThemeButton>
        </div>
    )
}