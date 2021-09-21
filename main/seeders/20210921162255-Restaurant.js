'use strict'
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const randFood = () => {
      const foodArr = ['Pizza', 'Sushi', 'Greek', 'Chinese', 'Indian']
      const foodNumber = Math.floor(Math.random() * foodArr.length)
      return foodArr[foodNumber]
    }
    let restaurants = [...Array(1000)].map((_) => ({
      name: faker.company.companyName(),
      address: faker.fake(
        '{{address.streetAddress}}, {{address.city}}, {{address.stateAbbr}}, {{address.zipCode}}'
      ),
      foodTags: randFood(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    }))
    await queryInterface.bulkInsert('restaurants', restaurants)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('restaurants')
  }
}
