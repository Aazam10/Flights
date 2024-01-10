const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repository");
const { AppError } = require("../utils/error");

const cityRepository = new CityRepository();
async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            let explanation = [];
            error.errors.forEach((error) => explanation.push(error.message));
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            ["Unable to process your request at this time"],
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createCity,
};
