import Link from "next/link";

import { useComments } from "src/hooks/useFetchArray";
import styles from 'src/components/Comments/Comments.module.css';


export const CommentsComponent = () => {

    const { data, error, isLoading, isEmpty } = useComments();

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
        <ol className={styles.comments}>
            <h1 className={styles.subTitle}>Comments</h1>
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
    )
}
