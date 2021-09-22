import React, { useState, useEffect } from 'react'
import { GetOrdersByUser } from '../services/ProtectedServices'

export default function MyOrders(props) {
  const [orders, setOrders] = useState([])

  const getOrders = async () => {
    const res = await GetOrdersByUser(props.user.id)
    //setOrders(res)

    let parsedOrderList = []

    // parsedOrderList = [
    //   {orderItems:[{item:"food1", qty: 3},{},{}], restaurant: id, date:createdDate},
    //   {}
    // ]

    res.forEach((order) => {
      let parsedOrder = {
        orderItems: [],
        restaurantId: order.restaurantId,
        orderDate: order.createdAt
      }

      order.orderItems.forEach((taco) => {
        let matchFound = false

        parsedOrder.orderItems.forEach((o) => {
          if (taco === o.id && !matchFound) {
            matchFound = true
            o.qty++
          }
        })

        if (!matchFound) {
          //we need an axios call to get menuItem details right here.
          parsedOrder.orderItems.push({ id: taco, qty: 1 })
        }
      })

      parsedOrderList.push(parsedOrder)
    })

    await setOrders(parsedOrderList)
    console.log(orders)
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div>
      <h1>Past Orders</h1>
      {orders.length > 0 ? (
        orders.map((item) => (
          <div>
            <h3>{item.restaurantId}</h3>
            {/* <h5>{item.orderItem}</h5> */}
            {item.orderItems.map((i) => (
              <h5>{`${i.id} qty ${i.qty}`}</h5>
            ))}
          </div>
        ))
      ) : (
        <h3>You do not have any current orders.</h3>
      )}
    </div>
  )
}
