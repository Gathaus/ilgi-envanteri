const con = require("../middlewares/database/connectDatabase");

const getUserReports1 = (result) => {
  con.query("CALL GetReport1();", (err, res) => {
    if (err) {
       console.log("error: ", err);
      result(null, err);
    }
    //  console.log("customers: ", res);
    result(null, res);
  });
};
const getUserReports2 = (result) => {
  con.query("CALL GetReport2();", (err, res) => {
    if (err) {
       console.log("error: ", err);
      result(null, err);
    }
     console.log("customers: ", res);
    result(null, res);
  }); 
};
const getUserReports3 = (result) => {
  con.query("CALL GetReport3();", (err, res) => {
    if (err) {
       console.log("error: ", err);
      result(null, err);
    }
     console.log("customers: ", res);
    result(null, res);
  });
};
const getUserReports4 = (result) => {
  con.query("CALL GetReport4();", (err, res) => {
    if (err) {
       console.log("error: ", err);
      result(null, err);
    }
     console.log("customers: ", res);
    result(null, res);
  });
};
const getUserReports5 = (result) => {
  con.query("CALL GetReport5();", (err, res) => {
    if (err) {
       console.log("error: ", err);
      result(null, err);
    }
     console.log("customers: ", res);
    result(null, res);
  });
};

const getHosYap = (result) => {
  con.query("CALL GetHosYap();", (err, res) => {
    if (err) {
       console.log("error: ", err);
      result(null, err);
    }
     console.log("customers: ", res);
    result(null, res);
  });
};

const getHosYap2 = (result) => {
  con.query("CALL GetHosYap2();", (err, res) => {
    if (err) {
       console.log("error: ", err);
      result(null, err);
    }
     console.log("customers: ", res);
    result(null, res);
  });
};


const getRapor1 = (result) => {
  con.query("Select * from user", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
    }
    //   console.log("customers: ", res);
    result(null, res);
  });
};
const getCommentDatas = (result) => {
  con.query("SELECT * FROM memnuniyet", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
    }
    //   console.log("customers: ", res);
    result(null, res);
  });
};
const getLiseler = (result) => {
  con.query("SELECT * FROM liseler", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
    }
    //   console.log("customers: ", res);
    result(null, res);
  });
};

const getMeslekler = (result) => {
  con.query("SELECT * FROM meslek", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
      return;
    }
    //   console.log("customers: ", res);
    result(null, res);
  });
};

const getSorular = (result) => {
  con.query("SELECT * FROM sorular", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
      return;
    }
    //   console.log("customers: ", res);
    result(null, res);
  });
};

