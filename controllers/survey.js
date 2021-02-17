

const getHome = async(req,res,next) => {
    res.sendFile('index.html',{
        root:"views"
    })
}

module.exports = {
    getHome
}