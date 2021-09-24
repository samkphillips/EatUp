'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('menu_items','name',{
      type: Sequelize.STRING,
      allowNull: false
  }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('menu_items','name',{
      type: Sequelize.STRING,
      allNull: false
  }
    )
  }
};
