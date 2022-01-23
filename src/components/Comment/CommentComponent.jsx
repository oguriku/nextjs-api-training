import { PostByCommentId } from "src/components/Post/PostByCommentId";
import { useComment } from "src/hooks/useComment";
import styles from 'src/components/Comment/Comment.module.css';

export const CommentComponent = () => {

    const { data, error, isLoading } = useComment();

    if (isLoading) {
        return (<p>loding now ....</p>);
    }
    if (error) {
        return (<div>{error.message}</div>);
    }

    return (
        <div className={styles.comment}>
            <h1 className={styles.subTitle}>{data.body}</h1>
            <h2>元の記事</h2>
            <PostByCommentId id={data.postId}/>
        </div>
    )
}
