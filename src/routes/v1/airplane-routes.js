const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");
const express = require("express");

console.log(AirplaneController);
const router = express.Router();

router.post(
    "/",
    AirplaneMiddleware.createRequestValidator,
    AirplaneController.createAirplane
);

module.exports = {
    airplaneRoutes: router,
};
