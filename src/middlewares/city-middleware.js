const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils/error");
const { ErrorResponse } = require("../utils/common");

function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        const error = new AppError(
            [
                "name cannot be null when creating city please check the required format",
            ],
            StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json({
            ...ErrorResponse,
            error,
        });
    }
    next();
}

module.exports = {
    validateCreateRequest,
};
