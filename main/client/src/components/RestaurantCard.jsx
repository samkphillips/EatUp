import React from 'react'

const RestaurantCard = (props) => {
  const handleClick = () => {
    props.history.push(`neworder/${props.restaurantId}`)
  }
  
  return (
    <div className='restaurant-card' onClick={handleClick}>
      <h3>{props.name}</h3>
      <h5>{props.address}</h5>
      <h4>{`Tags: ${props.foodTags}`}</h4>
    </div>
  )
}

export default RestaurantCard
