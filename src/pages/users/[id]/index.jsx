
import Head from "next/head";

import { UserComponent } from "src/components/User/User";


const User = () => {

    return (
        <div>
            <Head>
                <title>Users Page</title>
            </Head>
            <UserComponent />
        </div>
    )
}

export default User;
