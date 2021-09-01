import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = props => {
    const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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
            <h1>Comments</h1>
            {data.map(comment => {
                return (
                    <li key={comment.id}>
                        <Link href={`/comments/${comment.id}`}>
                            <a>{comment.body}</a>
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
}
