
import Header from './Header/Headers';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import app from '../styles/App.module.css'


function Layout({children, distanceKilometers, distanceLunar, onFilterClick, date}) {
  


  return(
    <>
    <Header  />
      <div className={app.content}>
        <Main 
          distanceKilometers={distanceKilometers}
          distanceLunar={distanceLunar}
          onFilterClick={onFilterClick}
        />
        {children}
      </div>
    <Footer date={date}/>
    </>
  )
}

export default Layout;