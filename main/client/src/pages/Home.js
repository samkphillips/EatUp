import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import RestaurantCard from '../components/RestaurantCard'

export default function Home(props) {
  const [restaurants, setRestaurants] = useState([])

  // const getRestaurants = async () => {
  //   const res = await axios.get(`${BASE_URL}/restaurant/search/state/GA`)
  //   setRestaurants(res.data)
  // }

  const getRestaurantsByState = async (state) => {
    const res = await axios.get(`${BASE_URL}/restaurant/search/state/${state}`)
    setRestaurants(res.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getRestaurantsByState(e.target[0].value)
  }

  // useEffect(() => {
  //   getRestaurants()
  // }, [])

  return (
    <div>
      <h1>Search Bar</h1>
      <form onSubmit={handleSubmit}>
        <select name="stateSelect">
          <option value="GA">Georgia</option>
          <option value="NJ">New Jersey</option>
          <option value="CA">California</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((r) => (
            <RestaurantCard
              {...props}
              key={`${r.name}-${r.id}`}
              name={r.name}
              address={r.address}
              foodTags={r.foodTags}
            />
          ))
        ) : (
          <h3>No results yet.</h3>
        )}
      </div>
    </div>
  )
}
