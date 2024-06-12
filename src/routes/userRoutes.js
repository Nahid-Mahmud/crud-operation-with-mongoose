const express = require("express");
const { postUser, getAllUsers, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.post("/", postUser);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
