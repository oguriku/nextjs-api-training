import styles from 'src/Layout/Layout.module.css'

export const Layout = props => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
