const mongoose = require("mongoose");
const PostScehma = new mongoose.Schema({
  title: String,
  tags: Array
});

module.exports = mongoose.model("post", PostScehma);
