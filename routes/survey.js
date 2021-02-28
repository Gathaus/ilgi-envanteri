const express = require("express");
const {
  calculateResults2,
  calculateResults,
  getLiselerData,
  getMesleklerData,
  getSorularData,
  comments,
  hoslanti,
  yapabilirlik,
  users,
  lastUserId,
  rapor1DB,
  rapor2DB,
  rapor3DB,
  rapor4DB,
  rapor5DB,
  getRaporData
} = require("../controllers/survey");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("OK SURVEY");
});
router.get("/results", calculateResults);
router.post("/results", calculateResults);
router.get("/results2", calculateResults2);
router.post("/results2", calculateResults2);
router.get("/getLiselerData", getLiselerData);
router.get("/getMesleklerData", getMesleklerData);
router.get("/getSorularData", getSorularData);
router.get("/getRaporData",getRaporData)
router.post("/comments",comments);
router.post("/hoslanti",hoslanti);
router.post("/yapabilirlik",yapabilirlik);
router.post("/users",users);
router.post("/rapor1DB",rapor1DB);
router.post("/rapor2DB",rapor2DB);
router.post("/rapor3DB",rapor3DB);
router.post("/rapor4DB",rapor4DB);
router.post("/rapor5DB",rapor5DB);
router.get("/lastUserId", lastUserId);

module.exports = router;
