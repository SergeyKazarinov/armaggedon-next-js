import Header from './Header/Headers';
import Footer from './Footer/Footer';

function Layout({children}) {
  return(
    <>
    <Header />
      {children}
    <Footer />
    </>
  )
}

export default Layout;