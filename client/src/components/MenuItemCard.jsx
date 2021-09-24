import React from 'react'

const MenuItemCard = (props) => {
  const handleClick = (e) => {
    props.handleClick(e, props.value)
  }
  
  return (
    <div className='menu-item-card' onClick={handleClick}>
      <h1>{props.value.name}</h1>
      <h3>${props.value.price.toFixed(2)}</h3>
      <h5>{props.value.description}</h5>
    </div>
  )
}

export default MenuItemCard
