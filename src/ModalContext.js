import { createContext, useState } from "react";

const initialState = {
    isOpen: false,
    open: () => null,
}

export const ModalContext = createContext(initialState)

export const useModal = () => {
    const [isOpen, openModal] = useState(false)

    return { isOpen, openModal}
}