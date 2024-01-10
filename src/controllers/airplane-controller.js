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

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        return res
            .status(StatusCodes.OK)
            .json({ ...SuccessResponse, data: airplanes });
    } catch (error) {
        return res.status(error.statusCode).json({
            ...ErrorResponse,
            error: error,
        });
    }
}

async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        return res.status(StatusCodes.OK).json({
            ...SuccessResponse,
            data: airplane,
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            ...ErrorResponse,
            error: error,
        });
    }
}
async function deleteAirplane(req, res) {
    try {
        const response = await AirplaneService.deleteAirplane(req.params.id);
        return res.status(StatusCodes.OK).json({
            ...SuccessResponse,
            data: response,
        });
    } catch (error) {
        res.status(error.statusCode).json({
            ...ErrorResponse,
            error: error,
        });
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
};
