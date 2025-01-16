const express= require("express");
const router = express.Router();
const person = require("../model/person");
const { rawListeners } = require("../model/menu");

router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newperson = new person(data);

        const  response  = await newperson.save();
        console.log("successfully stored ");
        res.status(201).send(response);
    }
    catch(error)
    {
        console.log(error);
    }
})


router.get("/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await person.find({name : id});
        res.send(data);
    }catch(error)
    {
        res.send(error);
    }
})

router.get("/",async (req,res)=>{
    try{
        const data = await person.find();
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
})

router.put("/:id",async(req,res)=>{
    try{
        const id1 = req.params.id;
        const change = req.body;
        const response = await person.findByIdAndUpdate(id1,change,{
            new : true,
            runValidators : true,
        })

        if(!response)
        {
          return  res.send("not found");
        }
        res.send(response);
    }
    catch(error)
    {
        console.log(error);
    }

    
})

router.delete("/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await person.findByIdAndDelete(id);
        if(!response)
            res.send("not found");
        res.send(response);
    }
    catch(error){
        console.log(error);
    }
})
module.exports = router;