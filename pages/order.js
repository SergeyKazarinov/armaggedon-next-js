import Orders from '../components/Orders/Orders';
import app from '../styles/App.module.css';

function Order({orderList, openPopup, isDistanceKilometers, onAddClick, onRemoveClick, onSubmit}) {
  return(
    <>
      <h2 className={app.title}>Ваш заказ</h2>
      {orderList.length === 0 
      ? (<>
          <p className={app.order}>Ваша корзина пуста, команда им. Брюса Уиллиса не знает, куда лететь.</p>
          <p className={app.order}>Добавьте астероиды в корзину</p>
        </>)
      : <Orders
          dataList={orderList}
          openPopup={openPopup}
          isDistanceKilometers={isDistanceKilometers}
          onAddClick={onAddClick}
          onRemoveClick={onRemoveClick}
          onSubmit={onSubmit}
      />}
    </>
  )
}

export default Order;