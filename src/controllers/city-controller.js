const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createCity(req, res) {
    try {
        const city = await CityService.createCity({ name: req.body.name });

        return res.status(StatusCodes.CREATED).json({
            ...SuccessResponse,
            data: city,
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            ...ErrorResponse,
            error: error,
        });
    }
}

module.exports = {
    createCity,
};
