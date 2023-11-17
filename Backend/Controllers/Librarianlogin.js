const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const app = express();
const Librarian = require('../Modal/librarianSchema');
app.use(express.json());

exports.createLibrarianlogin = async (req,res)=>{

try{
 const {email,password} = req.body;

 const libloggedin =  await Librarian.findOne({email:email});
if(libloggedin){

    if(libloggedin.password === password){
        const token = jwt.sign({_id:libloggedin._id},'This is Secret Message');

        const librariantoken = await Librarian.updateOne({email:email},{
            $set:{
                token:token
            }
        })
        if(librariantoken){
            return res.json({message:'Token Generated Successfully',librariantoken})
        }else{
            return res.json({message:'Token Not Generated Successfully'})
        }

    }else{
        return res.json({message:'Password Not Matching'})
    }

}else{
    return res.json({message:'Invalid User Authentication'})
}



}catch(err){
    return res.json({message:err.message})
}

}