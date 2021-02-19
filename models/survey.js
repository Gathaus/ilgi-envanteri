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

module.exports = {
  getLiseler,
  getMeslekler,
  getSorular,
};
