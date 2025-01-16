const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/demo2";

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;


db.on('connected',()=>{
    console.log("connected to database");
})
db.on('error',()=>{
    console.log("error in database");
})

module.exports = db;

