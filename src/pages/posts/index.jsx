import Head from 'next/head'
import { Posts } from 'src/components/posts/posts';

import { Header } from 'src/components/header/Header'
import styles from 'src/styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />

      <Posts />
    </div>
  )
}
