import Layout from '../components/Layout'
// import '../styles/globals.css'
import app from '../styles/App.module.css'

function MyApp ({ Component, pageProps }) {
  return (
    <div className={app.app}>
      <Layout>
        <div className={app.content}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  )
}

export default MyApp;
