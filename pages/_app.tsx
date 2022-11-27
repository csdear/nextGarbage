// import '../styles/globals.scss'
/**Wrap entire site with SiteLayout for global header, footer etc.  */
import SiteLayout from "../src/components/site-layout"
import type { AppComponent } from "next/dist/shared/lib/router/router";
// I dont think the following does anything.. page index.tsx FA icons still render.
// So I dont think the tsconfig for paths is working properly.
// import "../src/services/font-awesome";
// import "@services/font-awesome";
// import "../src/services/font-awesome";
import "../src/services/font-awesome"

import "src/global.scss";

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <SiteLayout>
     <Component {...pageProps} />
  </SiteLayout>
  )
}

export default App;