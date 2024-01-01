class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        const response = await this.model.create(data);
        return response;
    }
    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CrudRepository;
