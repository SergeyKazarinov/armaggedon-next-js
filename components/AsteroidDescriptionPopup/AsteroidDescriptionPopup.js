import React from 'react';
import popup from './AsteroidDescriptionPopup.module.css';
import asteroidImage from '../../images/asteroid.png';

function AsteroidDescriptionPopup({data, isOpen, onClose}) {
  function handleCLoseOverlayClick(e) {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  return(
    <div className={`${popup.popup} ${isOpen ? popup.popup_opened : ''}`} onMouseDown={handleCLoseOverlayClick}>
      <div className={popup.popup_container}>
        <button type="button" className={popup.buttonClose} onClick={onClose}></button>
        <h2 className={popup.title}>Астероид {data.name}</h2>
        <div className={popup.flex}>
          <img className={popup.image} src={asteroidImage} alt="Изображение астероида" />
          <div className={popup.description}>
            <span>&#8709; {`${Math.floor(data.estimated_diameter.meters.estimated_diameter_max)} м`}</span>
            <span>&#8596; {Math.floor(data.close_approach_data[0].miss_distance.kilometers) + " км"}</span>
            <span>&#8596; {Math.floor(data.close_approach_data[0].miss_distance.lunar) + " лунных орбит"}</span>
            <span>&#8596; {Math.floor(data.close_approach_data[0].miss_distance.miles) + " миль"}</span>
            <span>&#8596; {data.close_approach_data[0].miss_distance.astronomical + " а.е."}</span>
            <span>Скорость отн. Земли: {Math.floor(data.close_approach_data[0].relative_velocity.kilometers_per_second)} м/с</span>
            <span>Дата сближения: 12 сентября 2021</span>
            <span>Время сближения: {data.close_approach_data[0].close_approach_date_full.slice(-5)}</span>
            <span>Летит вокруг по орбите: {data.close_approach_data[0].orbiting_body}</span>
          </div>
        </div>
        <span className={popup.status}>{data.is_potentially_hazardous_asteroid ? "Опасен" : "Не опасен"}</span>
      </div>
    </div>
  )
}

export default AsteroidDescriptionPopup;