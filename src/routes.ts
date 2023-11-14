const userRoute = require("./routes/userRoute");
const routers = require("express").Router();

routers.use("/api/user", userRoute);

module.exports = routers;
