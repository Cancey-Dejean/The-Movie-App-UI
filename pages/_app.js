import Layout from "../components/Layout"
import "../styles/globals.css"

function MyApp({ Component, pageProps, handleModal }) {
  return (
    <Layout handleModal={handleModal}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
