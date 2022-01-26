import Head from 'next/head'

import { Posts as PostsComponent } from 'src/components/Posts/posts';

const Posts = () => {

  return (
    <div>
      <Head>
        <title>posts page</title>
      </Head>
      <PostsComponent />
    </div>
  )
}
export default Posts;
