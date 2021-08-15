import { useInputArray } from 'src/hooks/useInputArray';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const inputArray = useInputArray();

  return <Component {...pageProps} {...inputArray} />
}

export default MyApp
