import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../utils"

export default function MaterialDetailsPage() {
    const [comments, setComments] = useState([])
    const { postId } = useParams()

    const { data: post } = useFetch({
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    })

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

    console.log(post)

    return (
            <div>
                {post && (
                    <div>
                        {post.title}
                        {post.body}
                    </div>
                )}
                {comments.map((comment) => (
                    <List key={comment.id}>
                        <ListItem>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container alignItems="center">
                                        <Avatar src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024" style={{ marginRight: '1rem' }}>
                                            {comment.email.substring(0, 2)}
                                        </Avatar>
                                        <Typography>{comment.email}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        {comment.name}
                                    </Typography>
                                    <Typography variant="caption">
                                        {comment.body}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                ))}
            </div>
    )
}