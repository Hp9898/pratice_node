const express = require("express");
const router= express.Router();

const Menu  = require('../model/menu');


router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const newmenu = new Menu(data);

        const response = newmenu.save();
        res.send(response);
    }
    catch(error)
    {
        console.log(error);
    }
})

router.get('/',async(req,res)=>{
    try{
        const data = await Menu.find();
        res.send(data);
    }
    catch(error)
    {
        console.log(error);
    }
})

module.exports = router;
