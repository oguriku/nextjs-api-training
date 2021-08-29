import Link from "next/link"

import styles from 'src/components/header/Header.module.css'

export function Header() {
  const navItems = [
    { href: "/", label: " Index" },
    { href: "/posts", label: "Posts" },
    { href: "/users", label: "Users" },
    { href: "/comments", label: "Comments" }
  ]

  return (
    <header className={styles.header}>
      {navItems.map(item => {
        return (
          <Link href={item.href}>
            <a className={styles.anchor}>{item.label}</a>
          </Link>
        )
      })}
    </header>
  )
}
