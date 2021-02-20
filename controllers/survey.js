const path = require("path");
const { getLiseler, getMeslekler,getSorular,insertComments,insertHoslanti,insertYapabilirlik } = require("../models/survey");

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

  req.session.haha="Sasd"
  res.status(200).json({
    succes: true,
    data: "x",
  });
};
const comments = async (req, res, next) => {
  console.log("POST ÇALIŞTI")
  var x = req.body.value;
  var comment = req.body.comment;
  insertComments(x,comment,(err, data) => {
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
const hoslanti = async (req, res, next) => {
  console.log("POST ÇALIŞTI")
  var userId = req.body.userId;
  var value1 = req.body.value1;
  var value2 = req.body.value2;
  var value3 = req.body.value3;
  var value4 = req.body.value4;
  var value5 = req.body.value5;
  var value6 = req.body.value6;
  var value7 = req.body.value7;
  var value8 = req.body.value8;
  var value9 = req.body.value9;
  var value10 = req.body.value10;
  var value11 = req.body.value11;
  var value12 = req.body.value12;
  var value13 = req.body.value13;
  var value14 = req.body.value14;
  var value15 = req.body.value15;
  var value16 = req.body.value16;
  var value17= req.body.value17;
  var value18= req.body.value18;
  var value19= req.body.value19;
  var value20= req.body.value20;
  var value21= req.body.value21;
  var value22= req.body.value22;
  var value23 = req.body.value23;
  var value24 = req.body.value24;
  var valueO = req.body.valueO;
  var value25 = req.body.value25;
  var value26 = req.body.value26;
  var value27 = req.body.value27;
  var value28 = req.body.value28;
  var value29 = req.body.value29;
  var value30 = req.body.value30;
  var value31 = req.body.value31;
  var value32 = req.body.value32;
  var value33 = req.body.value33;
  var value34 = req.body.value34;
  var value35 = req.body.value35;
  var value36 = req.body.value36;
  var value37= req.body.value37;
  var value38= req.body.value38;
  var value39= req.body.value39;
  var value40= req.body.value40;
  insertHoslanti(userId,value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14,value15,value16,value17,value18,value19,value20,value21,value22,value23,value24,valueO,value25,value26,value27,value28,value29,value30,value31,value32,value33,value34,value35,value36,value37,value38,value39,value40,(err, data) => {
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
const yapabilirlik = async (req, res, next) => {
  console.log("POST ÇALIŞTI")
  var userId = req.body.userId;
  var value1 = req.body.value1y;
  var value2 = req.body.value2y;
  var value3 = req.body.value3y;
  var value4 = req.body.value4y;
  var value5 = req.body.value5y;
  var value6 = req.body.value6y;
  var value7 = req.body.value7y;
  var value8 = req.body.value8y;
  var value9 = req.body.value9y;
  var value10 = req.body.value10y;
  var value11 = req.body.value11y;
  var value12 = req.body.value12y;
  var value13 = req.body.value13y;
  var value14 = req.body.value14y;
  var value15 = req.body.value15y;
  var value16 = req.body.value16y;
  var value17= req.body.value17y;
  var value18= req.body.value18y;
  var value19= req.body.value19y;
  var value20= req.body.value20y;
  var value21= req.body.value21y;
  var value22= req.body.value22y;
  var value23 = req.body.value23y;
  var value24 = req.body.value24y;
  var valueO = req.body.valueOy;
  var value25 = req.body.value25y;
  var value26 = req.body.value26y;
  var value27 = req.body.value27y;
  var value28 = req.body.value28y;
  var value29 = req.body.value29y;
  var value30 = req.body.value30y;
  var value31 = req.body.value31y;
  var value32 = req.body.value32y;
  var value33 = req.body.value33y;
  var value34 = req.body.value34y;
  var value35 = req.body.value35y;
  var value36 = req.body.value36y;
  var value37= req.body.value37y;
  var value38= req.body.value38y;
  var value39= req.body.value39y;
  var value40= req.body.value40y;
  insertYapabilirlik(userId,value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14,value15,value16,value17,value18,value19,value20,value21,value22,value23,value24,valueO,value25,value26,value27,value28,value29,value30,value31,value32,value33,value34,value35,value36,value37,value38,value39,value40,(err, data) => {
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

module.exports = {
  getHome,
  calculateResults,
  getSorularData,
  getLiselerData,
  getMesleklerData,
  comments,
  hoslanti,
  yapabilirlik,
};
