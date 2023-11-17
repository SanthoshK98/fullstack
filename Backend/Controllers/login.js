const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const Student = require('../Modal/studentSchema')
app.use(express.json());

exports.createLogin = async (req,res)=>{
    try{
const {email,password} = req.body;
console.log(email,password)
const loggedin = await Student.findOne({email:email})

if(loggedin){
    if(password === loggedin.password){
        const token = jwt.sign({_id:loggedin._id},"Secret Message")

        const studenttoken = await Student.updateOne({email:email},{
            $set:{
                token:token
            }
        })
    
        if(studenttoken){
            return res.json({message:"Token Generated Successfully",studenttoken,loggedin})
        }else{
            return res.json({message:'Token not Generated Successfully'})
        }

    }else{
        return res.json({message:'Invalid Password'})
    }

  


}else{
    return res.json({message:'Invalid User Authentication'})
}

    }catch(err){
        return res.json({message:err.message})
    }
}