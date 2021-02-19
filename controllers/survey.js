const path = require("path");
const { getLiseler, getMeslekler,getSorular } = require("../models/survey");

const getHome = async (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
};

const getLiselerData = async (req, res, next) => {
  getLiseler((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data)
    }
  });
};
const getMesleklerData = async (req, res, next) => {
  getMeslekler((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data)

    }
  });
};
const getSorularData = async (req, res, next) => {
  getSorular((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data)

    }
  });
};
const calculateResults = async (req, res, next) => {
  res.status(200).json({
    succes: true,
    data: "x",
  });
};

module.exports = {
  getHome,
  calculateResults,
  getSorularData,
  getLiselerData,
  getMesleklerData,
};
