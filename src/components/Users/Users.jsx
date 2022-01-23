import Link from "next/link"
import { useUsers } from "src/hooks/useFetchArray";
import styles from 'src/components/Users/Users.module.css';

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
        <ol className={styles.users}>
            <h1 className={styles.subTitle}>Users</h1>
            {data.map(user => {
                return (
                    <li className={styles.usersList} key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
}
