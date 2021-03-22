const {
  liseliTum8Dilim,
  liseliKiz8Dilim,
  liseliErkek8Dilim,
  üniliTum8Dilim,
  üniliKiz8Dilim,
  üniliErkek8Dilim,
  tüm8Dilim,
  liseliTumYDSaygin,
  liseliTum_yd,
  liselikız_yd,
  liselierkek_yd,
  universitetum_yd,
  universitekiz_yd,
  universiteerkek_yd,
  tum_yd,
  liseliTum4Kutup,
  liseliTumRAYSGD,
  liseliKizRAYSGD,
  liseliErkekRAYSGD,
  üniliTumRAYSGD,
  üniliKizRAYSGD,
  üniliErkekRAYSGD,
  tümRAYSGD,
  tumOgrenci4Kutup,
  universiteliErkek4Kutup,
  universiteliKiz4Kutup,
  universiteliTum4Kutup,
  liseliErkek4Kutup,
  liseliKiz4Kutup,
  liseliTum3Boyut,
  liseliKiz3Boyut,
  liseliErkek3Boyut,
  universiteliTum3Boyut,
  universiteliErkek3Boyut,
  universiteliKiz3Boyut,
  tumOgrenci3Boyut,
} = require("../public/js/pointArrays");
const path = require("path");
const {
  getLiseler,
  getMeslekler,
  getSorular,
  insertComments,
  insertHoslanti,
  insertYapabilirlik,
  insertUsers,
  insertRapor1,
  insertRapor2,
  insertRapor3,
  insertRapor4,
  insertRapor5,
  getLastUserId,
  getRapor1,
  getCommentsCount,
  getUsersCount,
  getUserReports1,
  getUserReports2,
  getUserReports3, 
  getUserReports4,
  getUserReports5,
  getCommentDatas,
  getHosYap,
} = require("../models/survey");
const excel = require("exceljs");
const fs = require("fs");

const getHome = async (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
};

