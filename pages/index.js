import AsteroidList from '../components/AsteroidList/AsteroidList'

function Home({dataList, orderList, openPopup, isDistanceKilometers, onAddClick, onRemoveClick}) {
  return(
    <AsteroidList
      dataList={dataList}
      orderList={orderList}
      openPopup={openPopup}
      isDistanceKilometers={isDistanceKilometers}
      onAddClick={onAddClick}
      onRemoveClick={onRemoveClick}
    />
  )
}

export default Home;