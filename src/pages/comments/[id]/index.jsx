
import Head from "next/head";

import { CommentComponent } from "src/components/Comment/CommentComponent";
import { Header } from "src/components/Header/Header";

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
