const dotenv = require("dotenv");
dotenv.config();
console.log("port,", process.env.PORT);
module.exports = {
    PORT: process.env.PORT,
};
