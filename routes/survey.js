const express = require("express");
const {
  calculateResults,
  getLiselerData,
  getMesleklerData,
  getSorularData,
} = require("../controllers/survey");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("OK SURVEY");
});
router.get("/results", calculateResults);
router.get("/getLiselerData", getLiselerData);
router.get("/getMesleklerData", getMesleklerData);
router.get("/getSorularData", getSorularData);
router.post("/results", calculateResults);

module.exports = router;
