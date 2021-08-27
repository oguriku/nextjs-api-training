import Link from "next/link"

import styles from 'src/components/Header.module.css'

export function Header() {
  return (
      <header className={styles.header}>
        <Link href="/posts">
            <a className={styles.anchor}>Posts</a>
        </Link>
        <Link href="/about">
            <a className={styles.anchor}>About</a>
        </Link>
      </header>
  )
}
