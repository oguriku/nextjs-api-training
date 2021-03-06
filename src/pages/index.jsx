import Head from 'next/head'
import { CommentsComponent } from 'src/components/Comments/Comments';

import { Posts } from 'src/components/Posts/Posts'
import { Title } from 'src/components/Title/Titile';
import { UsersComponent } from 'src/components/Users/Users';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Title title="JSONplaceholder" />
      <UsersComponent/>
      <Posts/>
      <CommentsComponent/>
    </div>
  )
};
export default Home;
