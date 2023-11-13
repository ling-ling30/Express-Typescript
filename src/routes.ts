const router = require("express").Router();
const { getUser } = require("./controller/user");

router.use("/api/user", getUser);

module.exports = router;
