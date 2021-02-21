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
const insertHoslanti = (userId,value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14,value15,value16,value17,value18,value19,value20,value21,value22,value23,value24,valueO,value25,value26,value27,value28,value29,value30,value31,value32,value33,value34,value35,value36,value37,value38,value39,value40, result) => {
  
  con.query("INSERT INTO hoslanma (UserId,Madde1,Madde2,Madde3,Madde4,Madde5,Madde6,Madde7,Madde8,Madde9,Madde10,Madde11,Madde12,Madde13,Madde14,Madde15,Madde16,Madde17,Madde18,Madde19,Madde20,Madde21,Madde22,Madde23,Madde24,MaddeOnemli,Madde25,Madde26,Madde27,Madde28,Madde29,Madde30,Madde31,Madde32,Madde33,Madde34,Madde35,Madde36,Madde37,Madde38,Madde39,Madde40) VALUES('"+userId+"','"+value1+"','"+value2+"','"+value3+"','"+value4+"','"+value5+"','"+value6+"','"+value7+"','"+value8+"','"+value9+"','"+value10+"','"+value11+"','"+value12+"','"+value13+"','"+value14+"','"+value15+"','"+value16+"','"+value17+"','"+value18+"','"+value19+"','"+value20+"','"+value21+"','"+value22+"','"+value23+"','"+value24+"','"+valueO+"','"+value25+"','"+value26+"','"+value27+"','"+value28+"','"+value29+"','"+value30+"','"+value31+"','"+value32+"','"+value33+"','"+value34+"','"+value35+"','"+value36+"','"+value37+"','"+value38+"','"+value39+"','"+value40+"') ", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
const insertYapabilirlik = (userId,value1y,value2y,value3y,value4y,value5y,value6y,value7y,value8y,value9y,value10y,value11y,value12y,value13y,value14y,value15y,value16y,value17y,value18y,value19y,value20y,value21y,value22y,value23y,value24y,valueOy,value25y,value26y,value27y,value28y,value29y,value30y,value31y,value32y,value33y,value34y,value35y,value36y,value37y,value38y,value39y,value40y, result) => {
  con.query("INSERT INTO yapabilirlik (UserId,Madde1,Madde2,Madde3,Madde4,Madde5,Madde6,Madde7,Madde8,Madde9,Madde10,Madde11,Madde12,Madde13,Madde14,Madde15,Madde16,Madde17,Madde18,Madde19,Madde20,Madde21,Madde22,Madde23,Madde24,MaddeOnemli,Madde25,Madde26,Madde27,Madde28,Madde29,Madde30,Madde31,Madde32,Madde33,Madde34,Madde35,Madde36,Madde37,Madde38,Madde39,Madde40) VALUES('"+userId+"','"+value1y+"','"+value2y+"','"+value3y+"','"+value4y+"','"+value5y+"','"+value6y+"','"+value7y+"','"+value8y+"','"+value9y+"','"+value10y+"','"+value11y+"','"+value12y+"','"+value13y+"','"+value14y+"','"+value15y+"','"+value16y+"','"+value17y+"','"+value18y+"','"+value19y+"','"+value20y+"','"+value21y+"','"+value22y+"','"+value23y+"','"+value24y+"','"+valueOy+"','"+value25y+"','"+value26y+"','"+value27y+"','"+value28y+"','"+value29y+"','"+value30y+"','"+value31y+"','"+value32y+"','"+value33y+"','"+value34y+"','"+value35y+"','"+value36y+"','"+value37y+"','"+value38y+"','"+value39y+"','"+value40y+"') ", (err, res) => {
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
