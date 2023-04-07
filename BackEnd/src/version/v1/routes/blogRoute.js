const express = require("express");
const router = express.Router();
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
} = require("../../../controller/blogcontroller");
const {
  authMiddleware,
  isAdmin,
} = require("../../../middlewares/authMiddleware");

router
  .put("/dislikes", authMiddleware, dislikeBlog)
  .put("/likes", authMiddleware, likeBlog)
  .post("/", authMiddleware, isAdmin, createBlog)
  .put("/:id", authMiddleware, isAdmin, updateBlog)
  .get("/:id", getBlog)
  .get("/", getAllBlogs)
  .delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
