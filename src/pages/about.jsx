import Head from 'next/head'

import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'

export default function Home(props) {
  const { text, array, handleAdd, onChangeValue } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
      </Head>
      <Header />

      <input type="text" value={text} onChange={onChangeValue} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="about" />

      <Footer />

    </div>
  )
}
