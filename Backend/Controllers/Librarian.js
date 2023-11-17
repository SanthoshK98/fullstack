const express = require('express');
const app = express();
const Librarian  = require('../Modal/librarianSchema');
app.use(express.json());

exports.createLibrarian = async(req,res)=>{

    try{
     const result = new Librarian(req.body);

     const resulted = result.save();
     if(resulted){
        return res.json({message:"Librarian Registered Successfully"})
     }else{
        return res.json({message:"Librarian not Registered Successfully"})
     }

    }catch(err){
        return res.json({message:err.message})
    }

}