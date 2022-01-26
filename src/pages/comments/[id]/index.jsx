
import Head from "next/head";

import { CommentComponent } from "src/components/Comment/CommentComponent";
const Comment = () => {

    return (
        <div>
            <Head>
                <title>Users Page</title>
            </Head>
            <CommentComponent />
        </div>
    )
}

export default Comment;
