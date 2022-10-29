import '../styles/globals.css'
import Header from "../src/views/components/Header";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Header/>
          <Component {...pageProps} />
      </>
  )
}

export default MyApp
