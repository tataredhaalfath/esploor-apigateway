const express = require("express");
const router = express.Router();
const chaptersHandler = require("./handler/chapters");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", chaptersHandler.getAll);
router.post("/", chaptersHandler.create);
router.get("/:id", chaptersHandler.get);
router.put("/:id", chaptersHandler.update);
router.delete("/:id", chaptersHandler.destroy);

module.exports = router;
