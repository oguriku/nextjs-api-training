import Head from "next/head";
import { CommentsComponent } from "src/components/Comments/Comments";

import { Header } from "src/components/header/Header";

const Comments = () => {

    return (
        <div>
            <Head>
                <title>Users Page</title>
            </Head>
            <Header />
            <CommentsComponent />
        </div>
    )
}

export default Comments;
