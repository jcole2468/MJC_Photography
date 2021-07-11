import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="bg-blue">
    <Component {...pageProps} className="bg-blue" />
    </Layout>
  )
}

export default MyApp
