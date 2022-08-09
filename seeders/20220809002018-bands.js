'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      name: 'Metallica',
      genre: 'Rock',
      available_start_time: "1/1/1981",
      end_time: "1/1/2022",
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, null, null, {});
  }
};
