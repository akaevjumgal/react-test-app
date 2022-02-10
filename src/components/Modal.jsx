import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from '../theme';
import { ModalContext } from '../ModalContext';

function Modal({ title, description, theme }) {
    const { open } = useContext(ModalContext)
    const styles = {
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.12)'
    }

    return (
        <div style={styles}>
            <div className={`${theme} c-${theme}`}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <button onClick={() => open(false)}>close</button>
        </div>
    )
}

export function ModalPortal() {
    const { theme } = useContext(ThemeContext)
    const { isOpen } = useContext(ModalContext)

    return ReactDOM.createPortal(
        isOpen ? <Modal title="Modal Title" description="Modal Description" theme={theme} /> : <div />, 
        document.querySelector('#modal-root')
    )
}