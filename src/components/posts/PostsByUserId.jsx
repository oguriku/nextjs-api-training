import Link from "next/link"

import { usePostsByUserId } from "src/hooks/useFetchArray";
import styles from 'src/components/Posts/Posts.module.css';

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
        <div>
            <h1 className={styles.subTitle}>Posts by<br/> {props.name}</h1>
            <ol>
                {data.map((post) => {
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
