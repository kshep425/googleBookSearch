const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./backend/routes");

console.log(routes)

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBookSearch", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
