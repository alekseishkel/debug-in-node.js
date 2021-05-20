var express = require("express");
var app = express();
var user = require("./controllers/usercontroller");
var game = require("./controllers/gamecontroller");
var db = require("./db");

db.sync()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

app.use(require("body-parser"));
app.use("/api/auth", user);
app.use(require("./middleware/validate-session"));
app.use("/api/game", game);
app.listen(function () {
  console.log("App is listening on 4000");
});
