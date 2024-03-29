const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/error");
function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        const error = new AppError(
            ["modelNumber cannot be null please check the required format"],
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
