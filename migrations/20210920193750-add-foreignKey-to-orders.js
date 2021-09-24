'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('orders','restaurantId',{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'restaurants',
      key:'id'
  }
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('orders','restaurantId',{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'libraries',
      key:'id'
      }
    }
  )
  }
};
