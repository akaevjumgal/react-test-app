import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
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
                    <List key={comment.id}>
                        <ListItem>
                            <Grid container>
                                <Grid item>
                                    <Grid container alignItems="center">
                                        <Avatar style={{ marginRight: '1rem' }}>
                                            {comment.email.substring(0, 2)}
                                        </Avatar>
                                        <ListItemText>{comment.email}</ListItemText>
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