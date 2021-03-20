const express = require("express");
const router = express.Router();
const survey = require("./survey");
const path = require("path");
const { getHome } = require("../controllers/survey");
const {getAdminPage} = require("../controllers/admin") 
const {getLoginPage,loginHandle,checkLoggedIn,logoutHandle} = require("../controllers/auth") 
router.get("/status", (req, res) => res.send("OK"));

router.get("/", getHome);
router.use("/api/survey", survey);


router.get("/logout", logoutHandle);
router.get("/login", getLoginPage)
router.post("/login", loginHandle)
router.get("/admin", checkLoggedIn,getAdminPage );

router.get("/admin/table", (req,res)=>{
  res.redirect("/admin")
})

router.get("/admin/dashboard", (req,res)=>{
  res.redirect("/admin")
})

module.exports = router;
