import Head from "next/head";

import { Header } from "src/components/header/Header";
import { UsersComponent } from "src/components/Users/Users";

const Users = () => {

    return (
        <div>
            <Head>
                <title>Users Page</title>
            </Head>
            <Header />
            <UsersComponent />
        </div>
    )
}

export default Users;
