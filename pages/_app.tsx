// import '../styles/globals.scss'
/**Wrap entire site with SiteLayout for global header, footer etc.  */
import SiteLayout from "../src/components/site-layout"
import "../src/services/font-awesome";
import "src/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <SiteLayout>
     <Component {...pageProps} />
  </SiteLayout>
  )
}