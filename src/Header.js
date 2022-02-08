
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './theme';
import ThemeButton from './ThemeButton';

export default function Header() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`header c-${theme}`}>
            <p>Главная</p>
            <Link to="/about"><p>О нас</p></Link>
            <ThemeButton>Mode</ThemeButton>
        </div>
    )
}