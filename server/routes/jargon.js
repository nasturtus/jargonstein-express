const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Jargon = require("../../models/jargon-model");

const { NO_OF_DOCUMENTS } = require("../server");

router.get("/", (req, res) => {
  console.log("in router jargon");
  console.log(NO_OF_DOCUMENTS);

  Jargon.findOne()
    .where("jargon")
    .equals("net-neutrality")
    .select("jargon explanation")
    .exec(function(err, document) {
      if (err) return handleError(err);
      console.log(document);
      res.json(document);
    });
});

module.exports = router;
