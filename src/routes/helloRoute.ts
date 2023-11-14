const router = require("express").Router();
const { hello } = require("../controller/helloWorld");

router.get("/message", hello);
router.post("/", )

module.exports = router;
