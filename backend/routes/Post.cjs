const express = require("express");
const router = express.Router();
const Post = require("../models/Post.cjs");

// Post

router.post("/createPost", async (req, res) => {
  const { title, tags } = req.body;
  try {
    const newPost = new Post({ title, tags });
    const savedPost = await newPost.save();
    res.json({ success: true, post: savedPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

//get 
router.get('/getPosts', async(req, res) => {
  try {
    const posts = await Post.find()
    res.json({success: true, posts})
  }catch(e) {
    console.log(e);
    res.status(500).json({success: false})
  }
})

module.exports = router;
