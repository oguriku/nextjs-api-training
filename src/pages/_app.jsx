
import { Header } from 'src/components/Header/Header'
import { Layout } from 'src/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Header/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
