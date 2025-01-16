const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const Menu  = require('./model/menu');
 
const person = require("./model/person");

app.use(bodyParser.json()); //stores all object in req.body 
const menur = require("./routes/menuroutes");
app.use("/menu",menur);

const personr = require("./routes/personroutes");
app.use("/person",personr);

app.listen(3000,()=>console.log("running on 3000"));