import Head from 'next/head'
import { Posts } from 'src/components/posts/posts';

import { Header } from 'src/components/header/Header'

export default function Home() {

  return (
    <div>
      <Head>
        <title>posts page</title>
      </Head>
      <Header />

      <Posts />
    </div>
  )
}
