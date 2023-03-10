const mongoose = require("mongoose");
const taskschema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    required: true,
  },
});
const Task = mongoose.model("tasks", taskschema);
module.exports = Task;
