import Head from "next/head";

import { UsersComponent } from "src/components/Users/Users";

const Users = () => {

    return (
        <div>
            <Head>
                <title>Users Page</title>
            </Head>
            <UsersComponent />
        </div>
    )
}

export default Users;
