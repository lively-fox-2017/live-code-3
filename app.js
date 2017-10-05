const bodyParser = require('body-parser');
const ejs = require('ejs');
const express = require('express');
const app = express();

const index = require("./Routers/index");
const subject = require("./Routers/subject");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use("/", index);

app.listen(2500, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("port 2500 aktif");
  }
})
