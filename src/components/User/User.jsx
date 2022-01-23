
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";
import styles from 'src/components/User/User.module.css';

export const UserComponent = () => {
    const { data, error, isLoading } = useUser();

    if (isLoading) {
        return (<p>loding now ....</p>);
    }
    if (error) {
        return (<div>{error.message}</div>);
    }

    return (
        <div className={styles.user}>
            <h1 className={styles.subTitle}>{data.name}</h1>
            <ul className={styles.userInformation}>
                <li>email : {data.email}</li>
                <li>user name : {data.username}</li>
                <li>city : {data.address.city}</li>
                <li>phone : {data.phone}</li>
                <li>website : {data.website}</li>
                <li>company : {data.company.name}</li>
            </ul>
            <PostsByUserId id={data.id} name={data.name}/>
        </div>
    )
}
