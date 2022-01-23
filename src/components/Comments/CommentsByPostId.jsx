import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";
import styles from 'src/components/Comments/Comments.module.css';

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
        <div>
            <h1 style={{fontSize:"2rem"}} className={styles.subTitle}>Comments</h1>
            <ol>
                {data.map(comment => {
                    return (
                        <li className={styles.commentlist} key={comment.id}>
                            <Link href={`/comments/${comment.id}`}>
                                <a>{comment.body}</a>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}
