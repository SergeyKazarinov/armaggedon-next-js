import React, {useState} from "react";
import asteroids from './Asteroids.module.css';

function Asteroids({ data, orderList, isDistanceKilometers, onAddClick, onRemoveClick, onOpenPopup}) {
  const yearDataAsteroid = data.close_approach_data[0].close_approach_date.slice(0, 4);
  const monthDataAsteroid = data.close_approach_data[0].close_approach_date.slice(5, 7);
  const dayDataAsteroid = data.close_approach_data[0].close_approach_date.slice(8);
  const isPotentiallyHazardousAsteroid = data.is_potentially_hazardous_asteroid;
  const asteroidName = data.name.slice(data.name.indexOf('(') + 1, -1);
  const [isAddOrder, setIsAddOrder] = useState(false);

  let monthNameDataAsteroid;
  switch(monthDataAsteroid) {
    case '01': 
      monthNameDataAsteroid = 'Января';
      break;
    case '02': 
      monthNameDataAsteroid = 'Февраля';
      break;
    case '03': 
      monthNameDataAsteroid = 'Марта';
      break;
    case '04': 
      monthNameDataAsteroid = 'Апреля';
      break;
    case '05': 
      monthNameDataAsteroid = 'Мая';
      break;
    case '06': 
      monthNameDataAsteroid = 'Июня';
      break;
    case '07': 
      monthNameDataAsteroid = 'Июля';
      break;
    case '08': 
      monthNameDataAsteroid = 'Августа';
      break;
    case '09': 
      monthNameDataAsteroid = 'Сентября';
      break;
    case '10': 
      monthNameDataAsteroid = 'Октября';
      break;
    case '11': 
      monthNameDataAsteroid = 'Ноября';
      break;
    case '12': 
      monthNameDataAsteroid = 'Декабря';
      break;
  }

  function handleClick() {
    if(isAddOrder) {
      onRemoveClick(data);
      setIsAddOrder(false);
    }
    else {
      onAddClick(data);
      setIsAddOrder(true);
    }
  }

  function handleAsteroidClick() {
    onOpenPopup(data);
  }

  return(
    <li className={`${asteroids.flex} ${asteroids.flex_column} ${asteroids.item}`}>
        <h3 className={asteroids.date}>{dayDataAsteroid} {monthNameDataAsteroid} {yearDataAsteroid}</h3>
        <button type="button" className={`${asteroids.flex} ${asteroids.data}`} onClick={handleAsteroidClick}>
          <img className={`${asteroids.image}`} src={isPotentiallyHazardousAsteroid ? '/potentially_hazardous_asteroid.png' : '/potentially_inhazardous_asteroid.png'} alt={isPotentiallyHazardousAsteroid ? "Опасный астероид" : "Не опасный астероид"}/>
          <div className={`${asteroids.flex} ${asteroids.flex_column} ${asteroids.description}`}>
            <h4 className={`${asteroids.description} ${asteroids.title}`}>Астероид {asteroidName}</h4>
            <span className={asteroids.diameter}>&#8709; {`${Math.floor(data.estimated_diameter.meters.estimated_diameter_max)} м`}</span>
            <span className={asteroids.distance}>
              &#8596; {`${isDistanceKilometers 
                ? Math.floor(data.close_approach_data[0].miss_distance.kilometers) + " км" 
                : Math.floor(data.close_approach_data[0].miss_distance.lunar) + " лунных орбит"}`}
            </span>
            <span className={asteroids.status}>{isPotentiallyHazardousAsteroid ? "Опасен" : "Не опасен"}</span>
          </div>
        </button>
        <button type="button" className={asteroids.button} onClick={handleClick}>{!(orderList.map((item) => item.id).includes(data.id)) ? "УНИЧТОЖИТЬ" : "НЕ УНИЧТОЖАТЬ"}</button>
    </li>
  )
}

export default Asteroids;