import Link from "next/link";
import { usePosts } from "src/hooks/useFetchArray";


export const Posts = () => {
    const { data, error, isLoading, isEmpty } = usePosts();

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
            {data.map(post => {
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
