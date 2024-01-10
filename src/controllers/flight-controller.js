const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createFlight(req, res) {
    console.log(req.body);
    const {
        flightNumber,
        airplaneId,
        departureAirportId,
        arrivalAirportId,
        departureTime,
        arrivalTime,
        price,
        totalSeats,
    } = req.body;
    try {
        const flight = await FlightService.createFlight({
            flightNumber,
            airplaneId,
            departureAirportId,
            arrivalAirportId,
            departureTime,
            arrivalTime,
            price,
            totalSeats,
        });

        return res.status(StatusCodes.CREATED).json({
            ...SuccessResponse,
            data: flight,
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            ...ErrorResponse,
            error: error,
        });
    }
}

module.exports = {
    createFlight,
};
