import './Tab.css'
// props: active, label (children)

export const withBorders = (PassedTab) => {
    return (props) => {

        const styles = {
            border: '1px solid seagreen'
        }

        return <div style={styles}>
            <PassedTab {...props} />
        </div>
    }
}

export default function Tab({ active, children, onClick }) {
    return (
        <div className={active ? 'active' : undefined} onClick={onClick}>
            {children}
        </div>
    )
}