import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import RestaurantCard from '../components/RestaurantCard'

export default function Home(props) {
  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = async () => {
    const res = await axios.get(`${BASE_URL}/restaurant/search/state/GA`)
    console.log(res)
    setRestaurants(res.data)
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <div>
      <h1>Search Bar</h1>
      <div className="restaurant-list">
        {restaurants.map((r) => (
          <RestaurantCard
            {...props}
            key={`${r.name}-${r.id}`}
            name={r.name}
            address={r.address}
            foodTags={r.foodTags}
          />
        ))}
      </div>
    </div>
  )
}
