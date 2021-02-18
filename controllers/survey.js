

const getHome = async(req,res,next) => {
    res.sendFile('index2.html',{
        root:"views"
    })
}

const calculateResults = async (req,res,next) => {
    console.log(req.body);

}

module.exports = {
    getHome,
    calculateResults
}