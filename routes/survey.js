const express = require("express");
const {
  calculateResults,
  getLiselerData,
  getMesleklerData,
  getSorularData,
  comments,
  hoslanti,
  yapabilirlik,
  users,
  lastUserId
} = require("../controllers/survey");
const { getLastUserId } = require("../models/survey");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("OK SURVEY");
});
router.get("/results", calculateResults);
router.get("/getLiselerData", getLiselerData);
router.get("/getMesleklerData", getMesleklerData);
router.get("/getSorularData", getSorularData);
router.post("/results", calculateResults);
router.post("/comments",comments);
router.post("/hoslanti",hoslanti);
router.post("/yapabilirlik",yapabilirlik);
router.post("/users",users);
router.get("/lastUserId", lastUserId);
module.exports = router;
