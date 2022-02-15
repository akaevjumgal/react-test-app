import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MaterialDetailsPage() {
    const [comments, setComments] = useState([])
    const { postId } = useParams()

    const fetchComments = async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        )
        const result = await response.json()
        setComments(result)
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <Typography>{comment.name}</Typography>
                    <Typography>{comment.email}</Typography>
                    <Typography>{comment.body}</Typography>
                </div>
            ))}
        </div>
    )
}