import { Card, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardContent from '../components/Card/CardContent'
import { useFetch } from '../utils'

export default function MaterialPage() {
    // состояние где хранится список постов
    // const [posts, setPosts] = useState([])

    // функция для подгрузки постов из удаленного источника
    // const fetchPosts = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const result = await response.json()
    //     setPosts(result)
    // }

    // выполнение функции подгрузки
    // useEffect(() => {
    //     fetchPosts()
    // }, [])

    const { data: posts } = useFetch({ 
        url: 'https://jsonplaceholder.typicode.com/posts', initialState: [] 
    })

    return (
        <div style={{ padding: '1rem' }}>
            {posts.map((post) =>
                <Link key={post.id} to={`/material/${post.id}`}>
                    <Card style={{ margin: '0.5rem 0', padding: '0 0.5rem' }}>
                        <CardContent>
                            <Typography variant="body1">{post.title}</Typography>
                            <Typography variant="caption">{post.body}</Typography>
                        </CardContent>
                    </Card>
                </Link>
            )}
        </div>
    )
}