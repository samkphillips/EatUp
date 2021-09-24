import Client from './api'

export const GetMenuByRestaurantId = async (restaurant_id) => {
  try {
    const res = await Client.get(`/menu_items/menu/${restaurant_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateNewOrder = async (data) => {
  try {
    const res = await Client.post(`/order/neworder`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOrdersByUser = async (userId) => {
  try {
    const res = await Client.get(`/order/userorders/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetMenuItemById = async (id) => {
  try {
    const res = await Client.get(`/menu_items/singleitem/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
