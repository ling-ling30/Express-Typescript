const routers = require("express").Router();
const controller = require("./routes/helloRoute");

routers.use("/", controller);

module.exports = routers;
