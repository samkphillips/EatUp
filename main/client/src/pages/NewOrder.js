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
    let matchFound = false

    order.forEach((o) => {
      if (item.id === o.item.id && !matchFound) {
        matchFound = true
        o.qty++
      }
    })

    if (!matchFound) {
      await setOrder([...order, { item: item, qty: 1 }])
    } else {
      await setOrder([...order])
    }
  }

  useEffect(() => {
    getMenu()
  }, [])

  return (
    <div>
      <h1>Menu / Place New Order</h1>
      <h3>Restaurant ID: {props.match.params.restaurant_id}</h3>
      {order.length > 0 ? (
        order.map((item) => (
          <h3 key={`${item.item.name}-${item.item.id}`}>
            Item {item.item.name}, qty: {item.qty}
          </h3>
        ))
      ) : (
        <h3>Click to add items to your order.</h3>
      )}
      <button>Submit Order</button>
      {menu.length > 0 ? (
        menu.map((item) => (
          <MenuItemCard
            {...props}
            key={`${item.name}-${item.id}`}
            handleClick={itemClicked}
            value={item}
          />
        ))
      ) : (
        <h3>No menu items.</h3>
      )}
    </div>
  )
}
