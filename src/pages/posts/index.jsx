import Head from 'next/head'
import { Posts as PostsComponent } from 'src/components/Posts/posts';

import { Header } from 'src/components/Header/Header'

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
