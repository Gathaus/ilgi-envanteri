const express = require('express');
const {calculateResults} = require("../controllers/survey");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("OK SURVEY")
})
router.get("/results", calculateResults)
router.post("/results", calculateResults)


module.exports = router;