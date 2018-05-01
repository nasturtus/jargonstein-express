const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Jargon = require("../../models/jargon-model");

// require the server file(module) and save it into a const called collection
// so that calling collection.count() is descriptive
const collection = require("../server");

router.get("/", (req, res) => {
  console.log("in router jargon");
  let documentCount = collection.count();

  let id = Math.floor(Math.random() * documentCount);
  console.log("To retrieve document with id", id);
  Jargon.findOne()
    .where("id")
    .equals(id)
    .select("jargon explanation")
    .exec(function(err, document) {
      if (err) return handleError(err);
      console.log(document);
      res.json(document);
    });
});

module.exports = router;
