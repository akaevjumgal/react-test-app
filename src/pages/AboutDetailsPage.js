import { useEffect } from "react"
import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function AboutDetailsPage() {
    const params = useParams()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const query = Object.fromEntries([...searchParams])

    useEffect(() => {
        if (query.isAuth === "false") {
            navigate('/about', { replace: true })
        }
        setSearchParams({
            ...query,
            isUser: false,
        })
    }, [])
    
    return (
        <div>Details Page {params.aboutId}
            <Outlet />
        </div>
    )
}