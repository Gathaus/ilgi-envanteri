const {
  liseliTum8Dilim,
  liseliKiz8Dilim,
  liseliErkek8Dilim,
  üniliTum8Dilim,
  üniliKiz8Dilim,
  üniliErkek8Dilim,
  tüm8Dilim,
  liseliTumResultsYDSaygin,
  liselikizYDSaygin,
  liselierkekYDSaygin,
  universitetum,
  universitekiz,
  universiteerkek,
  tumogrenci,
  liseliTum4Kutup,
  liseliTumResults4Kutup,
  liseliKizResults4Kutup,
  liseliErkekResults4Kutup,
  universiteliTumResults4Kutup,
  universiteliKizResults4Kutup,
  universiteliErkekResults4Kutup,
  tumResults4Kutup,
  liseliTumRAYSGD,
  liseliKizRAYSGD,
  liseliErkekRAYSGD,
  üniliTumRAYSGD,
  üniliKizRAYSGD,
  üniliErkekRAYSGD,
  tümRAYSGD,
  liseliTum3Boyut,
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
  getLastUserId,
} = require("../models/survey");

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
      ).toFixed(2)
    );
  }
  for (i = 0; i < 8; i++) {
    liseliKizResults8Dilim.push(
      (
        ((hampuan1[i + 8] - liseliKiz8Dilim.y_ao[i]) / liseliTum8Dilim.y_s[i]) *
          10 +
        50
      ).toFixed(2)
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
        ((hampuan1[i + 8] - liseliErkek8Dilim.y_ao[i]) / liseliErkek8Dilim.y_s[i]) *
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
        ((hampuan1[i] - üniliTum8Dilim.h_ao[i]) / üniliTum8Dilim.h_s[i]) *
          10 +
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
        ((hampuan1[i] - üniliKiz8Dilim.h_ao[i]) / üniliKiz8Dilim.h_s[i]) *
          10 +
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
        ((hampuan1[i + 8] - üniliErkek8Dilim.y_ao[i]) / üniliErkek8Dilim.y_s[i]) *
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
        ((hampuan1[i] - tüm8Dilim.h_ao[i]) / tüm8Dilim.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 8; i++) {
    tümResults8Dilim.push(
      (
        ((hampuan1[i + 8] - tüm8Dilim.y_ao[i]) / tüm8Dilim.y_s[i]) *
          10 +
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
        ((hampuan2[i] - liseliTum_yd.h_ao[i]) / liseliTum_yd.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    liseliTumResultsYDSaygin.push(
      (
        ((hampuan2[i + 2] - liseliTum_yd.y_ao[i]) /
        liseliTum_yd.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }



  //liseli kız
  let liselikizYDSaygin = [];
  for (i = 0; i < 2; i++) {
    liselikizYDSaygin.push(
      (
        ((hampuan2[i] - liselikız_yd.h_ao[i]) / liselikız_yd.h_s[i]) * 
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    liselikizYDSaygin.push(
      (
        ((hampuan2[i + 2] - liselikız_yd.y_ao[i]) /
        liselikız_yd.y_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }


  //liseli erkek
  let liselierkekYDSaygin = []; 
  for (i = 0; i < 2; i++) {
    liselierkekYDSaygin.push(
      (
        ((hampuan2[i] - liselierkek_yd.h_ao[i]) / liselierkek_yd.h_s[i]) * 
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 2; i++) {
    liselierkekYDSaygin.push(
      (
        ((hampuan2[i + 2] - liselierkek_yd.y_ao[i]) /
        liselierkek_yd.y_s[i]) *
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
          ((hampuan2[i] - universiteerkek_yd.h_ao[i]) / universiteerkek_yd.h_s[i]) *
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
        (
          ((hampuan2[i] - tum_yd.h_ao[i]) / tum_yd.h_s[i]) * 
            10 +
          50
        ).toFixed(2)
      );
    }
    for (i = 0; i < 2; i++) {
      tumogrenci.push(
        (
          ((hampuan2[i + 2] - tum_yd.y_ao[i]) /
          tum_yd.y_s[i]) *
            10 +
          50
        ).toFixed(2)
      );
    }

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
          ((hampuan3[i + 4] - liseliErkek4Kutup.y_ao[i]) / liseliErkek4Kutup.y_s[i]) *
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
          ((hampuan3[i] - universiteliTum4Kutup.h_ao[i]) / universiteliTum4Kutup.h_s[i]) *
            10 +
          50
        ).toFixed(2)
      );
    }
    for (i = 0; i < 4; i++) {
      universiteliTumResults4Kutup.push(
        (
          ((hampuan3[i + 4] - universiteliTum4Kutup.y_ao[i]) / universiteliTum4Kutup.y_s[i]) *
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
          ((hampuan3[i] - universiteliKiz4Kutup.h_ao[i]) / universiteliKiz4Kutup.h_s[i]) *
            10 +
          50
        ).toFixed(2)
      );
    }
    for (i = 0; i < 4; i++) {
      universiteliKizResults4Kutup.push(
        (
          ((hampuan3[i + 4] - universiteliKiz4Kutup.y_ao[i]) / universiteliKiz4Kutup.y_s[i]) *
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
          ((hampuan3[i] - universiteliErkek4Kutup.h_ao[i]) / universiteliErkek4Kutup.h_s[i]) *
            10 +
          50
        ).toFixed(2)
      );
    }
    for (i = 0; i < 4; i++) {
      universiteliErkekResults4Kutup.push(
        (
          ((hampuan3[i + 4] - universiteliErkek4Kutup.y_ao[i]) / universiteliErkek4Kutup.y_s[i]) *
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
          ((hampuan3[i + 4] - tumOgrenci4Kutup.y_ao[i]) / tumOgrenci4Kutup.y_s[i]) *
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
  console.log(hampuan4)

  for (i = 0; i < 6; i++) {
    liseliTumResultsRAYSGD.push(
      (
        ((hampuan4[i] - liseliTumRAYSGD.h_ao[i]) /
          liseliTumRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    liseliTumResultsRAYSGD.push(
      (
        ((hampuan4[i+8] - liseliTumRAYSGD.y_ao[i+8]) /
          liseliTumRAYSGD.y_s[i+8]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //liseli kız
  let liseliKizResultsRAYSGD = [];
  console.log(hampuan4)

  for (i = 0; i < 6; i++) {
    liseliKizResultsRAYSGD.push(
      (
        ((hampuan4[i] - liseliKizRAYSGD.h_ao[i]) /
        liseliKizRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    liseliKizResultsRAYSGD.push(
      (
        ((hampuan4[i+8] - liseliKizRAYSGD.y_ao[i+8]) /
        liseliKizRAYSGD.y_s[i+8]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //liseli erkek
  let liseliErkekResultsRAYSGD = [];
  console.log(hampuan4)

  for (i = 0; i < 6; i++) {
    liseliErkekResultsRAYSGD.push(
      (
        ((hampuan4[i] - liseliErkekRAYSGD.h_ao[i]) /
        liseliErkekRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    liseliErkekResultsRAYSGD.push(
      (
        ((hampuan4[i+8] - liseliErkekRAYSGD.y_ao[i+8]) /
        liseliErkekRAYSGD.y_s[i+8]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //ünili
  let üniliResultsRAYSGD = [];
  console.log(hampuan4)

  for (i = 0; i < 6; i++) {
    üniliResultsRAYSGD.push(
      (
        ((hampuan4[i] - üniliTumRAYSGD.h_ao[i]) /
        üniliTumRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    üniliResultsRAYSGD.push(
      (
        ((hampuan4[i+8] - üniliTumRAYSGD.y_ao[i+8]) /
        üniliTumRAYSGD.y_s[i+8]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //ünili kız
  let üniliKizResultsRAYSGD = [];
  console.log(hampuan4)

  for (i = 0; i < 6; i++) {
    üniliKizResultsRAYSGD.push(
      (
        ((hampuan4[i] - üniliKizRAYSGD.h_ao[i]) /
        üniliKizRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    üniliKizResultsRAYSGD.push(
      (
        ((hampuan4[i+8] - üniliKizRAYSGD.y_ao[i+8]) /
        üniliKizRAYSGD.y_s[i+8]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //ünili erkek
  let üniliErkekResultsRAYSGD = [];
  console.log(hampuan4)

  for (i = 0; i < 6; i++) {
    üniliErkekResultsRAYSGD.push(
      (
        ((hampuan4[i] - üniliErkekRAYSGD.h_ao[i]) /
        üniliErkekRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    üniliErkekResultsRAYSGD.push(
      (
        ((hampuan4[i+8] - üniliErkekRAYSGD.y_ao[i+8]) /
        üniliErkekRAYSGD.y_s[i+8]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  //tüm 
  let tümResultsRAYSGD = [];
  console.log(hampuan4)

  for (i = 0; i < 6; i++) {
    tümResultsRAYSGD.push(
      (
        ((hampuan4[i] - tümRAYSGD.h_ao[i]) /
        tümRAYSGD.h_s[i]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  for (i = 0; i < 6; i++) {
    tümResultsRAYSGD.push(
      (
        ((hampuan4[i+8] - tümRAYSGD.y_ao[i+8]) /
        tümRAYSGD.y_s[i+8]) *
          10 +
        50
      ).toFixed(2)
    );
  }
  let hampuan5 = []
  hampuan5.push(parseFloat(hampuan3[0]-parseFloat(hampuan3[1])))
  hampuan5.push(parseFloat(hampuan3[3]-parseFloat(hampuan3[2])))
  hampuan5.push(parseFloat(hampuan2[0]-parseFloat(hampuan2[1])))
  hampuan5.push(parseFloat(hampuan3[0+4]-parseFloat(hampuan3[1+4])))
  hampuan5.push(parseFloat(hampuan3[3+4]-parseFloat(hampuan3[2+4])))
  hampuan5.push(parseFloat(hampuan2[0+2]-parseFloat(hampuan2[1+2])))
  console.log(hampuan5)
  let liseliTumResults3Boyut=[]
  for(i=0;i<3;i++){
    liseliTumResults3Boyut.push((((hampuan5[i]-liseliTum3Boyut.h_ao[i])/liseliTum3Boyut.h_s[i])*10+50).toFixed(2))
  }
  for(i=0;i<3;i++){
    liseliTumResults3Boyut.push((((hampuan5[i+3]-liseliTum3Boyut.y_ao[i])/liseliTum3Boyut.y_s[i])*10+50).toFixed(2))
  }
  console.log(liseliTumResults3Boyut)
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
    rapor5_1: liseliTumResults3Boyut
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
    rapor5_1: liseliTumResults3Boyut
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
  var x = req.body.value;
  var comment = req.body.comment;
  insertComments(x, comment, (err, data) => {
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
  console.log("POST ÇALIŞTI");
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
  var value17 = req.body.value17;
  var value18 = req.body.value18;
  var value19 = req.body.value19;
  var value20 = req.body.value20;
  var value21 = req.body.value21;
  var value22 = req.body.value22;
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
  var value37 = req.body.value37;
  var value38 = req.body.value38;
  var value39 = req.body.value39;
  var value40 = req.body.value40;
  insertHoslanti(
    userId,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
    value17,
    value18,
    value19,
    value20,
    value21,
    value22,
    value23,
    value24,
    valueO,
    value25,
    value26,
    value27,
    value28,
    value29,
    value30,
    value31,
    value32,
    value33,
    value34,
    value35,
    value36,
    value37,
    value38,
    value39,
    value40,
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
const yapabilirlik = async (req, res, next) => {
  console.log("POST ÇALIŞTI");
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
  var value17 = req.body.value17y;
  var value18 = req.body.value18y;
  var value19 = req.body.value19y;
  var value20 = req.body.value20y;
  var value21 = req.body.value21y;
  var value22 = req.body.value22y;
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
  var value37 = req.body.value37y;
  var value38 = req.body.value38y;
  var value39 = req.body.value39y;
  var value40 = req.body.value40y;
  insertYapabilirlik(
    userId,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
    value17,
    value18,
    value19,
    value20,
    value21,
    value22,
    value23,
    value24,
    valueO,
    value25,
    value26,
    value27,
    value28,
    value29,
    value30,
    value31,
    value32,
    value33,
    value34,
    value35,
    value36,
    value37,
    value38,
    value39,
    value40,
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
  calculateResults2,
};
