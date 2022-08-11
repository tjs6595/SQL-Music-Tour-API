'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [{
      name: 'event 1',
      date: "6/23/1981",
      start_time:"2022-04-19 00:00:00-05",
      end_time:"2022-05-19 00:00:00-05"   
    },
    {
      name: 'event 2',
      date: "2/23/1981",
      start_time:"2022-06-19 00:00:00-05",
      end_time:"2022-07-19 00:00:00-05"   
    },
    {
      name: 'event 3',
      date: "3/23/1981",
      start_time:"2022-08-19 00:00:00-05",
      end_time:"2022-09-19 00:00:00-05"   
    },
  ], {});
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, null, null, {});
  }
};
