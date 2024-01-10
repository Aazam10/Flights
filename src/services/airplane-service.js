const { AirplaneRepository } = require("../repository");
const { AppError } = require("../utils/error");
const { StatusCodes } = require("http-status-codes");
const airplaneRepository = new AirplaneRepository();
async function createAirplane(data) {
    try {
        const response = await airplaneRepository.create(data);
        return response;
    } catch (error) {
        if ((error.name = "SequelizeValidationError")) {
            let explanation = [];
            for (let err of error.errors) {
                explanation.push(err.message);
            }
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "Cannot create a new Airplance object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError(
            ["Cannot fetch details of airplane"],
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The airplane you requested is not present",
                error.statusCode
            );
        }
        throw new AppError(
            "Cannot fetch data of all the airplanes",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
async function deleteAirplane(id) {
    try {
        const response = await airplaneRepository.delete(id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                [
                    "The airplane you tried to delete is not present in the database",
                ],
                error.statusCode
            );
        }
        throw new AppError(
            "Cannot delete  airplane",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
};
