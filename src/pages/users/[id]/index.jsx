
import Head from "next/head";
import { Header } from "src/components/Header/Header";
import { UserComponent } from "src/components/User/User";


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
