const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane(req.body);
        return res
            .status(StatusCodes.CREATED)
            .json({ ...SuccessResponse, data: airplane });
    } catch (error) {
        return res.status(error.statusCode).json({
            ...ErrorResponse,
            error: error,
        });
    }
}

module.exports = {
    createAirplane,
};
