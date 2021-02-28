const con = require("../middlewares/database/connectDatabase");

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

const insertComments = (value1,value2,result) => {
  var value=value1;
  var comment=value2;
  con.query("INSERT INTO memnuniyet (Value,Yorum) VALUES('"+value+"','"+comment+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertHoslanti = (userId,arrHos, result) => {
  console.log(arrHos);
  console.log(userId);
  con.query("INSERT INTO hoslanma (UserId,Madde1,Madde2,Madde3,Madde4,Madde5,Madde6,Madde7,Madde8,Madde9,Madde10,Madde11,Madde12,Madde13,Madde14,Madde15,Madde16,Madde17,Madde18,Madde19,Madde20,Madde21,Madde22,Madde23,Madde24,Madde25,Madde26,Madde27,Madde28,Madde29,Madde30,Madde31,Madde32,Madde33,Madde34,Madde35,Madde36,Madde37,Madde38,Madde39,Madde40) VALUES('"+userId+"','"+arrHos[1]+"','"+arrHos[2]+"','"+arrHos[3]+"','"+arrHos[4]+"','"+arrHos[5]+"','"+arrHos[6]+"','"+arrHos[7]+"','"+arrHos[8]+"','"+arrHos[9]+"','"+arrHos[10]+"','"+arrHos[11]+"','"+arrHos[12]+"','"+arrHos[13]+"','"+arrHos[14]+"','"+arrHos[15]+"','"+arrHos[16]+"','"+arrHos[17]+"','"+arrHos[18]+"','"+arrHos[19]+"','"+arrHos[20]+"','"+arrHos[21]+"','"+arrHos[22]+"','"+arrHos[23]+"','"+arrHos[24]+"','"+arrHos[25]+"','"+arrHos[26]+"','"+arrHos[27]+"','"+arrHos[28]+"','"+arrHos[29]+"','"+arrHos[30]+"','"+arrHos[31]+"','"+arrHos[32]+"','"+arrHos[33]+"','"+arrHos[34]+"','"+arrHos[35]+"','"+arrHos[36]+"','"+arrHos[37]+"','"+arrHos[38]+"','"+arrHos[39]+"','"+arrHos[40]+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertYapabilirlik = (userId,arrYap, result) => {
  console.log(arrYap);
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

module.exports = {
  getLiseler,
  getMeslekler,
  getSorular,
  insertComments,
  insertHoslanti,
  insertYapabilirlik,
  insertUsers,
  getLastUserId,
};
