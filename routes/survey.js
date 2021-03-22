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
  getRaporData,
  getUserData,
  writeToExcelController,
  getCommentsCounts,
  getUsersCounts,
  getUserReport1,
  getUserReport2,
  getUserReport3,
  getUserReport4,
  getUserReport5,
  getCommentData,
  writeToExcelReport1Controller,
  writeToExcelReport2Controller,
  writeToExcelReport3Controller,
  writeToExcelReport4Controller,
  writeToExcelReport5Controller,
  writeToExcelCommentDataController,
  writeToExcelHosYapController,
  writeToExcelHosYapController2,
} = require("../controllers/survey");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("OK SURVEY");
});


router.get("/userCount", getUsersCounts);
router.get("/commentCount", getCommentsCounts);

router.get("/getUserReport1", getUserReport1);
router.get("/getUserReport2", getUserReport2);
router.get("/getUserReport3", getUserReport3);
router.get("/getUserReport4", getUserReport4);
router.get("/getUserReport5", getUserReport5);
router.get("/getCommentData", getCommentData);
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
router.get("/getUserData", getUserData);
router.get("/writeToExcel", writeToExcelController);
router.get("/writeToExcelReport1", writeToExcelReport1Controller);
router.get("/writeToExcelReport2", writeToExcelReport2Controller);
router.get("/writeToExcelReport3", writeToExcelReport3Controller);
router.get("/writeToExcelReport4", writeToExcelReport4Controller);
router.get("/writeToExcelReport5", writeToExcelReport5Controller);
router.get("/writeToExcelCommentData", writeToExcelCommentDataController);
router.get("/writeToExcelHosYap", writeToExcelHosYapController);
router.get("/writeToExcelHosYap2", writeToExcelHosYapController2);
module.exports = router;
