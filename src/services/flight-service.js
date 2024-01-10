const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repository");
const { AppError } = require("../utils/error");

const flightRepository = new FlightRepository();

async function createFlight(data) {
    console.log("service", data);
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if ((error.name = "SequelizeValidationError")) {
            let explanation = [];
            error.errors.forEach((err) => explanation.push(err.message));
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError(
                ["cannot complete your request at this time"],
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = {
    createFlight,
};
