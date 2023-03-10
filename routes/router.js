const express = require("express");
const router = express.Router();
const Task = require("../models/models");

router.get("/", async (req, res) => {
  await Task.find()
    .then((doc) => res.json(doc))
    .catch((err) => console.log(err));
});
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task
    .save()
    .then((doc) => res.json(doc))
    .catch((err) => console.log(err));
});
router.put("/:id", async (req, res) => {
  await Task.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    {
      new: true,
    }
  )
    .then((doc) => res.json(doc))
    .catch((err) => console.log(err));
});

router.delete("/:id", async (req, res) => {
  await Task.findOneAndDelete(req.body.id)
    .then((doc) => res.json(doc))
    .catch((err) => console.log(err));
});
module.exports = router;
