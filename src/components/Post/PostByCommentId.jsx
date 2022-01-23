import Link from "next/link";
import { usePost } from "src/hooks/usePost"
import styles from 'src/components/Post/Post.module.css';

export const PostByCommentId = props => {
    const { data, error, isLoading } = usePost(props.id);

    if (isLoading) {
        return <div>ローディング中</div>
    }
    if (error) {
        return <div>{error.message}</div>
    }

    return (
        <Link href={`/posts/${data.id }`}><a className={styles.postbyComment}>{data?.title}</a></Link>
    )
}
