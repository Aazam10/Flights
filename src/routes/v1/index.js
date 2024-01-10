const express = require("express");
const { airplaneRoutes } = require("./airplane-routes");
const { cityRoutes } = require("./city-routes");
const { flightRoutes } = require("./flight-routes");

const router = express.Router();

router.use("/airplane", airplaneRoutes);

router.use("/city", cityRoutes);

router.use("/flight", flightRoutes);

module.exports = {
    v1Routes: router,
};
