// import '../styles/globals.scss'
/**Wrap entire site with SiteLayout for global header, footer etc.  */
import SiteLayout from "../src/components/site-layout "

export default function App({ Component, pageProps }) {
  return (
    <SiteLayout>
     <Component {...pageProps} />
  </SiteLayout>
  )
}