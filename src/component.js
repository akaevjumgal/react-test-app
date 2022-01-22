import { useEffect, useState } from "react"

export default function HelloWorld({ message, isActive = false, activate, children }) {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json()
        setPosts(result)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [isActive])

    return (
        <div className={isActive ? 'active' : undefined}>
            {loading && 'Loading...'}
            {posts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    )
}