import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Header } from "src/components/header/Header";
import { fetcher } from "src/utils/fetcher"
import useSWR from "swr"

const useComment = () => {
    const router = useRouter();
    const { data, error } = useSWR(router.query.id ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`: null, fetcher);

    return {
        data,
        error,
        isLoading: !error && !data,
        isEmpty: data && data.length === 0,
    };
}

const CommentComponent = () => {

    const { data, error, isLoading } = useComment();

    if (isLoading) {
        return (<p>loding now ....</p>);
    }
    if (error) {
        return (<div>{error.message}</div>);
    }

    return (
        <div>
            <h1>{data.body}</h1>
            <ul>
                <li>{data.name}</li>
                <li>{data.email}</li>
            </ul>
        </div>
    )
}

const Comment = () => {

    return (
        <div>
            <Head>
                <title>Users Page</title>
            </Head>
            <Header />
            <CommentComponent />
        </div>
    )
}

export default Comment;
