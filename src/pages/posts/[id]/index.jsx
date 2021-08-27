
import { Header } from 'src/components/header/Header'
import { Post } from 'src/components/Post/Post'
import styles from 'src/styles/Home.module.css'


const PostId = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Post />
        </div>
    )
}
export default PostId;
