const path = require("path")

const getAdminPage = async (req, res) => {
    res.sendFile(path.resolve(__dirname, "../admin-panel/build","index.html"));
};

module.exports = {
    getAdminPage
}