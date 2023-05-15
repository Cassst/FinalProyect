const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  updateUser,
  blockUser,
  unblockUser,
  deleteUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin
} = require("../../../controller/userController");

const { authMiddleware, isAdmin } = require("../../../middlewares/authMiddleware");

router
  .post("/auth/register", createUser)
  .post("/auth/login", loginUser)
  .post("/auth/loginAdmin", loginAdmin)
  .post("/forgot-password-token", forgotPasswordToken)
  .get("/", getAllUsers)
  .get("/refresh", handleRefreshToken)
  .get("/logout", logout)
  .get("/:userId",authMiddleware,isAdmin, getUser)
  .put("/",authMiddleware, updateUser)
  .put("/updatedPassword",authMiddleware, updatePassword)
  .put("/reset-password/:token", resetPassword)
  .put("/block_user/:userId",authMiddleware,isAdmin, blockUser)
  .put("/unblock_user/:userId",authMiddleware,isAdmin, unblockUser)
  .delete("/:userId",isAdmin, deleteUser);

module.exports = router;
