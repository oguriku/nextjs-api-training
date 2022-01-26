import Head from "next/head";

import { CommentsComponent } from "src/components/Comments/Comments";

const Comments = () => {

    return (
        <div>
            <Head>
                <title>Users Page</title>
            </Head>
            <CommentsComponent />
        </div>
    )
}

export default Comments;
