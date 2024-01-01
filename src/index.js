const express = require("express");
const { ServerConfig } = require("./config");
const { apiRoutes } = require("./routes");
const { PORT } = require("./config/server-config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

console.log(PORT);
app.listen(ServerConfig.PORT, () => {
    console.log(
        `Successfully started listening on port and made change ${ServerConfig.PORT}`
    );
});
