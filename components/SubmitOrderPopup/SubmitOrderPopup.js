import React from 'react';
import popup from './SubmitOrderPopup.module.css';

function AsteroidDescriptionPopup({isOpen, onClose}) {
  function handleCLoseOverlayClick(e) {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  return(
    <div className={`${popup.popup} ${isOpen ? popup.popup_opened : ''}`} onMouseDown={handleCLoseOverlayClick}>
      <div className={popup.popup_container}>
        <button type="button" className={popup.buttonClose} onClick={onClose}></button>
        <h2 className={popup.title}>Ваш заказ отправлен</h2>
        <p className={popup.subtitle}>Спасибо, ваш заказ отправлен. Бригада им. Брюса Уиллиса уже отрпавилась выполнять свою работу!</p>
        <button type="button" className={popup.button} onClick={onClose}>Закрыть</button>
      </div>
    </div>
  )
}

export default AsteroidDescriptionPopup;