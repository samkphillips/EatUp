'use strict'
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const randFoodName = () => {
      const protein = [
        'Chicken',
        'Beef',
        'Pork',
        'Tofu',
        'Falafel',
        'Duck',
        'Salmon',
        'Turkey',
        'Egg',
        'Tuna',
        'Shrimp',
        'Lobster',
        'Califlower',
        'Bison',
        'Lentil',
        'Pumpkin'
      ]
      const format = [
        'Tacos',
        'Pasta',
        'Sandwich',
        'Burrito',
        'Soup',
        'Burger',
        'Dip',
        'Fries',
        'Waffles',
        'Pancakes',
        'Pie',
        'Stir-fry',
        'Casserole',
        'and Rice'
      ]
      const proteinResult = protein[Math.floor(Math.random() * protein.length)]
      const formatResult = format[Math.floor(Math.random() * format.length)]
      return `${proteinResult} ${formatResult}`
    }

    let menu_items = [...Array(7000)].map((_) => ({
      name: randFoodName(),
      description: faker.lorem.sentence(),
      price: faker.commerce.price() / 100 + 2,
      restaurantId: Math.floor(Math.random() * 1000) + 1,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    }))
    await queryInterface.bulkInsert('menu_items', menu_items)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('menu_items', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
  }
}
