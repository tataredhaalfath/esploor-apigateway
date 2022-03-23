const express = require("express");
const router = express.Router();
const { APP_NAME } = process.env;
const mediaHandler = require("./handler/media");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, mediaHandler.getAll);
router.post("/", mediaHandler.create);
router.delete("/:id", mediaHandler.destroy);

module.exports = router;
