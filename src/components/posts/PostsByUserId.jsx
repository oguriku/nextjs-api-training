import Link from "next/link"
import { usePostsByUserId } from "src/hooks/useFetchArray"

export const PostsByUserId = props => {
    const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

    if (isLoading) {
        return (<p>loding now ....</p>);
    }
    if (error) {
        return (<div>{error.message}</div>);
    }
    if (isEmpty) {
        return (<h1>データがありません。</h1>);
    }


    return (
        <ol>
            <h1>Posts</h1>
            {data.map((post) => {
                return (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
}
