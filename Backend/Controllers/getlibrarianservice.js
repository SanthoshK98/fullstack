const express = require('express');
const app = express();
const Librarianbook = require('../Modal/bookingserviceSchema')
app.use(express.json())

exports.createLibrarianbookservice = async(req,res)=>{
    try{
const result = await Librarianbook.find();
if(result){
    return res.json({message:'All bookservices got Successfully',result})
}else{
    return res.json({message:'All bookservices  not got Successfully'})
}

    }catch(err){
        return res.json({message:err.message})
    }
}
