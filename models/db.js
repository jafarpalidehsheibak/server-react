const mongoose = require("mongoose");
module.exports = mongoose
  .connect(
    "mongodb+srv://jafarpalidehsheibak:gSYMGdUyHQg0jg3c@cluster0.y9pifbd.mongodb.net/?retryWrites=true&w=majority"
  )
  .catch((err) => {
    console.log(err);
  });
