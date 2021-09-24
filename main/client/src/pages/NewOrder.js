import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuItemCard from '../components/MenuItemCard'
import OrderItem from '../components/OrderItem'
import { BASE_URL } from '../globals'
import {
  GetMenuByRestaurantId,
  CreateNewOrder
} from '../services/ProtectedServices'

export default function NewOrder(props) {
  const [menu, setMenu] = useState([])
  const [order, setOrder] = useState([])
  const [restaurantInfo, setRestaurantInfo] = useState({})

  const getMenu = async () => {
    const res = await GetMenuByRestaurantId(props.match.params.restaurant_id)
    setMenu(res)
  }

  const getRestaurantInfo = async () => {
    const res = await axios.get(
      `${BASE_URL}/restaurant/search/id/${props.match.params.restaurant_id}`
    )
    setRestaurantInfo(res.data)
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

  const submitOrder = async () => {
    const parsedOrder = []

    order.forEach((orderItem) => {
      for (let i = 0; i < orderItem.qty; i++) {
        parsedOrder.push(orderItem.item.id)
      }
    })

    console.log(parsedOrder)

    await CreateNewOrder({
      orderItems: parsedOrder,
      restaurantId: parseInt(props.match.params.restaurant_id),
      userId: props.user.id
    })

    props.history.push(`/myorders`)
  }

  const incrementItemQuantity = (index, value) => {
    let copyArr = [...order]
    copyArr[index].qty += value

    if (copyArr[index].qty <= 0) {
      removeItemFromOrder(index)
    } else {
      setOrder(copyArr)
    }
  }

  const removeItemFromOrder = (index) => {
    if (index === order.length - 1) {
      setOrder(order.slice(0, index))
    } else {
      setOrder([...order.slice(0, index), ...order.slice(index + 1)])
    }
  }

  const orderTotal = () => {
    let sum = 0
    order.forEach((item) => {
      sum += item.item.price * item.qty
    })
    return sum
  }

  useEffect(() => {
    getMenu()
    getRestaurantInfo()
  }, [])

  return (
    <div>
      <div className="order-screen-split">
        <div className="menu-split">
          <h2>Menu</h2>
          <div className="menu-display">
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
        </div>
        <div className="order-display">
          <h3>{restaurantInfo.name}</h3>
          <h4>Address: {restaurantInfo.address}</h4>
          {order.length > 0 ? (
            order.map((item, i) => (
              <OrderItem
                key={`${item.item.name}-${item.item.id}`}
                orderItem={item}
                orderIndex={i}
                incrementItemQuantity={incrementItemQuantity}
                removeItemFromOrder={removeItemFromOrder}
              />
            ))
          ) : (
            <h3>Click menu items to add to your order.</h3>
          )}
          <h3>Order Total: ${orderTotal().toFixed(2)}</h3>
          <button
            onClick={submitOrder}
            disabled={order.length < 1}
            className="order-submit-button"
          >
            Submit Order
          </button>
        </div>
      </div>
    </div>
  )
}
