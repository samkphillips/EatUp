import React from 'react'

const OrderItem = (props) => {
  // const handleClick = (e) => {
  //   props.handleClick(e, props.value)
  // }
  
  return (
    <div>
      <h3>Item!</h3>
      <button>+</button>
      <button>-</button>
      <button>Remove</button>
    </div>
  )
}

export default OrderItem