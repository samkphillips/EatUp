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
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
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
              restaurantId={r.id}
            />
          ))
        ) : (
          <h3>No results yet.</h3>
        )}
      </div>
    </div>
  )
}
