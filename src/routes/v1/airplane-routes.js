const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");
const express = require("express");

const router = express.Router();

/**
 * POST : /airplanes
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */

router.post(
    "/",
    AirplaneMiddleware.validateCreateRequest,
    AirplaneController.createAirplane
);

/**
 * GET : /airplanes
 * req-body {}
 */
router.get("/", AirplaneController.getAirplanes);

router.get("/:id", AirplaneController.getAirplane);

router.delete("/:id", AirplaneController.deleteAirplane);

module.exports = {
    airplaneRoutes: router,
};
