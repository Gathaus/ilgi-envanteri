const path = require("path");
const session = require("express-session");

const getLoginPage = async (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "loginPage.html"));
};

const loginHandle = async (req, res, next) => {
  try {
    await credentialsCheck(req.body.username, req.body.password);
    req.session.logged = true;
    return res.redirect("/admin");
  } catch (err) {
    console.error(err);
    return res.redirect("/login");
  }
};

const logoutHandle = async (req, res, next) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};

const checkLoggedIn = (req, res, next) => {
  if (req.session.logged) next();
  else {
    return res.redirect("/login");
  }
};

//TODO connect user credential to database with bcrypt
const credentialsCheck = (user, password) => {
  return new Promise((resolve, reject) => {
    if (user === "admin") {
      if (password === process.env.ADM_PASS) {
        resolve(true);
      } else {
        reject("wrong pass");
      }
    } else {
      reject("Wrong username");
    }
  });
};
module.exports = { getLoginPage, loginHandle, credentialsCheck, checkLoggedIn,logoutHandle };
