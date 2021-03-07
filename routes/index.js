const express = require("express");
const router = express.Router();
const survey = require("./survey");
const path = require("path");
const { getHome } = require("../controllers/survey");

router.get("/status", (req, res) => res.send("OK"));

router.get("/", getHome);
router.use("/api/survey", survey);

router.get("/admin", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../admin-panel/build","index.html"));
});

router.get("/admin/table", (req,res)=>{
  res.redirect("/admin")
})

router.get("/admin/dashboard", (req,res)=>{
  res.redirect("/admin")
})

module.exports = router;
