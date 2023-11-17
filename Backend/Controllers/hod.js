const express = require('express');
const app = express();
const Hod  = require('../Modal/hodSchema');
app.use(express.json());

exports.createHod = async(req,res)=>{

    try{
     const result = new Hod(req.body);

     const resulted = result.save();
     if(resulted){
        return res.json({message:"Hod Registered Successfully"})
     }else{
        return res.json({message:"Hod not Registered Successfully"})
     }

    }catch(err){
        return res.json({message:err.message})
    }
    

}