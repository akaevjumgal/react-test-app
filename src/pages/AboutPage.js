import { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import Card from "../components/Card/Card";
import { ModalContext } from "../ModalContext";

function PriorityOption({ label, value }) {
    const styles = {
        border: '1px solid firebrick',
        borderRadius: '6px',
        padding: '0.5rem 1rem'
    }

    return (<span style={styles}>{label}</span>)
}

export default function AboutPage() {
    const { open } = useContext(ModalContext)

    return (
        <div>
            <h1>About Us Page</h1>
            <Card
                title={<h1>Carla Auditore</h1>} 
                body={<p>Not Assasin</p>}
            />
            <Card
                title={<h1>Ezio Auditore</h1>} 
                body={<p>Assasin Team Lead</p>}
                renderPriorities={PriorityOption}
            />
            <button onClick={open(true)}>Open Modal</button>
        </div>
    )
}