import { Fragment, useContext } from 'react'
import './Card.css'
import { ThemeContext } from '../../theme';
import CardTitle from './CardTitle';
import CardContent from './CardContent';

const PRIORITIES = [
    {
        label: 'Junior',
        value: 'JUNIOR',
    },
    {
        label: 'Middle',
        value: 'Middle',
    },
    {
        label: 'Senior',
        value: 'SENIOR',
    }
]

function defaultRenderPriorities({ label, value }) {
    return (
        <label style={{ margin: '0 0.2rem' }} value={value}>{label}</label>
    )
}

export default function Card({ 
    children,
    renderPriorities = defaultRenderPriorities 
}) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`card card-${theme} c-${theme}`}>
            {children}
            {PRIORITIES.map(({ label, value }) => 
                <Fragment key={label}>
                    {renderPriorities({ label, value })}
                </Fragment>
            )}
        </div>
    )
}