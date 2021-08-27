import Head from 'next/head'


import { Header } from 'src/components/header/Header'

const Index = () => {

  return (
    <div>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONplaceholderのAPIを色々叩いてみるよ</p>

    </div>
  )
};

export default Index;
