'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      name: 'Metallica',
      genre: 'Rock',
      available_start_time: "1/1/1981",
      end_time: "1/1/2022",
    },
    {
      name: 'Linkin Park',
      genre: 'Alternative',
      available_start_time: "1/1/2001",
      end_time: "1/2/2022",
    },
    {
      name: 'Nirvana',
      genre: 'Alternative',
      available_start_time: "1/1/1991",
      end_time: "2/1/2022",
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, null, null, {});
  }
};
