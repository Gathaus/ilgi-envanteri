const express = require('express');

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("OK SURVEY")
})

router.post("/results", (req,res)=>{
    res.send("OK SURVEY")
})


module.exports = router;