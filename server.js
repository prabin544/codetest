const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./config/db');
const cookieSession = require("cookie-session");
const exphbs = require("express-handlebars");
const app = express();

connectDB()

app.use(express.urlencoded({ extened: true }));
app.use(express.static("public"));
//app.set("view engine", "ejs");

//Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// cookie session
app.use(
  cookieSession({
    keys: ["dgsfbgdrhyhwGREHRSTHTRfgf"],
  })
);

// Requiring our routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// server config
const PORT  = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server started listening on port: ${PORT}`);
});
