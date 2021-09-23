import React from 'react'

const OrderItem = (props) => {
  const incrementHelper = (e) => {
    props.incrementItemQuantity(props.orderIndex, parseInt(e.target.value))
  }

  const removeHelper = () => {
    props.removeItemFromOrder(props.orderIndex)
  }
  
  return (
    <div className="current-order-item">
      <h3>{props.orderItem.item.name}</h3>
      <h4>{`$${props.orderItem.item.price}, qty ${props.orderItem.qty}, item total: $${props.orderItem.item.price * props.orderItem.qty}`}</h4>
      <h5>{props.orderItem.item.description}</h5>
      <button onClick={incrementHelper} value={1} className='button-increment'>+</button>
      <button onClick={incrementHelper} value={-1} className='button-increment'>-</button>
      <button onClick={removeHelper} className='button-remove'>Remove</button>
    </div>
  )
}

export default OrderItem