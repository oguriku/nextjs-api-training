
import { useCallback, useEffect, useState } from 'react'

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState(null);

    const getPosts = useCallback(async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) {
                throw new Error("エラーが発生したため、データ取得に失敗しました。")
            }
            const json = await res.json();
            setPosts(json);
        } catch (error) {
            setError(error);
        }
        setLoding(false);
    }, [])

    useEffect(() => {
        getPosts();
    }, [getPosts])

    if (loading) {
        return (<p>loding now ....</p>);
    }
    if (error) {
        return (<div>{error.message}</div>);
    }
    if (posts.length === 0) {
        return (<h1>データがありません。</h1>);
    }


    return (
        <ol>
            {posts.map(post => {
                return (
                    <li key={post.id}>{post.title}</li>
                )
            })}
        </ol>
    )
}