const insertComments = (value1,value2,userId,result) => {
  var value=value1;
  var comment=value2;
  con.query("INSERT INTO memnuniyet (Value,Yorum,UserId) VALUES('"+value+"','"+comment+"','"+userId+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertHoslanti = (userId,arrHos, result) => {
  //console.log(arrHos);
  //console.log(userId);
  con.query("INSERT INTO hoslanma (UserId,Madde1,Madde2,Madde3,Madde4,Madde5,Madde6,Madde7,Madde8,Madde9,Madde10,Madde11,Madde12,Madde13,Madde14,Madde15,Madde16,Madde17,Madde18,Madde19,Madde20,Madde21,Madde22,Madde23,Madde24,Madde25,Madde26,Madde27,Madde28,Madde29,Madde30,Madde31,Madde32,Madde33,Madde34,Madde35,Madde36,Madde37,Madde38,Madde39,Madde40) VALUES('"+userId+"','"+arrHos[1]+"','"+arrHos[2]+"','"+arrHos[3]+"','"+arrHos[4]+"','"+arrHos[5]+"','"+arrHos[6]+"','"+arrHos[7]+"','"+arrHos[8]+"','"+arrHos[9]+"','"+arrHos[10]+"','"+arrHos[11]+"','"+arrHos[12]+"','"+arrHos[13]+"','"+arrHos[14]+"','"+arrHos[15]+"','"+arrHos[16]+"','"+arrHos[17]+"','"+arrHos[18]+"','"+arrHos[19]+"','"+arrHos[20]+"','"+arrHos[21]+"','"+arrHos[22]+"','"+arrHos[23]+"','"+arrHos[24]+"','"+arrHos[25]+"','"+arrHos[26]+"','"+arrHos[27]+"','"+arrHos[28]+"','"+arrHos[29]+"','"+arrHos[30]+"','"+arrHos[31]+"','"+arrHos[32]+"','"+arrHos[33]+"','"+arrHos[34]+"','"+arrHos[35]+"','"+arrHos[36]+"','"+arrHos[37]+"','"+arrHos[38]+"','"+arrHos[39]+"','"+arrHos[40]+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertYapabilirlik = (userId,arrYap, result) => {
  //console.log(arrYap);
  con.query("INSERT INTO yapabilirlik (UserId,Madde1,Madde2,Madde3,Madde4,Madde5,Madde6,Madde7,Madde8,Madde9,Madde10,Madde11,Madde12,Madde13,Madde14,Madde15,Madde16,Madde17,Madde18,Madde19,Madde20,Madde21,Madde22,Madde23,Madde24,Madde25,Madde26,Madde27,Madde28,Madde29,Madde30,Madde31,Madde32,Madde33,Madde34,Madde35,Madde36,Madde37,Madde38,Madde39,Madde40) VALUES('"+userId+"','"+arrYap[1]+"','"+arrYap[2]+"','"+arrYap[3]+"','"+arrYap[4]+"','"+arrYap[5]+"','"+arrYap[6]+"','"+arrYap[7]+"','"+arrYap[8]+"','"+arrYap[9]+"','"+arrYap[10]+"','"+arrYap[11]+"','"+arrYap[12]+"','"+arrYap[13]+"','"+arrYap[14]+"','"+arrYap[15]+"','"+arrYap[16]+"','"+arrYap[17]+"','"+arrYap[18]+"','"+arrYap[19]+"','"+arrYap[20]+"','"+arrYap[21]+"','"+arrYap[22]+"','"+arrYap[23]+"','"+arrYap[24]+"','"+arrYap[25]+"','"+arrYap[26]+"','"+arrYap[27]+"','"+arrYap[28]+"','"+arrYap[29]+"','"+arrYap[30]+"','"+arrYap[31]+"','"+arrYap[32]+"','"+arrYap[33]+"','"+arrYap[34]+"','"+arrYap[35]+"','"+arrYap[36]+"','"+arrYap[37]+"','"+arrYap[38]+"','"+arrYap[39]+"','"+arrYap[40]+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertUsers = (name,age,sex,scoreType1,scoreType2,dropdown1,dropdown2,resultType,result) => {
  con.query("INSERT INTO user (Rumuz,Yas,Cinsiyet,Soru1,Soru2,Soru3,Soru4,Soru5) VALUES('"+name+"','"+age+"','"+sex+"','"+scoreType1+"','"+scoreType2+"','"+dropdown1+"','"+dropdown2+"','"+resultType+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};

const getLastUserId = (result) => {
  con.query("Select Id from user ORDER BY Id DESC LIMIT 1", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
    }
    //   console.log("customers: ", res);
    result(null, res);
  });
};

const getCommentsCount = (result) => {
  con.query("select count(*) as total from memnuniyet", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
      return;
    }
    //   console.log("customers: ", res);
    result(null, res);
  });
};

const getUsersCount = (result) => {
  con.query("select count(*) as total from user", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};


const insertRapor1 = (userId, raporValues1, result) => {
  // console.log("inserted"+userId);
  // console.log("inserted"+raporValues1);
  var val1=raporValues1[0];
  // console.log("val1"+val1);
  // console.log("inserted"+raporValues1[0]);
  // console.log("inserted"+raporValues1[13]);

  con.query("INSERT INTO rapor1 (userId, liseliTum_h, liseliTum_y, liseliKiz_h, liseliKiz_y, liseliErkek_h, liseliErkek_y, universiteTum_h, universiteTum_y, universiteKiz_h, universiteKiz_y, universiteErkek_h, universiteErkek_y, tumogrenci_h,tumogrenci_y)  VALUES('"+userId+"','"+raporValues1[0]+"','"+raporValues1[1]+"','"+raporValues1[2]+"','"+raporValues1[3] +"','"+raporValues1[4] +"','"+ raporValues1[5]+"','"+ raporValues1[6]+"','"+raporValues1[7]+"','"+raporValues1[8]+"','"+raporValues1[9]+"','"+raporValues1[10] +"','"+raporValues1[11] +"','"+ raporValues1[12]+"','"+ raporValues1[13]+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertRapor2 = (userId, raporValues2, result) => {
  // console.log("inserted"+userId);
  // console.log("inserted"+raporValues2);
  // console.log("inserted"+raporValues2[0]);
  // console.log("inserted"+raporValues2[13]);
  con.query("INSERT INTO rapor2 (userId, liseliTum_h, liseliTum_y, liseliKiz_h, liseliKiz_y, liseliErkek_h, liseliErkek_y, universiteTum_h, universiteTum_y, universiteKiz_h, universiteKiz_y, universiteErkek_h, universiteErkek_y, tumogrenci_h,tumogrenci_y)  VALUES('"+userId+"','"+raporValues2[0]+"','"+raporValues2[1]+"','"+raporValues2[2]+"','"+raporValues2[3] +"','"+raporValues2[4] +"','"+ raporValues2[5]+"','"+ raporValues2[6]+"','"+raporValues2[7]+"','"+raporValues2[8]+"','"+raporValues2[9]+"','"+raporValues2[10] +"','"+raporValues2[11] +"','"+ raporValues2[12]+"','"+ raporValues2[13]+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertRapor3 = (userId, raporValues3, result) => {
  // console.log("inserted"+userId);
  // console.log("inserted"+raporValues3);
  // console.log("inserted"+raporValues3[0]);
  // console.log("inserted"+raporValues3[13]);
  con.query("INSERT INTO rapor3 (userId, liseliTum_h, liseliTum_y, liseliKiz_h, liseliKiz_y, liseliErkek_h, liseliErkek_y, universiteTum_h, universiteTum_y, universiteKiz_h, universiteKiz_y, universiteErkek_h, universiteErkek_y, tumogrenci_h,tumogrenci_y)  VALUES('"+userId+"','"+raporValues3[0]+"','"+raporValues3[1]+"','"+raporValues3[2]+"','"+raporValues3[3] +"','"+raporValues3[4] +"','"+ raporValues3[5]+"','"+ raporValues3[6]+"','"+raporValues3[7]+"','"+raporValues3[8]+"','"+raporValues3[9]+"','"+raporValues3[10] +"','"+raporValues3[11] +"','"+ raporValues3[12]+"','"+ raporValues3[13]+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertRapor4 = (userId, raporValues4, result) => {
  // console.log("inserted"+userId);
  // console.log("inserted"+raporValues4);
  // console.log("inserted"+raporValues4[0]);
  // console.log("inserted"+raporValues4[13]);
  con.query("INSERT INTO rapor4 (userId, liseliTum_h, liseliTum_y, liseliKiz_h, liseliKiz_y, liseliErkek_h, liseliErkek_y, universiteTum_h, universiteTum_y, universiteKiz_h, universiteKiz_y, universiteErkek_h, universiteErkek_y, tumogrenci_h,tumogrenci_y)  VALUES('"+userId+"','"+raporValues4[0]+"','"+raporValues4[1]+"','"+raporValues4[2]+"','"+raporValues4[3] +"','"+raporValues4[4] +"','"+ raporValues4[5]+"','"+ raporValues4[6]+"','"+raporValues4[7]+"','"+raporValues4[8]+"','"+raporValues4[9]+"','"+raporValues4[10] +"','"+raporValues4[11] +"','"+ raporValues4[12]+"','"+ raporValues4[13]+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertRapor5 = (userId, raporValues5, result) => {
  // console.log("inserted"+userId);
  // console.log("inserted"+raporValues5);
  // console.log("inserted"+raporValues5[0]);
  // console.log("inserted"+raporValues5[13]);
  con.query("INSERT INTO rapor5 (userId, liseliTum_h, liseliTum_y, liseliKiz_h, liseliKiz_y, liseliErkek_h, liseliErkek_y, universiteTum_h, universiteTum_y, universiteKiz_h, universiteKiz_y, universiteErkek_h, universiteErkek_y, tumogrenci_h,tumogrenci_y)  VALUES('"+userId+"','"+raporValues5[0]+"','"+raporValues5[1]+"','"+raporValues5[2]+"','"+raporValues5[3] +"','"+raporValues5[4] +"','"+ raporValues5[5]+"','"+ raporValues5[6]+"','"+raporValues5[7]+"','"+raporValues5[8]+"','"+raporValues5[9]+"','"+raporValues5[10] +"','"+raporValues5[11] +"','"+ raporValues5[12]+"','"+ raporValues5[13]+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};



module.exports = {
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
  getHosYap2
};
