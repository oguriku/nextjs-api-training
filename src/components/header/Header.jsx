import Link from "next/link"

import styles from 'src/components/header/Header.module.css'

export function Header() {
  return (
      <header className={styles.header}>
        <Link href="/">
            <a className={styles.anchor}>Index</a>
        </Link>
        <Link href="/posts">
            <a className={styles.anchor}>Posts</a>
        </Link>
      </header>
  )
}
