

const getHome = async(req,res,next) => {
    res.sendFile('index.html',{
        root:"views"
    })
}

const calculateResults = async (req,res,next) => {
    res.status(200).json({
        succes:true,
        data: "x" 
    })
}

module.exports = {
    getHome,
    calculateResults
}