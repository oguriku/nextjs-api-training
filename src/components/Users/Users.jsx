import Link from "next/link"

import { useUsers } from "src/hooks/useUsers";

export const UsersComponent = () => {

    const { data, error, isLoading, isEmpty } = useUsers();

    if (isLoading) {
        return (<p>loding now ....</p>);
    }
    if (error) {
        return (<div>{error.message}</div>);
    }
    if (isEmpty) {
        return (<h1>データがありません。</h1>);
    }

    return (
        <ol>
            <h1>Users</h1>
            {data.map(user => {
                return (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>

                )
            })}
        </ol>
    )
}
