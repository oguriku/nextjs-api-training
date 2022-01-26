import Head from "next/head";

import { useRouter } from "next/dist/client/router";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { usePost } from "src/hooks/usePost";
import styles from 'src/components/Post/Post.module.css';

export const Post = () => {
    const router = useRouter();
    const { data, error, isLoading } = usePost(router.query.id);

    if (isLoading) {
        return (<p>loding now ....</p>);
    }
    if (error) {
        return (<div>{error.message}</div>);
    }
    

    return (
        <div className={styles.post}>
            <Head>
                <title>{data?.title}</title>
            </Head>
            <h1 className={styles.subTitle}>{data?.title}</h1>
            <p>{data?.body}</p>
            <UserByUserId id={data.userId}/>
            <CommentsByPostId id={data.id} />
        </div>
    )
}
