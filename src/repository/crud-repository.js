const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils/error");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        const response = await this.model.create(data);
        return response;
    }
    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async get(id) {
        const response = await this.model.findByPk(id);
        if (!response) {
            throw new AppError(
                ["Resource you requested for is not present"],
                StatusCodes.NOT_FOUND
            );
        }
        return response;
    }

    async delete(id) {
        const response = await this.model.destroy({
            where: {
                id,
            },
        });
        if (response === 0) {
            throw new AppError(
                [
                    "The record you are trying to delete is not present in database",
                ],
                StatusCodes.NOT_FOUND
            );
        }
        return response;
    }
}

module.exports = CrudRepository;
