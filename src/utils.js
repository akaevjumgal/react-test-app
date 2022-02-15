import { useEffect, useState } from "react"

export const useFetch = ({ url, initialState }) => {
    const [data, setData] = useState(initialState)

    const fetchResourse = async () => {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
    }

    useEffect(() => {
        fetchResourse()
    }, [])

    return { data }
}