const mongoose  = require("mongoose");

const menu = new mongoose.Schema(
    {
    name : {
        type : String,
        require: true
    }
    ,
    price : {
        type : Number,
        require:true
    },

    qty :{
        type : Number,
    }

}
);


const Menu  = mongoose.model('Menu',menu);

module.exports = Menu;