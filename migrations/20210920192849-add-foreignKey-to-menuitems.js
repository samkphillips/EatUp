'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('menu_items','restaurantId',{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'restaurants',
      key:'id'
  }
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('menu_items','restaurantId',{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'restaurants',
      key:'id'
      }
    }
  )
  }
};
