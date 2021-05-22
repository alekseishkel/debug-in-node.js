const express = require("express");
const app = express();
const user = require("./controllers/usercontroller");
const game = require("./controllers/gamecontroller");
const db = require("./db");

db.sync();

app.use(require("body-parser").json());
app.use("/api/auth", user);
app.use(require("./middleware/validate-session"));
app.use("/api/game", game);
app.listen(4000, () => {
  console.log("App is listening on 4000");
});
