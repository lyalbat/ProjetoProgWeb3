"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("naves", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      class: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      beam: {
        type: Sequelize.INTEGER,
      },
      id: {
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("naves");
  },
};
