import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { GetOrdersByUser, GetMenuItemById } from '../services/ProtectedServices'

export default function MyOrders(props) {
  const [orders, setOrders] = useState([])

  const getOrders = async () => {
    const res = await GetOrdersByUser(props.user.id)

    let parsedOrderList = []

    const fetchRestaurant = async (id) => {
      const restaurant = await axios.get(
        `${BASE_URL}/restaurant/search/id/${id}`
      )
      return restaurant.data.name
    }

    const fetchMenuItem = async (id) => {
      const menuItem = await GetMenuItemById(id)
      return menuItem
    }

    for (const order of res) {
      const restaurantName = await fetchRestaurant(order.restaurantId)

      let parsedOrder = {
        orderItems: [],
        restaurantName: restaurantName,
        orderDate: order.createdAt
      }

      for (const taco of order.orderItems) {
        let matchFound = false

        parsedOrder.orderItems.forEach((o) => {
          if (taco === o.id && !matchFound) {
            matchFound = true
            o.qty++
          }
        })

        if (!matchFound) {
          const menuItem = await fetchMenuItem(taco)
          parsedOrder.orderItems.push({
            id: taco,
            qty: 1,
            name: menuItem.name,
            description: menuItem.description,
            price: menuItem.price
          })
        }
      }

      parsedOrderList.push(parsedOrder)
    }

    await setOrders(parsedOrderList)
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className="myorder-contain">
      <h1>Past Orders:</h1>
      {orders.length > 0 ? (
        orders.map((item) => (
          <div className="myorder">
            <h3>{item.restaurantName}</h3>
            {item.orderItems.map((i) => (
              <h4>{`${i.name} | qty: ${i.qty}`}</h4>
              ))}
              {/* {item.orderItems.map((i) => (
              <h4>{`qty: ${i.qty}`}</h4>
              ))} */}
          </div>
        ))
      ) : (
        <h3>You do not have any current orders.</h3>
      )}
    </div>
  )
}

// qty: ${i.qty}