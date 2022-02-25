const express = require("express");
const router = express.Router();
const Shorturl = require("../model/short.model");
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const short = await Shorturl.create({ full: req.body.full });
    return res.status(201).send(short);
  } catch (e) {
    return res.status(404).send(e);
  }
});
router.get("/", async (req, res) => {
  try {
    const short = await Shorturl.find();
    return res.status(201).send(short);
  } catch (e) {
    return res.status(404).send(e);
  }
});
module.exports = router;
