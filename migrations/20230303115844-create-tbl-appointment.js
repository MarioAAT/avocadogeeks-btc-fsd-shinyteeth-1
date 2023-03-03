'use strict'
/* eslint-disable camelcase */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_Patient',
          key: 'id'
        }
      },
      professional_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_Professional',
          key: 'id'
        }
      },
      treatment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_DentalSpecialties',
          key: 'id'
        }
      },
      appointment_on: {
        type: Sequelize.DATE
      },
      start_at: {
        type: Sequelize.TIME
      },
      end_at: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_Appointments')
  }
}
