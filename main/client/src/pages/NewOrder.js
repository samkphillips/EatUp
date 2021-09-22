import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuItemCard from '../components/MenuItemCard'
import { GetMenuByRestaurantId } from '../services/ProtectedServices'

export default function NewOrder(props) {
  const [menu, setMenu] = useState([])
  const [order, setOrder] = useState([])

  const getMenu = async () => {
    const res = await GetMenuByRestaurantId(props.match.params.restaurant_id)
    setMenu(res)
  }

  const itemClicked = async (e, item) => {
    await setOrder([...order, item])
    console.log(order)
  }

  useEffect(() => {
    getMenu()
  }, [])

  return (
    <div>
      <h1>Menu / Place New Order</h1>
      <h3>Restaurant ID: {props.match.params.restaurant_id}</h3>
      {order.length > 0 ? (
        order.map((item) => <h3>Item {item.name}</h3>)
      ) : (
        <h3>Click to add items to your order.</h3>
      )}
      {menu.length > 0 ? (
        menu.map((item) => (
          <MenuItemCard {...props} handleClick={itemClicked} value={item} />
        ))
      ) : (
        <h3>No menu items.</h3>
      )}
    </div>
  )
}
