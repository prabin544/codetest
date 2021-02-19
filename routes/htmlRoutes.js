const path = require("path");
const authenticateUser = require("../middlewares/authenticateUser")

module.exports = function(app) {
    // route for serving frontend files
    app
    .get("/", (req, res) => {
    res.render("index",{
        style: 'index.css'
    });
    })
    .get("/login", (req, res) => {
    res.render("login",{
        style: 'index.css'
    });
    })
    .get("/register", (req, res) => {
    res.render("register", {
        style: 'index.css'
    });
    })

    .get("/home", authenticateUser, (req, res) => {
    res.render("home", { 
        user: req.session.user,
        style: 'home.css'
    });
    })
    //logout
    .get("/logout", authenticateUser, (req, res) => {
    req.session.user = null;
    res.redirect("/");
  });
};

