const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  userId: String,
  title: String,
  completed: Boolean,
});

module.exports = mongoose.model("todo", TodoSchema);
