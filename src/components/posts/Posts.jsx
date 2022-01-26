import Link from "next/link";

import { usePosts } from "src/hooks/useFetchArray";
import styles from 'src/components/Posts/Posts.module.css';

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
        <div className={styles.postslist}>
            <h2 className={styles.subTitle}>Posts</h2>
            <ol>
                {data.map(post => {
                    return (
                        <li className={styles.post} key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}
