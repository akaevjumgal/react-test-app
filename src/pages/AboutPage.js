import { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import Card from "../components/Card/Card";
import CardTitle from "../components/Card/CardTitle";
import { ModalContext } from "../ModalContext";
import CardContent from '../components/Card/CardContent';

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
            <Card>
                <CardTitle><h1>Carla Auditore</h1></CardTitle>
                <CardContent>Not Assasin</CardContent>
            </Card>
            <Card
                renderPriorities={PriorityOption}
            >
                <CardTitle><h1>Ezio Auditore</h1></CardTitle>
                <CardContent>Assasin Team Lead</CardContent>
            </Card>
            <button onClick={() => open(true)}>Open Modal</button>
        </div>
    )
}