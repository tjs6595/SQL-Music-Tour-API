'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [
      {
      stage_name: 'stage 1',
    },
    {
      stage_name: 'stage 2',
    },
    {
      stage_name: 'stage 3',
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages', {});
  }
};
