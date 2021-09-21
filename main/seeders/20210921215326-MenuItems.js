'use strict'
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let menu_items = [...Array(10000)].map((_) => ({
      name: faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
      description: faker.lorem.sentence(),
      price: faker.commerce.price(),
      restaurantId: Math.floor(Math.random() * 1000) + 1,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    }))
    await queryInterface.bulkInsert('menu_items', menu_items)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('menu_items')
  }
}
