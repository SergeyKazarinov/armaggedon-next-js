import React, {useState, useEffect} from "react";
import main from './Main.module.css';

function Main({distanceKilometers, distanceLunar, onFilterClick}) {
const [isKilometers, setIsKilometers] = useState(true);
const [isChecked, setIsChecked] = useState(false);



  function handleDistanceKilometersClick() {
    distanceKilometers(true);
    setIsKilometers(true)
  }

  function handleDistanceLunarClick() {
    distanceLunar(false);
    setIsKilometers(false);
  }

  function handleDangerousClick() {
    if(!isChecked) {
      setIsChecked(true);
      onFilterClick(true);
    }
    else {
      setIsChecked(false)
      onFilterClick(false);
    }

  }

  return(
      <section className={main.flights}>
        <div className={`${main.flex} ${main.flex_column}`}>
          <h2 className={main.title}>Ближайшие подлёты</h2>
          <div className={main.subtitle}>
            <div className={main.distance}>
              Отображать расстояние:&#8194;
              <span>
                <button className={`${main.button} ${isKilometers && main.active}`} onClick={handleDistanceKilometersClick}>
                в километрах
                </button> 
                &#8194;|&#8194;
                <button className={`${main.button} ${!isKilometers && main.active}`} onClick={handleDistanceLunarClick}>
                  в лунных орбитах
                </button>
              </span>
            </div>
            <div className={main.checkbox_container}>
              <input type="checkbox" className={main.checkbox} id="dangerous" onClick={handleDangerousClick}/>
              <label className={main.checkbox__description} htmlFor="dangerous">Показать только опасные</label>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Main;