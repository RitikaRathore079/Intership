const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../../controllers/userController");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id/:section", (req, res) => {
const { id, section } = req.params;
res.json({
userld: id,
section: section
});
});

module.exports = router;