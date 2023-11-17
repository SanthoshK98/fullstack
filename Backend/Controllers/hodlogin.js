const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const app = express();
const Hod = require('../Modal/hodSchema')
app.use(express.json());

exports.createHodlogin = async (req,res)=>{

    try{
const {email,password} = req.body;

const hodloggedin = await Hod.findOne({email:email})
if(hodloggedin){
    if(hodloggedin.password === password){
        const token = jwt.sign({_id:hodloggedin._id},'Secret Message')
        const hodtoken = await Hod.updateOne({email:email},{
            $set:{
                token:token
            }
        })

        if(hodtoken){
            return res.json({message:'Token Generated Successfully',hodloggedin})
        }else{
            return res.json({message:'Token not  Generated Successfully'})
        }
    }

}else{
    return res.json({message:'Invalid User Authentication'})
}


    }catch(err){
        return res.json({message:err.message})
    }
}