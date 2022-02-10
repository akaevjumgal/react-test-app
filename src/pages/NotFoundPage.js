import { useContext } from "react"
import { ModalContext } from "../ModalContext"

export default function NotFoundPage() {
    const { open } = useContext(ModalContext)

    return (
        <div>
            <h1>404 Page Not Found</h1>
            <button onClick={() => open(true)}>Open Modal</button>
        </div>
    )
}