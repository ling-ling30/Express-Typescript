const router = require("express").Router();
const { hello } = require("../controller/helloWorld");

router.get("/", hello);

module.exports = router;