const getUserReport1 = async (req, res, next) => {
  getUserReports1((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const getUserReport2 = async (req, res, next) => {
  getUserReports2((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const getUserReport3 = async (req, res, next) => {
  getUserReports3((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const getUserReport4 = async (req, res, next) => {
  getUserReports4((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const getUserReport5 = async (req, res, next) => {
  getUserReports5((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};

const getCommentData = async (req, res, next) => {
  getCommentDatas((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};

const getLiselerData = async (req, res, next) => {
  getLiseler((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};


const getCommentsCounts = async (req, res, next) => {
  getCommentsCount((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};

const getUsersCounts = async (req, res, next) => {
  getUsersCount((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
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
      res.send(data);
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
      res.send(data);
    }
  });
};
const calculateResults = async (req, res, next) => {
  var { hoslanma, yapabilirlik } = req.body;
  //8dilimli grafik
  let hampuan1 = [];
  for (i = 0; i < 8; i++) {
    var hoslanmaScore = sumandDivide(
      parseInt(hoslanma[i]),
      parseInt(hoslanma[i + 10]),
      parseInt(hoslanma[i + 20]),
      parseInt(hoslanma[i + 30])
    );
    hampuan1.push(hoslanmaScore);
  }
  for (i = 0; i < 8; i++) {
    var yapabilirlikScore = sumandDivide(
      parseInt(yapabilirlik[i]),
      parseInt(yapabilirlik[i + 10]),
      parseInt(yapabilirlik[i + 20]),
      parseInt(yapabilirlik[i + 30])
    );
    hampuan1.push(yapabilirlikScore);
  }

  //tablo1 liseli
  let liseliTumResults8Dilim = [];
  for (i = 0; i < 8; i++) {
    liseliTumResults8Dilim.push(
      (
        ((hampuan1[i] - liseliTum8Dilim.h_ao[i]) / liseliTum8Dilim.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 8; i++) {
    liseliTumResults8Dilim.push(
      (
        ((hampuan1[i + 8] - liseliTum8Dilim.y_ao[i]) / liseliTum8Dilim.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //tablo1 liseli kız
  let liseliKizResults8Dilim = [];
  for (i = 0; i < 8; i++) {
    liseliKizResults8Dilim.push(
      (
        ((hampuan1[i] - liseliKiz8Dilim.h_ao[i]) / liseliKiz8Dilim.h_s[i]) *
          10 +
        50
      )
    );
  }
  for (i = 0; i < 8; i++) {
    liseliKizResults8Dilim.push(
      (
        ((hampuan1[i + 8] - liseliKiz8Dilim.y_ao[i]) / liseliKiz8Dilim.y_s[i]) *
          10 +
        50
      )
    );

  }

  //tablo1 liseli erkek
  let liseliErkekResults8Dilim = [];
  for (i = 0; i < 8; i++) {
    liseliErkekResults8Dilim.push(
      (
        ((hampuan1[i] - liseliErkek8Dilim.h_ao[i]) / liseliErkek8Dilim.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 8; i++) {
    liseliErkekResults8Dilim.push(
      (
        ((hampuan1[i + 8] - liseliErkek8Dilim.y_ao[i]) /
          liseliErkek8Dilim.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //tablo1 ünili
  let üniliTumResults8Dilim = [];
  for (i = 0; i < 8; i++) {
    üniliTumResults8Dilim.push(
      (
        ((hampuan1[i] - üniliTum8Dilim.h_ao[i]) / üniliTum8Dilim.h_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 8; i++) {
    üniliTumResults8Dilim.push(
      (
        ((hampuan1[i + 8] - üniliTum8Dilim.y_ao[i]) / üniliTum8Dilim.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //tablo1 ünili kız
  let üniliKizResults8Dilim = [];
  for (i = 0; i < 8; i++) {
    üniliKizResults8Dilim.push(
      (
        ((hampuan1[i] - üniliKiz8Dilim.h_ao[i]) / üniliKiz8Dilim.h_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 8; i++) {
    üniliKizResults8Dilim.push(
      (
        ((hampuan1[i + 8] - üniliKiz8Dilim.y_ao[i]) / üniliKiz8Dilim.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //tablo1 ünili erkek
  let üniliErkekResults8Dilim = [];
  for (i = 0; i < 8; i++) {
    üniliErkekResults8Dilim.push(
      (
        ((hampuan1[i] - üniliErkek8Dilim.h_ao[i]) / üniliErkek8Dilim.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 8; i++) {
    üniliErkekResults8Dilim.push(
      (
        ((hampuan1[i + 8] - üniliErkek8Dilim.y_ao[i]) /
          üniliErkek8Dilim.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //tablo1 tüm 8dilim
  let tümResults8Dilim = [];
  for (i = 0; i < 8; i++) {
    tümResults8Dilim.push(
      (
        ((hampuan1[i] - tüm8Dilim.h_ao[i]) / tüm8Dilim.h_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 8; i++) {
    tümResults8Dilim.push(
      (
        ((hampuan1[i + 8] - tüm8Dilim.y_ao[i]) / tüm8Dilim.y_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }

  //tablo2
  //Y-D Saygınlık
  //tüm lise
  let hampuan2 = [];
  for (i = 8; i < 10; i++) {
    var hoslanmaScore = sumandDivide(
      parseInt(hoslanma[i]),
      parseInt(hoslanma[i + 10]),
      parseInt(hoslanma[i + 20]),
      parseInt(hoslanma[i + 30])
    );
    hampuan2.push(hoslanmaScore);
  }
  for (i = 8; i < 10; i++) {
    var hoslanmaScore = sumandDivide(
      parseInt(yapabilirlik[i]),
      parseInt(yapabilirlik[i + 10]),
      parseInt(yapabilirlik[i + 20]),
      parseInt(yapabilirlik[i + 30])
    );
    hampuan2.push(hoslanmaScore);
  }
  let liseliTumResultsYDSaygin = [];
  for (i = 0; i < 2; i++) {
    liseliTumResultsYDSaygin.push(
      (
        ((hampuan2[i] - liseliTum_yd.h_ao[i]) / liseliTum_yd.h_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    liseliTumResultsYDSaygin.push(
      (
        ((hampuan2[i + 2] - liseliTum_yd.y_ao[i]) / liseliTum_yd.y_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }

  //liseli kız
  let liselikizYDSaygin = [];
  for (i = 0; i < 2; i++) {
    liselikizYDSaygin.push(
      (
        ((hampuan2[i] - liselikız_yd.h_ao[i]) / liselikız_yd.h_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    liselikizYDSaygin.push(
      (
        ((hampuan2[i + 2] - liselikız_yd.y_ao[i]) / liselikız_yd.y_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }

  //liseli erkek
  let liselierkekYDSaygin = [];
  for (i = 0; i < 2; i++) {
    liselierkekYDSaygin.push(
      (
        ((hampuan2[i] - liselierkek_yd.h_ao[i]) / liselierkek_yd.h_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    liselierkekYDSaygin.push(
      (
        ((hampuan2[i + 2] - liselierkek_yd.y_ao[i]) / liselierkek_yd.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //üniversiteli tüm
  let universitetum = [];
  for (i = 0; i < 2; i++) {
    universitetum.push(
      (
        ((hampuan2[i] - universitetum_yd.h_ao[i]) / universitetum_yd.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    universitetum.push(
      (
        ((hampuan2[i + 2] - universitetum_yd.y_ao[i]) /
          universitetum_yd.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //üniversite kız
  let universitekiz = [];
  for (i = 0; i < 2; i++) {
    universitekiz.push(
      (
        ((hampuan2[i] - universitekiz_yd.h_ao[i]) / universitekiz_yd.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    universitekiz.push(
      (
        ((hampuan2[i + 2] - universitekiz_yd.y_ao[i]) /
          universitekiz_yd.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //üniversite erkek
  let universiteerkek = [];
  for (i = 0; i < 2; i++) {
    universiteerkek.push(
      (
        ((hampuan2[i] - universiteerkek_yd.h_ao[i]) /
          universiteerkek_yd.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    universiteerkek.push(
      (
        ((hampuan2[i + 2] - universiteerkek_yd.y_ao[i]) /
          universiteerkek_yd.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //tüm öğrenciler
  let tumogrenci = [];
  for (i = 0; i < 2; i++) {
    tumogrenci.push(
      (((hampuan2[i] - tum_yd.h_ao[i]) / tum_yd.h_s[i]) * 10 + 50).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    tumogrenci.push(
      (((hampuan2[i + 2] - tum_yd.y_ao[i]) / tum_yd.y_s[i]) * 10 + 50).toFixed(
        2
      )
    );
    console.log("hampuan: "+hampuan2[i + 2]+" y_a "+ tum_yd.y_ao[i] +" y_s "+tum_yd.y_s[i]+" " )
    console.log((((hampuan2[i + 2] - tum_yd.y_ao[i]) / tum_yd.y_s[i]) * 10 + 50).toFixed(
      2
    ))

  }
  console.log(tumogrenci)
  //tablo 3

  let hampuan3 = [];
  hampuan3.push(
    (
      0.924 * (parseFloat(hampuan1[7]) + parseFloat(hampuan1[0])) +
      0.383 * (parseFloat(hampuan1[1]) + parseFloat(hampuan1[6]))
    ).toFixed(2)
  );
  hampuan3.push(
    (
      0.924 * (parseFloat(hampuan1[3]) + parseFloat(hampuan1[4])) +
      0.383 * (parseFloat(hampuan1[2]) + parseFloat(hampuan1[5]))
    ).toFixed(2)
  );
  hampuan3.push(
    (
      0.924 * (parseFloat(hampuan1[1]) + parseFloat(hampuan1[3])) +
      0.383 * (parseFloat(hampuan1[0]) + parseFloat(hampuan1[3]))
    ).toFixed(2)
  );
  hampuan3.push(
    (
      0.924 * (parseFloat(hampuan1[6]) + parseFloat(hampuan1[5])) +
      0.383 * (parseFloat(hampuan1[4]) + parseFloat(hampuan1[7]))
    ).toFixed(2)
  );
  hampuan3.push(
    (
      0.924 * (parseFloat(yapabilirlik[7]) + parseFloat(yapabilirlik[0])) +
      0.383 * (parseFloat(yapabilirlik[1]) + parseFloat(yapabilirlik[6]))
    ).toFixed(2)
  );
  hampuan3.push(
    (
      0.924 * (parseFloat(yapabilirlik[3]) + parseFloat(yapabilirlik[4])) +
      0.383 * (parseFloat(yapabilirlik[2]) + parseFloat(yapabilirlik[5]))
    ).toFixed(2)
  );
  hampuan3.push(
    (
      0.924 * (parseFloat(yapabilirlik[1]) + parseFloat(yapabilirlik[3])) +
      0.383 * (parseFloat(yapabilirlik[0]) + parseFloat(yapabilirlik[3]))
    ).toFixed(2)
  );
  hampuan3.push(
    (
      0.924 * (parseFloat(yapabilirlik[6]) + parseFloat(yapabilirlik[5])) +
      0.383 * (parseFloat(yapabilirlik[4]) + parseFloat(yapabilirlik[7]))
    ).toFixed(2)
  );

  //liseli tüm
  let liseliTumResults4Kutup = [];
  for (i = 0; i < 4; i++) {
    liseliTumResults4Kutup.push(
      (
        ((hampuan3[i] - liseliTum4Kutup.h_ao[i]) / liseliTum4Kutup.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 4; i++) {
    liseliTumResults4Kutup.push(
      (
        ((hampuan3[i + 4] - liseliTum4Kutup.y_ao[i]) / liseliTum4Kutup.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //liseli kız
  let liseliKizResults4Kutup = [];
  for (i = 0; i < 4; i++) {
    liseliKizResults4Kutup.push(
      (
        ((hampuan3[i] - liseliKiz4Kutup.h_ao[i]) / liseliKiz4Kutup.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 4; i++) {
    liseliKizResults4Kutup.push(
      (
        ((hampuan3[i + 4] - liseliKiz4Kutup.y_ao[i]) / liseliKiz4Kutup.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //liseli erkek
  let liseliErkekResults4Kutup = [];
  for (i = 0; i < 4; i++) {
    liseliErkekResults4Kutup.push(
      (
        ((hampuan3[i] - liseliErkek4Kutup.h_ao[i]) / liseliErkek4Kutup.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 4; i++) {
    liseliErkekResults4Kutup.push(
      (
        ((hampuan3[i + 4] - liseliErkek4Kutup.y_ao[i]) /
          liseliErkek4Kutup.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //üniversiteli tüm
  let universiteliTumResults4Kutup = [];
  for (i = 0; i < 4; i++) {
    universiteliTumResults4Kutup.push(
      (
        ((hampuan3[i] - universiteliTum4Kutup.h_ao[i]) /
          universiteliTum4Kutup.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 4; i++) {
    universiteliTumResults4Kutup.push(
      (
        ((hampuan3[i + 4] - universiteliTum4Kutup.y_ao[i]) /
          universiteliTum4Kutup.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //üniversiteli kız
  let universiteliKizResults4Kutup = [];
  for (i = 0; i < 4; i++) {
    universiteliKizResults4Kutup.push(
      (
        ((hampuan3[i] - universiteliKiz4Kutup.h_ao[i]) /
          universiteliKiz4Kutup.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 4; i++) {
    universiteliKizResults4Kutup.push(
      (
        ((hampuan3[i + 4] - universiteliKiz4Kutup.y_ao[i]) /
          universiteliKiz4Kutup.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //üniversiteli erkek
  let universiteliErkekResults4Kutup = [];
  for (i = 0; i < 4; i++) {
    universiteliErkekResults4Kutup.push(
      (
        ((hampuan3[i] - universiteliErkek4Kutup.h_ao[i]) /
          universiteliErkek4Kutup.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 4; i++) {
    universiteliErkekResults4Kutup.push(
      (
        ((hampuan3[i + 4] - universiteliErkek4Kutup.y_ao[i]) /
          universiteliErkek4Kutup.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //tüm öğrenciler
  let tumResults4Kutup = [];
  for (i = 0; i < 4; i++) {
    tumResults4Kutup.push(
      (
        ((hampuan3[i] - tumOgrenci4Kutup.h_ao[i]) / tumOgrenci4Kutup.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 4; i++) {
    tumResults4Kutup.push(
      (
        ((hampuan3[i + 4] - tumOgrenci4Kutup.y_ao[i]) /
          tumOgrenci4Kutup.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //tablo 4
  let hampuan4 = [];
  hampuan4.push(hampuan1[4]);
  hampuan4.push(hampuan1[5]);
  hampuan4.push(hampuan1[6]);
  hampuan4.push(
    (2 * ((parseFloat(hampuan1[7]) + parseFloat(hampuan1[0])) / 3)).toFixed(2)
  );
  hampuan4.push(
    (2 * ((parseFloat(hampuan1[1]) + parseFloat(hampuan1[0])) / 3)).toFixed(2)
  );
  hampuan4.push(
    (2 * ((parseFloat(hampuan1[3]) + parseFloat(hampuan1[2])) / 3)).toFixed(2)
  );
  hampuan4.push(hampuan1[4 + 8]);
  hampuan4.push(hampuan1[5 + 8]);
  hampuan4.push(hampuan1[6 + 8]);
  hampuan4.push(
    (
      2 *
      ((parseFloat(hampuan1[7 + 8]) + parseFloat(hampuan1[0 + 8])) / 3)
    ).toFixed(2)
  );
  hampuan4.push(
    (
      2 *
      ((parseFloat(hampuan1[1 + 8]) + parseFloat(hampuan1[0 + 8])) / 3)
    ).toFixed(2)
  );
  hampuan4.push(
    (
      2 *
      ((parseFloat(hampuan1[3 + 8]) + parseFloat(hampuan1[2 + 8])) / 3)
    ).toFixed(2)
  );
  //liseli
  let liseliTumResultsRAYSGD = [];

  for (i = 0; i < 6; i++) {
    liseliTumResultsRAYSGD.push(
      (
        ((hampuan4[i] - liseliTumRAYSGD.h_ao[i]) / liseliTumRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    liseliTumResultsRAYSGD.push(
      (
        ((hampuan4[i + 6] - liseliTumRAYSGD.y_ao[i]) / liseliTumRAYSGD.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //liseli kız
  let liseliKizResultsRAYSGD = [];

  for (i = 0; i < 6; i++) {
    liseliKizResultsRAYSGD.push(
      (
        ((hampuan4[i] - liseliKizRAYSGD.h_ao[i]) / liseliKizRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    liseliKizResultsRAYSGD.push(
      (
        ((hampuan4[i + 6] - liseliKizRAYSGD.y_ao[i]) / liseliKizRAYSGD.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //liseli erkek
  let liseliErkekResultsRAYSGD = [];

  for (i = 0; i < 6; i++) {
    liseliErkekResultsRAYSGD.push(
      (
        ((hampuan4[i] - liseliErkekRAYSGD.h_ao[i]) / liseliErkekRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    liseliErkekResultsRAYSGD.push(
      (
        ((hampuan4[i + 6] - liseliErkekRAYSGD.y_ao[i]) /
          liseliErkekRAYSGD.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //ünili
  let üniliTumResultsRAYSGD = [];

  for (i = 0; i < 6; i++) {
    üniliTumResultsRAYSGD.push(
      (
        ((hampuan4[i] - üniliTumRAYSGD.h_ao[i]) / üniliTumRAYSGD.h_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    üniliTumResultsRAYSGD.push(
      (
        ((hampuan4[i + 6] - üniliTumRAYSGD.y_ao[i]) / üniliTumRAYSGD.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //ünili kız
  let üniliKizResultsRAYSGD = [];

  for (i = 0; i < 6; i++) {
    üniliKizResultsRAYSGD.push(
      (
        ((hampuan4[i] - üniliKizRAYSGD.h_ao[i]) / üniliKizRAYSGD.h_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    üniliKizResultsRAYSGD.push(
      (
        ((hampuan4[i + 6] - üniliKizRAYSGD.y_ao[i]) / üniliKizRAYSGD.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //ünili erkek
  let üniliErkekResultsRAYSGD = [];

  for (i = 0; i < 6; i++) {
    üniliErkekResultsRAYSGD.push(
      (
        ((hampuan4[i] - üniliErkekRAYSGD.h_ao[i]) / üniliErkekRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    üniliErkekResultsRAYSGD.push(
      (
        ((hampuan4[i + 6] - üniliErkekRAYSGD.y_ao[i]) /
          üniliErkekRAYSGD.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //tüm
  let tümResultsRAYSGD = [];

  for (i = 0; i < 6; i++) {
    tümResultsRAYSGD.push(
      (
        ((hampuan4[i] - tümRAYSGD.h_ao[i]) / tümRAYSGD.h_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    tümResultsRAYSGD.push(
      (
        ((hampuan4[i + 6] - tümRAYSGD.y_ao[i]) / tümRAYSGD.y_s[i]) * 10 +
        50
      ).toFixed(2)
    );
  }

  //tablo 5
  let hampuan5 = [];
  hampuan5.push(parseFloat(hampuan3[0] - parseFloat(hampuan3[1])));
  hampuan5.push(parseFloat(hampuan3[3] - parseFloat(hampuan3[2])));
  hampuan5.push(parseFloat(hampuan2[0] - parseFloat(hampuan2[1])));
  hampuan5.push(parseFloat(hampuan3[0 + 4] - parseFloat(hampuan3[1 + 4])));
  hampuan5.push(parseFloat(hampuan3[3 + 4] - parseFloat(hampuan3[2 + 4])));
  hampuan5.push(parseFloat(hampuan2[0 + 2] - parseFloat(hampuan2[1 + 2])));

  //liseli tüm
  let liseliTumResults3Boyut = [];
  for (i = 0; i < 3; i++) {
    liseliTumResults3Boyut.push(
      (
        ((hampuan5[i] - liseliTum3Boyut.h_ao[i]) / liseliTum3Boyut.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 3; i++) {
    liseliTumResults3Boyut.push(
      (
        ((hampuan5[i + 3] - liseliTum3Boyut.y_ao[i]) / liseliTum3Boyut.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //liseli kız
  let liseliKizResults3Boyut = [];
  for (i = 0; i < 3; i++) {
    liseliKizResults3Boyut.push(
      (
        ((hampuan5[i] - liseliKiz3Boyut.h_ao[i]) / liseliKiz3Boyut.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 3; i++) {
    liseliKizResults3Boyut.push(
      (
        ((hampuan5[i + 3] - liseliKiz3Boyut.y_ao[i]) / liseliKiz3Boyut.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //liseli erkek
  let liseliErkekResults3Boyut = [];
  for (i = 0; i < 3; i++) {
    liseliErkekResults3Boyut.push(
      (
        ((hampuan5[i] - liseliErkek3Boyut.h_ao[i]) / liseliErkek3Boyut.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 3; i++) {
    liseliErkekResults3Boyut.push(
      (
        ((hampuan5[i + 3] - liseliErkek3Boyut.y_ao[i]) /
          liseliErkek3Boyut.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //tüm üni
  let universiteTumResults3Boyut = [];
  for (i = 0; i < 3; i++) {
    universiteTumResults3Boyut.push(
      (
        ((hampuan5[i] - universiteliTum3Boyut.h_ao[i]) /
          universiteliTum3Boyut.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 3; i++) {
    universiteTumResults3Boyut.push(
      (
        ((hampuan5[i + 3] - universiteliTum3Boyut.y_ao[i]) /
          universiteliTum3Boyut.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //üni kız
  let universiteKizResults3Boyut = [];
  for (i = 0; i < 3; i++) {
    universiteKizResults3Boyut.push(
      (
        ((hampuan5[i] - universiteliKiz3Boyut.h_ao[i]) /
          universiteliKiz3Boyut.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 3; i++) {
    universiteKizResults3Boyut.push(
      (
        ((hampuan5[i + 3] - universiteliKiz3Boyut.y_ao[i]) /
          universiteliKiz3Boyut.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //üni erkek
  let universiteErkekResults3Boyut = [];
  for (i = 0; i < 3; i++) {
    universiteErkekResults3Boyut.push(
      (
        ((hampuan5[i] - universiteliErkek3Boyut.h_ao[i]) /
          universiteliErkek3Boyut.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 3; i++) {
    universiteErkekResults3Boyut.push(
      (
        ((hampuan5[i + 3] - universiteliErkek3Boyut.y_ao[i]) /
          universiteliErkek3Boyut.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  //tüm öğrenciler
  let tumResults3Boyut = [];
  for (i = 0; i < 3; i++) {
    tumResults3Boyut.push(
      (
        ((hampuan5[i] - tumOgrenci3Boyut.h_ao[i]) / tumOgrenci3Boyut.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 3; i++) {
    tumResults3Boyut.push(
      (
        ((hampuan5[i + 3] - tumOgrenci3Boyut.y_ao[i]) /
          tumOgrenci3Boyut.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }

  res.status(200).json({
    succes: true,
    rapor1_1: liseliTumResults8Dilim,
    rapor1_2: liseliKizResults8Dilim,
    rapor1_3: liseliErkekResults8Dilim,
    rapor1_4: üniliTumResults8Dilim,
    rapor1_5: üniliKizResults8Dilim,
    rapor1_6: üniliErkekResults8Dilim,
    rapor1_7: tümResults8Dilim,
    rapor2_1: liseliTumResultsYDSaygin,
    rapor2_2: liselikizYDSaygin,
    rapor2_3: liselierkekYDSaygin,
    rapor2_4: universitetum,
    rapor2_5: universitekiz,
    rapor2_6: universiteerkek,
    rapor2_7: tumogrenci,
    rapor3_1: liseliTumResults4Kutup,
    rapor3_2: liseliKizResults4Kutup,
    rapor3_3: liseliErkekResults4Kutup,
    rapor3_4: universiteliTumResults4Kutup,
    rapor3_5: universiteliKizResults4Kutup,
    rapor3_6: universiteliErkekResults4Kutup,
    rapor3_7: tumResults4Kutup,
    rapor4_1: liseliTumResultsRAYSGD,
    rapor4_2: liseliKizResultsRAYSGD,
    rapor4_3: liseliErkekResultsRAYSGD,
    rapor4_4: üniliTumResultsRAYSGD,
    rapor4_5: üniliKizResultsRAYSGD,
    rapor4_6: üniliErkekResultsRAYSGD,
    rapor4_7: tümResultsRAYSGD,
    rapor5_1: liseliTumResults3Boyut,
    rapor5_2: liseliKizResults3Boyut,
    rapor5_3: liseliErkekResults3Boyut,
    rapor5_4: universiteTumResults3Boyut,
    rapor5_5: universiteKizResults3Boyut,
    rapor5_6: universiteErkekResults3Boyut,
    rapor5_7: tumResults3Boyut,
  });
};
const calculateResults2 = async (req, res, next) => {
  res.status(200).json({
    succes: true,
    rapor1_1: liseliTumResults8Dilim,
    rapor1_2: liseliKizResults8Dilim,
    rapor1_3: liseliErkekResults8Dilim,
    rapor1_4: üniliTumResults8Dilim,
    rapor1_5: üniliKizResults8Dilim,
    rapor1_6: üniliErkekResults8Dilim,
    rapor1_7: tümResults8Dilim,
    rapor2_1: liseliTumResultsYDSaygin,
    rapor2_2: liselikizYDSaygin,
    rapor2_3: liselierkekYDSaygin,
    rapor2_4: universitetum,
    rapor2_5: universitekiz,
    rapor2_6: universiteerkek,
    rapor2_7: tumogrenci,
    rapor3_1: liseliTumResults4Kutup,
    rapor3_2: liseliKizResults4Kutup,
    rapor3_3: liseliErkekResults4Kutup,
    rapor3_4: universiteliTumResults4Kutup,
    rapor3_5: universiteliKizResults4Kutup,
    rapor3_6: universiteliErkekResults4Kutup,
    rapor3_7: tumResults4Kutup,
    rapor4_1: liseliTumResultsRAYSGD,
    rapor4_2: liseliKizResultsRAYSGD,
    rapor4_3: liseliErkekResultsRAYSGD,
    rapor4_4: üniliTumResultsRAYSGD,
    rapor4_5: üniliKizResultsRAYSGD,
    rapor4_6: üniliErkekResultsRAYSGD,
    rapor4_7: tümResultsRAYSGD,
    rapor5_1: liseliTumResults3Boyut,
    rapor5_2: liseliKizResults3Boyut,
    rapor5_3: liseliErkekResults3Boyut,
    rapor5_4: universiteTumResults3Boyut,
    rapor5_5: universiteKizResults3Boyut,
    rapor5_6: universiteErkekResults3Boyut,
    rapor5_7: tumResults3Boyut,
  });
};
function sumandDivide(x1, x2, x3, x4) {
  return ((x1 + x2 + x3 + x4) / 4).toFixed(2);
}

function map(x, in_min, in_max, out_min, out_max) {
  return (
    ((x - in_min) * (out_max - out_min)) / (in_max - in_min) +
    out_min
  ).toFixed(2);
}

const comments = async (req, res, next) => {
  console.log("POST ÇALIŞTI");
  var value = req.body.value;
  var comment = req.body.comment;
  var userId=req.body.userId;
  insertComments(value, comment,userId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const hoslanti = async (req, res, next) => {
  //console.log("POST ÇALIŞTI");
  var userId = req.body.userId;
  var arrHos = req.body.arrHos;
  //console.log(arrHos[1]);
  insertHoslanti(userId, arrHos, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const yapabilirlik = async (req, res, next) => {
  //console.log("POST ÇALIŞTI");
  var userId = req.body.userId;
  var arrYap = req.body.arrYap;
  //console.log(arrYap[1]);
  insertYapabilirlik(userId, arrYap, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const users = async (req, res, next) => {
  console.log("POST ÇALIŞTI");
  var name = req.body.name;
  var age = req.body.age;
  var sex = req.body.sex;
  var scoreType1 = req.body.scoreType1;
  var scoreType2 = req.body.scoreType2;
  var dropdown1 = req.body.dropdown1;
  var dropdown2 = req.body.dropdown2;
  var resultType = req.body.resultType;
  console.log(
    name,
    age,
    sex,
    scoreType2,
    scoreType1,
    dropdown2,
    dropdown1,
    resultType
  );
  insertUsers(
    name,
    age,
    sex,
    scoreType1,
    scoreType2,
    dropdown1,
    dropdown2,
    resultType,
    (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers.",
        });
      else {
        res.send(data);
      }
    }
  );
};

const lastUserId = async (req, res, next) => {
  getLastUserId((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};

const getRaporData = async (req, res, next) => {
  res.status(200).json({
    succes: "true",
    rapor1: [
      [55, 65, 45, 45, 65, 65, 55, 55],
      [55, 65, 45, 45, 0, 65, 55, 55],
      [55, 0, 45, 45, 65, 65, 55, 55],
      [55, 65, 0, 45, 65, 65, 55, 55],
      [55, 65, 45, 45, 0, 65, 44, 55],
      [33, 65, 44, 45, 65, 65, 55, 55],
      [55, 65, 45, 45, 0, 65, 55, 55],
      [55, 65, 1, 45, 65, 65, 55, 55],
      [55, 65, 45, 45, 65, 65, 55, 44],
      [55, 65, 45, 45, 22, 65, 55, 55],
      [55, 65, 45, 45, 65, 65, 55, 55],
      [55, 65, 45, 45, 65, 65, 55, 55],
      [55, 65, 45, 33, 65, 65, 55, 55],
      [55, 65, 45, 45, 65, 65, 55, 55],
    ],
  });
};
const rapor1DB = async (req, res, next) => {
  var userId = req.body.userId;
  var raporValues1 = req.body.raporValues1;
  insertRapor1(userId, raporValues1, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const rapor2DB = async (req, res, next) => {
  var userId = req.body.userId;
  var raporValues2 = req.body.raporValues2;
  insertRapor2(userId, raporValues2, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const rapor3DB = async (req, res, next) => {
  var userId = req.body.userId;
  var raporValues3 = req.body.raporValues3;
  insertRapor3(userId, raporValues3, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const rapor4DB = async (req, res, next) => {
  var userId = req.body.userId;
  var raporValues4 = req.body.raporValues4;
  insertRapor4(userId, raporValues4, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};
const rapor5DB = async (req, res, next) => {
  var userId = req.body.userId;
  var raporValues5 = req.body.raporValues5;
  insertRapor5(userId, raporValues5, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};

const getUserData = async (req, res, next) => {
  getRapor1((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      res.send(data);
    }
  });
};

const writeToExcelController = async (req, res, next) => {
  getRapor1((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      const jsonCustomers = JSON.parse(JSON.stringify(data));
      let workbook = new excel.Workbook(); //creating workbook
      let worksheet = workbook.addWorksheet("Customers");

      worksheet.columns = [
        { header: "Id", key: "Id", width: 10 },
        { header: "Rumuz", key: "Rumuz", width: 30 },
        { header: "Yaş", key: "Yas", width: 10 },
        { header: "Cinsiyet", key: "Cinsiyet", width: 30 },
        { header: "Seçilen Puan Türü", key: "Soru1", width: 30 },
        { header: "Hissedilen Puan Türü", key: "Soru2", width: 30 },
        { header: "Lise Türü", key: "Soru3", width: 30 },
        { header: "Öğrenim Hedefi", key: "Soru4", width: 30 },
        { header: "Karşılaştırılmak İstenen Grup", key: "Soru5", width: 30 },
      ];

      worksheet.addRows(jsonCustomers);
      //delete if exist

      if (fs.existsSync(path.join(__dirname, "../customer.xlsx"))) {
        fs.unlink(path.join(__dirname, "../customer.xlsx"), (err) => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log(path.join(__dirname, "../customer.xlsx") + ` deleted`);
            workbook.xlsx.writeFile("customer.xlsx").then((response) => {
              res.sendFile(path.join(__dirname, "../customer.xlsx"));
            });
          }
        });
      } else {
        workbook.xlsx.writeFile("customer.xlsx").then((response) => {
          res.sendFile(path.join(__dirname, "../customer.xlsx"));
        });
      }
      // Write to File
    }
  });
};
const writeToExcelReport1Controller = async (req, res, next) => {
  getUserReports1((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      const jsonReport1 = JSON.parse(JSON.stringify(data))[0];
      let workbook = new excel.Workbook(); //creating workbook
      let worksheet = workbook.addWorksheet("Report1");
      
      worksheet.columns = [
        { header: "Rumuz", key: "Rumuz", width: 30 },
        { header: "Yaş", key: "Yas", width: 10 },
        { header: "Cinsiyet", key: "Cinsiyet", width: 30 },
        { header: "Seçilen Puan Türü", key: "Soru1", width: 30 },
        { header: "Hissedilen Puan Türü", key: "Soru2", width: 30 },
        { header: "Lise Türü", key: "Soru3", width: 30 },
        { header: "Öğrenim Hedefi", key: "Soru4", width: 30 },
        { header: "Karşılaştırılmak İstenen Grup", key: "Soru5", width: 30 },
        { header: "Liseli Tüm Hoşlantı", key: "Liseli Tüm Hoşlantı", width: 10 },
        { header: "Liseli Tüm Yapabilirlik", key: "Liseli Tüm Yapabilirlik", width: 30 },
        { header: "Liseli Kız Hoşlantı", key: "Liseli Kız Hoşlantı", width: 30 },
        { header: "Liseli Kız Yapabilirlik", key: "Liseli Kız Yapabilirlik", width: 30 },
        { header: "Liseli Erkek Hoşlantı", key: "Liseli Erkek Hoşlantı", width: 30 },
        { header: "Liseli Erkek Yapabilirlik", key: "Liseli Erkek Yapabilirlik", width: 30 },
        { header: "Üniversiteli Tüm Hoşlantı", key: "Üniversiteli Tüm Hoşlantı", width: 30 },
        { header: "Üniversiteli Tüm Yapabilirlik", key: "Üniversiteli Tüm Yapabilirlik", width: 10 },
        { header: "Üniversiteli Kız Hoşlantı", key: "Üniversiteli Kız Hoşlantı", width: 30 },
        { header: "Üniversiteli Kız Yapabilirlik", key: "Üniversiteli Kız Yapabilirlik", width: 30 },
        { header: "Üniversiteli Erkek Hoşlantı", key: "Üniversiteli Erkek Hoşlantı", width: 30 },
        { header: "Üniversiteli Erkek Yapabilirlik", key: "Üniversiteli Erkek Yapabilirlik", width: 30 },
        { header: "Tüm Hoşlantı", key: "Tüm Hoşlantı", width: 30 },
        { header: "Tüm Yapabilirlik", key: "Tüm Yapabilirlik", width: 30 },
      ];

      worksheet.addRows(jsonReport1);
      //delete if exist

      if (fs.existsSync(path.join(__dirname, "../report1.xlsx"))) {
        fs.unlink(path.join(__dirname, "../report1.xlsx"), (err) => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log(path.join(__dirname, "../report1.xlsx") + ` deleted`);
            workbook.xlsx.writeFile("report1.xlsx").then((response) => {
              res.sendFile(path.join(__dirname, "../report1.xlsx"));
            });
          }
        });
      } else {
        workbook.xlsx.writeFile("report1.xlsx").then((response) => {
          res.sendFile(path.join(__dirname, "../report1.xlsx"));
        });
      }
      // Write to File
    }
  });
};

const writeToExcelReport2Controller = async (req, res, next) => {
  getUserReports2((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      const jsonReport2 = JSON.parse(JSON.stringify(data))[0];
      let workbook = new excel.Workbook(); //creating workbook
      let worksheet = workbook.addWorksheet("Report2");
      
      worksheet.columns = [
        { header: "Rumuz", key: "Rumuz", width: 30 },
        { header: "Yaş", key: "Yas", width: 10 },
        { header: "Cinsiyet", key: "Cinsiyet", width: 30 },
        { header: "Seçilen Puan Türü", key: "Soru1", width: 30 },
        { header: "Hissedilen Puan Türü", key: "Soru2", width: 30 },
        { header: "Lise Türü", key: "Soru3", width: 30 },
        { header: "Öğrenim Hedefi", key: "Soru4", width: 30 },
        { header: "Karşılaştırılmak İstenen Grup", key: "Soru5", width: 30 },
        { header: "Liseli Tüm Hoşlantı", key: "Liseli Tüm Hoşlantı", width: 10 },
        { header: "Liseli Tüm Yapabilirlik", key: "Liseli Tüm Yapabilirlik", width: 30 },
        { header: "Liseli Kız Hoşlantı", key: "Liseli Kız Hoşlantı", width: 30 },
        { header: "Liseli Kız Yapabilirlik", key: "Liseli Kız Yapabilirlik", width: 30 },
        { header: "Liseli Erkek Hoşlantı", key: "Liseli Erkek Hoşlantı", width: 30 },
        { header: "Liseli Erkek Yapabilirlik", key: "Liseli Erkek Yapabilirlik", width: 30 },
        { header: "Üniversiteli Tüm Hoşlantı", key: "Üniversiteli Tüm Hoşlantı", width: 30 },
        { header: "Üniversiteli Tüm Yapabilirlik", key: "Üniversiteli Tüm Yapabilirlik", width: 10 },
        { header: "Üniversiteli Kız Hoşlantı", key: "Üniversiteli Kız Hoşlantı", width: 30 },
        { header: "Üniversiteli Kız Yapabilirlik", key: "Üniversiteli Kız Yapabilirlik", width: 30 },
        { header: "Üniversiteli Erkek Hoşlantı", key: "Üniversiteli Erkek Hoşlantı", width: 30 },
        { header: "Üniversiteli Erkek Yapabilirlik", key: "Üniversiteli Erkek Yapabilirlik", width: 30 },
        { header: "Tüm Hoşlantı", key: "Tüm Hoşlantı", width: 30 },
        { header: "Tüm Yapabilirlik", key: "Tüm Yapabilirlik", width: 30 },
      ];

      worksheet.addRows(jsonReport2);
      //delete if exist

      if (fs.existsSync(path.join(__dirname, "../report2.xlsx"))) {
        fs.unlink(path.join(__dirname, "../report2.xlsx"), (err) => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log(path.join(__dirname, "../report2.xlsx") + ` deleted`);
            workbook.xlsx.writeFile("report2.xlsx").then((response) => {
              res.sendFile(path.join(__dirname, "../report2.xlsx"));
            });
          }
        });
      } else {
        workbook.xlsx.writeFile("report2.xlsx").then((response) => {
          res.sendFile(path.join(__dirname, "../report2.xlsx"));
        });
      }
      // Write to File
    }
  });
};

const writeToExcelReport3Controller = async (req, res, next) => {
  getUserReports3((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      const jsonReport3 = JSON.parse(JSON.stringify(data))[0];
      let workbook = new excel.Workbook(); //creating workbook
      let worksheet = workbook.addWorksheet("Report3");
      
      worksheet.columns = [
        { header: "Rumuz", key: "Rumuz", width: 30 },
        { header: "Yaş", key: "Yas", width: 10 },
        { header: "Cinsiyet", key: "Cinsiyet", width: 30 },
        { header: "Seçilen Puan Türü", key: "Soru1", width: 30 },
        { header: "Hissedilen Puan Türü", key: "Soru2", width: 30 },
        { header: "Lise Türü", key: "Soru3", width: 30 },
        { header: "Öğrenim Hedefi", key: "Soru4", width: 30 },
        { header: "Karşılaştırılmak İstenen Grup", key: "Soru5", width: 30 },
        { header: "Liseli Tüm Hoşlantı", key: "Liseli Tüm Hoşlantı", width: 10 },
        { header: "Liseli Tüm Yapabilirlik", key: "Liseli Tüm Yapabilirlik", width: 30 },
        { header: "Liseli Kız Hoşlantı", key: "Liseli Kız Hoşlantı", width: 30 },
        { header: "Liseli Kız Yapabilirlik", key: "Liseli Kız Yapabilirlik", width: 30 },
        { header: "Liseli Erkek Hoşlantı", key: "Liseli Erkek Hoşlantı", width: 30 },
        { header: "Liseli Erkek Yapabilirlik", key: "Liseli Erkek Yapabilirlik", width: 30 },
        { header: "Üniversiteli Tüm Hoşlantı", key: "Üniversiteli Tüm Hoşlantı", width: 30 },
        { header: "Üniversiteli Tüm Yapabilirlik", key: "Üniversiteli Tüm Yapabilirlik", width: 10 },
        { header: "Üniversiteli Kız Hoşlantı", key: "Üniversiteli Kız Hoşlantı", width: 30 },
        { header: "Üniversiteli Kız Yapabilirlik", key: "Üniversiteli Kız Yapabilirlik", width: 30 },
        { header: "Üniversiteli Erkek Hoşlantı", key: "Üniversiteli Erkek Hoşlantı", width: 30 },
        { header: "Üniversiteli Erkek Yapabilirlik", key: "Üniversiteli Erkek Yapabilirlik", width: 30 },
        { header: "Tüm Hoşlantı", key: "Tüm Hoşlantı", width: 30 },
        { header: "Tüm Yapabilirlik", key: "Tüm Yapabilirlik", width: 30 },
      ];

      worksheet.addRows(jsonReport3);
      //delete if exist

      if (fs.existsSync(path.join(__dirname, "../report3.xlsx"))) {
        fs.unlink(path.join(__dirname, "../report3.xlsx"), (err) => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log(path.join(__dirname, "../report3.xlsx") + ` deleted`);
            workbook.xlsx.writeFile("report3.xlsx").then((response) => {
              res.sendFile(path.join(__dirname, "../report3.xlsx"));
            });
          }
        });
      } else {
        workbook.xlsx.writeFile("report3.xlsx").then((response) => {
          res.sendFile(path.join(__dirname, "../report3.xlsx"));
        });
      }
      // Write to File
    }
  });
};

const writeToExcelReport4Controller = async (req, res, next) => {
  getUserReports4((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      const jsonReport4 = JSON.parse(JSON.stringify(data))[0];
      let workbook = new excel.Workbook(); //creating workbook
      let worksheet = workbook.addWorksheet("Report4");
      
      worksheet.columns = [
        { header: "Rumuz", key: "Rumuz", width: 30 },
        { header: "Yaş", key: "Yas", width: 10 },
        { header: "Cinsiyet", key: "Cinsiyet", width: 30 },
        { header: "Seçilen Puan Türü", key: "Soru1", width: 30 },
        { header: "Hissedilen Puan Türü", key: "Soru2", width: 30 },
        { header: "Lise Türü", key: "Soru3", width: 30 },
        { header: "Öğrenim Hedefi", key: "Soru4", width: 30 },
        { header: "Karşılaştırılmak İstenen Grup", key: "Soru5", width: 30 },
        { header: "Liseli Tüm Hoşlantı", key: "Liseli Tüm Hoşlantı", width: 10 },
        { header: "Liseli Tüm Yapabilirlik", key: "Liseli Tüm Yapabilirlik", width: 30 },
        { header: "Liseli Kız Hoşlantı", key: "Liseli Kız Hoşlantı", width: 30 },
        { header: "Liseli Kız Yapabilirlik", key: "Liseli Kız Yapabilirlik", width: 30 },
        { header: "Liseli Erkek Hoşlantı", key: "Liseli Erkek Hoşlantı", width: 30 },
        { header: "Liseli Erkek Yapabilirlik", key: "Liseli Erkek Yapabilirlik", width: 30 },
        { header: "Üniversiteli Tüm Hoşlantı", key: "Üniversiteli Tüm Hoşlantı", width: 30 },
        { header: "Üniversiteli Tüm Yapabilirlik", key: "Üniversiteli Tüm Yapabilirlik", width: 10 },
        { header: "Üniversiteli Kız Hoşlantı", key: "Üniversiteli Kız Hoşlantı", width: 30 },
        { header: "Üniversiteli Kız Yapabilirlik", key: "Üniversiteli Kız Yapabilirlik", width: 30 },
        { header: "Üniversiteli Erkek Hoşlantı", key: "Üniversiteli Erkek Hoşlantı", width: 30 },
        { header: "Üniversiteli Erkek Yapabilirlik", key: "Üniversiteli Erkek Yapabilirlik", width: 30 },
        { header: "Tüm Hoşlantı", key: "Tüm Hoşlantı", width: 30 },
        { header: "Tüm Yapabilirlik", key: "Tüm Yapabilirlik", width: 30 },
      ];

      worksheet.addRows(jsonReport4);
      //delete if exist

      if (fs.existsSync(path.join(__dirname, "../report4.xlsx"))) {
        fs.unlink(path.join(__dirname, "../report4.xlsx"), (err) => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log(path.join(__dirname, "../report4.xlsx") + ` deleted`);
            workbook.xlsx.writeFile("report4.xlsx").then((response) => {
              res.sendFile(path.join(__dirname, "../report4.xlsx"));
            });
          }
        });
      } else {
        workbook.xlsx.writeFile("report4.xlsx").then((response) => {
          res.sendFile(path.join(__dirname, "../report4.xlsx"));
        });
      }
      // Write to File
    }
  });
};
const writeToExcelReport5Controller = async (req, res, next) => {
  getUserReports5((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      const jsonReport5 = JSON.parse(JSON.stringify(data))[0];
      let workbook = new excel.Workbook(); //creating workbook
      let worksheet = workbook.addWorksheet("Report5");
      
      worksheet.columns = [
        { header: "Rumuz", key: "Rumuz", width: 30 },
        { header: "Yaş", key: "Yas", width: 10 },
        { header: "Cinsiyet", key: "Cinsiyet", width: 30 },
        { header: "Seçilen Puan Türü", key: "Soru1", width: 30 },
        { header: "Hissedilen Puan Türü", key: "Soru2", width: 30 },
        { header: "Lise Türü", key: "Soru3", width: 30 },
        { header: "Öğrenim Hedefi", key: "Soru4", width: 30 },
        { header: "Karşılaştırılmak İstenen Grup", key: "Soru5", width: 30 },
        { header: "Liseli Tüm Hoşlantı", key: "Liseli Tüm Hoşlantı", width: 10 },
        { header: "Liseli Tüm Yapabilirlik", key: "Liseli Tüm Yapabilirlik", width: 30 },
        { header: "Liseli Kız Hoşlantı", key: "Liseli Kız Hoşlantı", width: 30 },
        { header: "Liseli Kız Yapabilirlik", key: "Liseli Kız Yapabilirlik", width: 30 },
        { header: "Liseli Erkek Hoşlantı", key: "Liseli Erkek Hoşlantı", width: 30 },
        { header: "Liseli Erkek Yapabilirlik", key: "Liseli Erkek Yapabilirlik", width: 30 },
        { header: "Üniversiteli Tüm Hoşlantı", key: "Üniversiteli Tüm Hoşlantı", width: 30 },
        { header: "Üniversiteli Tüm Yapabilirlik", key: "Üniversiteli Tüm Yapabilirlik", width: 10 },
        { header: "Üniversiteli Kız Hoşlantı", key: "Üniversiteli Kız Hoşlantı", width: 30 },
        { header: "Üniversiteli Kız Yapabilirlik", key: "Üniversiteli Kız Yapabilirlik", width: 30 },
        { header: "Üniversiteli Erkek Hoşlantı", key: "Üniversiteli Erkek Hoşlantı", width: 30 },
        { header: "Üniversiteli Erkek Yapabilirlik", key: "Üniversiteli Erkek Yapabilirlik", width: 30 },
        { header: "Tüm Hoşlantı", key: "Tüm Hoşlantı", width: 30 },
        { header: "Tüm Yapabilirlik", key: "Tüm Yapabilirlik", width: 30 },
      ];

      worksheet.addRows(jsonReport5);
      //delete if exist

      if (fs.existsSync(path.join(__dirname, "../report5.xlsx"))) {
        fs.unlink(path.join(__dirname, "../report5.xlsx"), (err) => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log(path.join(__dirname, "../report5.xlsx") + ` deleted`);
            workbook.xlsx.writeFile("report5.xlsx").then((response) => {
              res.sendFile(path.join(__dirname, "../report5.xlsx"));
            });
          }
        });
      } else {
        workbook.xlsx.writeFile("report5.xlsx").then((response) => {
          res.sendFile(path.join(__dirname, "../report5.xlsx"));
        });
      }
      // Write to File
    }
  });
};

const writeToExcelCommentDataController = async (req, res, next) => {
  getCommentDatas((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      const jsonComments = JSON.parse(JSON.stringify(data));
      let workbook = new excel.Workbook(); //creating workbook
      let worksheet = workbook.addWorksheet("Comments");
      
      worksheet.columns = [
        { header: "Id", key: "Id", width: 30 },
        { header: "Değer", key: "Value", width: 10 },
        { header: "Yorum", key: "Yorum", width: 30 },
      ];

      worksheet.addRows(jsonComments);
      //delete if exist

      if (fs.existsSync(path.join(__dirname, "../comments.xlsx"))) {
        fs.unlink(path.join(__dirname, "../comments.xlsx"), (err) => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log(path.join(__dirname, "../comments.xlsx") + ` deleted`);
            workbook.xlsx.writeFile("comments.xlsx").then((response) => {
              res.sendFile(path.join(__dirname, "../comments.xlsx"));
            });
          }
        });
      } else {
        workbook.xlsx.writeFile("comments.xlsx").then((response) => {
          res.sendFile(path.join(__dirname, "../comments.xlsx"));
        });
      }
      // Write to File
    }
  });
};

const writeToExcelHosYapController = async (req, res, next) => {
  getHosYap((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      const jsonHosYap = JSON.parse(JSON.stringify(data))[0];
      let workbook = new excel.Workbook(); //creating workbook
      let worksheet = workbook.addWorksheet("HoslanmaYapabilirlik");
      console.log(data);
      worksheet.columns = [
        { key: "Hoslanma1", header: "Hoşlantı Madde 1", width: 10 },
        { key: "HMadde2", header: "Madde 2", width: 10 },
        { key: "HMadde3", header: "Madde 3", width: 10 },
        { key: "HMadde4", header: "Madde 4", width: 10 },
        { key: "HMadde5", header: "Madde 5", width: 10 },
        { key: "HMadde6", header: "Madde 6", width: 10 },
        { key: "HMadde7", header: "Madde 7", width: 10 },
        { key: "HMadde8", header: "Madde 8", width: 10 },
        { key: "HMadde9", header: "Madde 9", width: 10 },
        { key: "HMadde10", header: "Madde 10", width: 10 },
        { key: "HMadde11", header: "Madde 11", width: 10 },
        { key: "HMadde12", header: "Madde 12", width: 10 },
        { key: "HMadde13", header: "Madde 13", width: 10 },
        { key: "HMadde14", header: "Madde 14", width: 10 },
        { key: "HMadde15", header: "Madde 15", width: 10 },
        { key: "HMadde16", header: "Madde 16", width: 10 },
        { key: "HMadde17", header: "Madde 17", width: 10 },
        { key: "HMadde18", header: "Madde 18", width: 10 },
        { key: "HMadde19", header: "Madde 19", width: 10 },
        { key: "HMadde20", header: "Madde 20", width: 10 },
        { key: "HMadde21", header: "Madde 21", width: 10 },
        { key: "HMadde22", header: "Madde 22", width: 10 },
        { key: "HMadde23", header: "Madde 23", width: 10 },
        { key: "HMadde24", header: "Madde 24", width: 10 },
        { key: "HKontrol", header: "Madde Kontrol", width: 10 },
        { key: "HMadde25", header: "Madde 25", width: 10 },
        { key: "HMadde26", header: "Madde 26", width: 10 },
        { key: "HMadde27", header: "Madde 27", width: 10 },
        { key: "HMadde28", header: "Madde 28", width: 10 },
        { key: "HMadde29", header: "Madde 29", width: 10 },
        { key: "HMadde30", header: "Madde 30", width: 10 },
        { key: "HMadde31", header: "Madde 31", width: 10 },
        { key: "HMadde32", header: "Madde 32", width: 10 },
        { key: "HMadde33", header: "Madde 33", width: 10 },
        { key: "HMadde34", header: "Madde 34", width: 10 },
        { key: "HMadde35", header: "Madde 35", width: 10 },
        { key: "HMadde36", header: "Madde 36", width: 10 },
        { key: "HMadde37", header: "Madde 37", width: 10 },
        { key: "HMadde38", header: "Madde 38", width: 10 },
        { key: "HMadde39", header: "Madde 39", width: 10 },
        { key: "HMadde40", header: "Madde 40", width: 10 },
        { key: "Yapabilirlik1", header: "Yapabilirlik Madde 1", width: 10 },
        { key: "YMadde2", header: "Madde 2", width: 10 },
        { key: "YMadde3", header: "Madde 3", width: 10 },
        { key: "YMadde4", header: "Madde 4", width: 10 },
        { key: "YMadde5", header: "Madde 5", width: 10 },
        { key: "YMadde6", header: "Madde 6", width: 10 },
        { key: "YMadde7", header: "Madde 7", width: 10 },
        { key: "YMadde8", header: "Madde 8", width: 10 },
        { key: "YMadde9", header: "Madde 9", width: 10 },
        { key: "YMadde10", header: "Madde 10", width: 10 },
        { key: "YMadde11", header: "Madde 11", width: 10 },
        { key: "YMadde12", header: "Madde 12", width: 10 },
        { key: "YMadde13", header: "Madde 13", width: 10 },
        { key: "YMadde14", header: "Madde 14", width: 10 },
        { key: "YMadde15", header: "Madde 15", width: 10 },
        { key: "YMadde16", header: "Madde 16", width: 10 },
        { key: "YMadde17", header: "Madde 17", width: 10 },
        { key: "YMadde18", header: "Madde 18", width: 10 },
        { key: "YMadde19", header: "Madde 19", width: 10 },
        { key: "YMadde20", header: "Madde 20", width: 10 },
        { key: "YMadde21", header: "Madde 21", width: 10 },
        { key: "YMadde22", header: "Madde 22", width: 10 },
        { key: "YMadde23", header: "Madde 23", width: 10 },
        { key: "YMadde24", header: "Madde 24", width: 10 },
        { key: "YKontrol", header: "Madde Kontrol", width: 10 },
        { key: "YMadde25", header: "Madde 25", width: 10 },
        { key: "YMadde26", header: "Madde 26", width: 10 },
        { key: "YMadde27", header: "Madde 27", width: 10 },
        { key: "YMadde28", header: "Madde 28", width: 10 },
        { key: "YMadde29", header: "Madde 29", width: 10 },
        { key: "YMadde30", header: "Madde 30", width: 10 },
        { key: "YMadde31", header: "Madde 31", width: 10 },
        { key: "YMadde32", header: "Madde 32", width: 10 },
        { key: "YMadde33", header: "Madde 33", width: 10 },
        { key: "YMadde34", header: "Madde 34", width: 10 },
        { key: "YMadde35", header: "Madde 35", width: 10 },
        { key: "YMadde36", header: "Madde 36", width: 10 },
        { key: "YMadde37", header: "Madde 37", width: 10 },
        { key: "YMadde38", header: "Madde 38", width: 10 },
        { key: "YMadde39", header: "Madde 39", width: 10 },
        { key: "YMadde40", header: "Madde 40", width: 10 },
        { header: "Rumuz", key: "Rumuz", width: 30 },
        { header: "Yaş", key: "Yas", width: 10 },
        { header: "Cinsiyet", key: "Cinsiyet", width: 30 },
        { header: "Seçilen Puan Türü", key: "Soru1", width: 30 },
        { header: "Hissedilen Puan Türü", key: "Soru2", width: 30 },
        { header: "Lise Türü", key: "Soru3", width: 30 },
        { header: "Öğrenim Hedefi", key: "Soru4", width: 30 },
        { header: "Karşılaştırılmak İstenen Grup", key: "Soru5", width: 30 },
        { header: "Memnuniyet", key: "Memnuniyet", width: 10 },
      ];

      worksheet.addRows(jsonHosYap);
      //delete if exist

      if (fs.existsSync(path.join(__dirname, "../hosyap.xlsx"))) {
        fs.unlink(path.join(__dirname, "../hosyap.xlsx"), (err) => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log(path.join(__dirname, "../hosyap.xlsx") + ` deleted`);
            workbook.xlsx.writeFile("hosyap.xlsx").then((response) => {
              res.sendFile(path.join(__dirname, "../hosyap.xlsx"));
            });
          }
        });
      } else {
        workbook.xlsx.writeFile("hosyap.xlsx").then((response) => {
          res.sendFile(path.join(__dirname, "../hosyap.xlsx"));
        });
      }
      // Write to File
    }
  });
};

const writeToExcelHosYapController2 = async (req, res, next) => {
  getHosYap((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      const jsonHosYap = JSON.parse(JSON.stringify(data))[0];
      let workbook = new excel.Workbook(); //creating workbook
      let worksheet = workbook.addWorksheet("HoslanmaYapabilirlik");
      console.log(data);
      worksheet.columns = [
        { key: "Hoslanma1", header: "Hoşlantı Madde 1", width: 10 },
        { key: "HMadde2", header: "Madde 2", width: 10 },
        { key: "HMadde3", header: "Madde 3", width: 10 },
        { key: "HMadde4", header: "Madde 4", width: 10 },
        { key: "HMadde5", header: "Madde 5", width: 10 },
        { key: "HMadde6", header: "Madde 6", width: 10 },
        { key: "HMadde7", header: "Madde 7", width: 10 },
        { key: "HMadde8", header: "Madde 8", width: 10 },
        { key: "HMadde9", header: "Madde 9", width: 10 },
        { key: "HMadde10", header: "Madde 10", width: 10 },
        { key: "HMadde11", header: "Madde 11", width: 10 },
        { key: "HMadde12", header: "Madde 12", width: 10 },
        { key: "HMadde13", header: "Madde 13", width: 10 },
        { key: "HMadde14", header: "Madde 14", width: 10 },
        { key: "HMadde15", header: "Madde 15", width: 10 },
        { key: "HMadde16", header: "Madde 16", width: 10 },
        { key: "HMadde17", header: "Madde 17", width: 10 },
        { key: "HMadde18", header: "Madde 18", width: 10 },
        { key: "HMadde19", header: "Madde 19", width: 10 },
        { key: "HMadde20", header: "Madde 20", width: 10 },
        { key: "HMadde21", header: "Madde 21", width: 10 },
        { key: "HMadde22", header: "Madde 22", width: 10 },
        { key: "HMadde23", header: "Madde 23", width: 10 },
        { key: "HMadde24", header: "Madde 24", width: 10 },
        { key: "HKontrol", header: "Madde Kontrol", width: 10 },
        { key: "HMadde25", header: "Madde 25", width: 10 },
        { key: "HMadde26", header: "Madde 26", width: 10 },
        { key: "HMadde27", header: "Madde 27", width: 10 },
        { key: "HMadde28", header: "Madde 28", width: 10 },
        { key: "HMadde29", header: "Madde 29", width: 10 },
        { key: "HMadde30", header: "Madde 30", width: 10 },
        { key: "HMadde31", header: "Madde 31", width: 10 },
        { key: "HMadde32", header: "Madde 32", width: 10 },
        { key: "HMadde33", header: "Madde 33", width: 10 },
        { key: "HMadde34", header: "Madde 34", width: 10 },
        { key: "HMadde35", header: "Madde 35", width: 10 },
        { key: "HMadde36", header: "Madde 36", width: 10 },
        { key: "HMadde37", header: "Madde 37", width: 10 },
        { key: "HMadde38", header: "Madde 38", width: 10 },
        { key: "HMadde39", header: "Madde 39", width: 10 },
        { key: "HMadde40", header: "Madde 40", width: 10 },
        { key: "Yapabilirlik1", header: "Yapabilirlik Madde 1", width: 10 },
        { key: "YMadde2", header: "Madde 2", width: 10 },
        { key: "YMadde3", header: "Madde 3", width: 10 },
        { key: "YMadde4", header: "Madde 4", width: 10 },
        { key: "YMadde5", header: "Madde 5", width: 10 },
        { key: "YMadde6", header: "Madde 6", width: 10 },
        { key: "YMadde7", header: "Madde 7", width: 10 },
        { key: "YMadde8", header: "Madde 8", width: 10 },
        { key: "YMadde9", header: "Madde 9", width: 10 },
        { key: "YMadde10", header: "Madde 10", width: 10 },
        { key: "YMadde11", header: "Madde 11", width: 10 },
        { key: "YMadde12", header: "Madde 12", width: 10 },
        { key: "YMadde13", header: "Madde 13", width: 10 },
        { key: "YMadde14", header: "Madde 14", width: 10 },
        { key: "YMadde15", header: "Madde 15", width: 10 },
        { key: "YMadde16", header: "Madde 16", width: 10 },
        { key: "YMadde17", header: "Madde 17", width: 10 },
        { key: "YMadde18", header: "Madde 18", width: 10 },
        { key: "YMadde19", header: "Madde 19", width: 10 },
        { key: "YMadde20", header: "Madde 20", width: 10 },
        { key: "YMadde21", header: "Madde 21", width: 10 },
        { key: "YMadde22", header: "Madde 22", width: 10 },
        { key: "YMadde23", header: "Madde 23", width: 10 },
        { key: "YMadde24", header: "Madde 24", width: 10 },
        { key: "YKontrol", header: "Madde Kontrol", width: 10 },
        { key: "YMadde25", header: "Madde 25", width: 10 },
        { key: "YMadde26", header: "Madde 26", width: 10 },
        { key: "YMadde27", header: "Madde 27", width: 10 },
        { key: "YMadde28", header: "Madde 28", width: 10 },
        { key: "YMadde29", header: "Madde 29", width: 10 },
        { key: "YMadde30", header: "Madde 30", width: 10 },
        { key: "YMadde31", header: "Madde 31", width: 10 },
        { key: "YMadde32", header: "Madde 32", width: 10 },
        { key: "YMadde33", header: "Madde 33", width: 10 },
        { key: "YMadde34", header: "Madde 34", width: 10 },
        { key: "YMadde35", header: "Madde 35", width: 10 },
        { key: "YMadde36", header: "Madde 36", width: 10 },
        { key: "YMadde37", header: "Madde 37", width: 10 },
        { key: "YMadde38", header: "Madde 38", width: 10 },
        { key: "YMadde39", header: "Madde 39", width: 10 },
        { key: "YMadde40", header: "Madde 40", width: 10 },
        { header: "Rumuz", key: "Rumuz", width: 30 },
        { header: "Yaş", key: "Yas", width: 10 },
        { header: "Cinsiyet", key: "Cinsiyet", width: 30 },
        { header: "Seçilen Puan Türü", key: "Soru1", width: 30 },
        { header: "Hissedilen Puan Türü", key: "Soru2", width: 30 },
        { header: "Lise Türü", key: "Soru3", width: 30 },
        { header: "Öğrenim Hedefi", key: "Soru4", width: 30 },
        { header: "Karşılaştırılmak İstenen Grup", key: "Soru5", width: 30 },
      ];

      worksheet.addRows(jsonHosYap);
      //delete if exist

      if (fs.existsSync(path.join(__dirname, "../hosyap.xlsx"))) {
        fs.unlink(path.join(__dirname, "../hosyap.xlsx"), (err) => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log(path.join(__dirname, "../hosyap.xlsx") + ` deleted`);
            workbook.xlsx.writeFile("hosyap.xlsx").then((response) => {
              res.sendFile(path.join(__dirname, "../hosyap.xlsx"));
            });
          }
        });
      } else {
        workbook.xlsx.writeFile("hosyap.xlsx").then((response) => {
          res.sendFile(path.join(__dirname, "../hosyap.xlsx"));
        });
      }
      // Write to File
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
  users,
  lastUserId,
  getRaporData,
  rapor1DB,
  rapor2DB,
  rapor3DB,
  rapor4DB,
  rapor5DB,
  calculateResults2,
  getUserData,
  writeToExcelController,
  writeToExcelReport1Controller,
  writeToExcelReport2Controller,
  writeToExcelReport3Controller,
  writeToExcelReport4Controller,
  writeToExcelReport5Controller,
  writeToExcelCommentDataController,
  getCommentsCounts,
  getUsersCounts,
  getUserReport1,
  getUserReport2,
  getUserReport3,
  getUserReport4,
  getUserReport5,
  getCommentData,
  writeToExcelHosYapController,
  writeToExcelHosYapController2,
};
