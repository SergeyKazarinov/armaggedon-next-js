
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import AsteroidDescriptionPopup from '../components/AsteroidDescriptionPopup/AsteroidDescriptionPopup';
import '../styles/normalize.css'
import '../fonts/fonts.css'
import app from '../styles/App.module.css'
import api from '../utils/Api';


function MyApp ({ Component, pageProps }) {
  const date = new Date();
  const [currentPage, setCurrentPage] = useState(1)
  const [headerImage, setHeaderImage] = useState('');
  const [asteroids, setAsteroids] = useState([]);
  const [currentAsteroid, setCurrentAsteroid] = useState(asteroids);
  const [fetching, setFetching] = useState(false);
  const [isOpen, setIsOpen] = useState (false);
  const [selectAsteroid, setSelectAsteroid] = useState({})
  const [isLoader, setIsLoader] = useState(false);
  const [isDistanceKilometers, setIsDistanceKilometers] = useState(true);
  const [isPotentiallyHazardous, setIsPotentiallyHazardous] = useState(false);
  const [order, setOrder] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(order);

  useEffect(() => {
    api.getApodImage()
      .then((res) => {
        setHeaderImage(res.url)
      })
      .catch((err) => {
        console.log(err);
      });
    
      api.getInitialAsteroids(date)
      .then((res) => {
        let arr = [];
        for(let key in res.near_earth_objects) {
          arr = arr.concat(res.near_earth_objects[key]);
        }
        setAsteroids(arr)
        setSelectAsteroid(arr[0])
        setIsLoader(true);
      })
      .catch((err) => {
        console.log(err);
      });

      document.addEventListener('scroll', handleScroll);

      return function() {
        document.removeEventListener('scroll', handleScroll);
      }
  }, [])

  useEffect(() => {
    if(fetching) {
      date.setDate(date.getDate() + currentPage)
      api.getInitialAsteroids(date)
      .then((res) => {
        let arr = [];
        for(let key in res.near_earth_objects) {
          arr = asteroids.concat(res.near_earth_objects[key]);
        }
        setAsteroids(arr)
        setCurrentPage(preState => preState + 1);
        
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFetching(false);
      });
    }

  }, [fetching])

  useEffect(() => {
    if(isPotentiallyHazardous) {
      setCurrentAsteroid(asteroids.filter((item) => (item.is_potentially_hazardous_asteroid === true)))
      setCurrentOrder(order.filter((item) => (item.is_potentially_hazardous_asteroid === true)))
    }
    else {
      setCurrentAsteroid(asteroids)
      setCurrentOrder(order)
    }
    
  }, [isPotentiallyHazardous, asteroids, order])

  function handleScroll(e) {
    if((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)) {
      setFetching(true);
    }
    
  }

  function handleEscClose(e) {
    e.key === "Escape" && closePopup();
  }

  function handleOpenPopup(data) {
    setIsOpen(true);
    setSelectAsteroid(data);
    window.addEventListener('keydown', handleEscClose);
  }

  function closePopup() {
    setIsOpen(false);
    window.removeEventListener('keydown', handleEscClose);
  }

  function handleDistanceKilometersClick() {
    setIsDistanceKilometers(true);
  }

  function handleDistanceLunarClick() {
    setIsDistanceKilometers(false);
  }

  function handleDangerousClick(isChecked) {
    setIsPotentiallyHazardous(isChecked);
  }

  function handleAddAsteroidDestroy(asteroid) {
    setOrder([asteroid, ...order])
  }

  function handleRemoveAsteroidDestroy(asteroid) {
    setOrder((order) => {
      return order.filter(item => item !== asteroid);
    })
  }

  return (
    <div className={app.app}>
      <Layout
        distanceKilometers={handleDistanceKilometersClick}
        distanceLunar={handleDistanceLunarClick}
        onFilterClick={handleDangerousClick}
        date={date}
        image={headerImage}

      >
        {/* <div className={app.content}> */}
          <Component 
            dataList={currentAsteroid}
            orderList={order}
            openPopup={handleOpenPopup}
            isDistanceKilometers={isDistanceKilometers}
            onAddClick={handleAddAsteroidDestroy}
            onRemoveClick={handleRemoveAsteroidDestroy}
          />
        {/* </div> */}
      </Layout>
      {isLoader && <AsteroidDescriptionPopup data={selectAsteroid} isOpen={isOpen} onClose={closePopup}/>}
    </div>
  )
}

export default MyApp;
