const { AirplaneRepository } = require("../repository");
const { AppError } = require("../utils/error");
const { StatusCodes } = require("http-status-codes");
const airplaneRepository = new AirplaneRepository();
console.log(AppError);
async function createAirplane(data) {
    console.log("service", data);
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
        throw error;
    }
}

module.exports = {
    createAirplane,
};
