import styles from 'src/components/title/Title.module.css';

export const Title = (props) => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                {props.title}
            </h1>
        </div>
    )
}
