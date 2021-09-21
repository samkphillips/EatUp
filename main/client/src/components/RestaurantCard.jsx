import React from 'react'

const RestaurantCard = (props) => {
  // const handleClick = () => {
  //   props.history.push(`roasts/details/${props.roastID}`)
  // }
  
  return (
    <div className='restaurant-card'>
      <h1>{props.name}</h1>
      <h5>{props.address}</h5>
      <h3>{`Tags: ${props.foodTags}`}</h3>
    </div>
  )
}

export default RestaurantCard
