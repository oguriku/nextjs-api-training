import Link from "next/link"

import styles from 'src/components/header/Header.module.css'

export function Header() {
  const navItems = [
    { href: "/", label: " Home" },
    { href: "/users", label: "Users" },
    { href: "/posts", label: "Posts" },
    { href: "/comments", label: "Comments" }
  ]

  return (
    <header className={styles.header}>
      {navItems.map(item => {
        return (
          <Link href={item.href} key={item.href}>
            <a className={styles.anchor}>{item.label}</a>
          </Link>
        )
      })}
      <h1></h1>
    </header>
  )
}
