
import Head from "next/head";
import { Header } from "src/components/header/Header";


const User = () => {

    return (
        <div>
            <Head>
                <title>Users Page</title>
            </Head>
            <Header />
            <UserComponent />
        </div>
    )
}

export default User;
