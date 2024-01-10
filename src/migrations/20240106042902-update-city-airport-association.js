"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint("Airports", {
            fields: ["cityId"],
            type: "foreign key",
            name: "airports_ibfk_1",
            references: {
                table: "cities",
                field: "id",
            },
            onDelete: "CASCADE",
        });
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeConstraint("Airports", "airports_ibfk_1");
    },
};
