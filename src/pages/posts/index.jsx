import Head from 'next/head'
import { Posts as PostsComponent } from 'src/components/posts/posts';

import { Header } from 'src/components/header/Header'

const Posts = () => {

  return (
    <div>
      <Head>
        <title>posts page</title>
      </Head>
      <Header />

      <PostsComponent />
    </div>
  )
}
export default Posts;
