const express = require('express');
const app = express();
const BookService = require('../Modal/bookingserviceSchema');
app.use(express.json())

exports.createBookservices = async (req,res)=>{
    try{

        const bookservices = new BookService(req.body);

        const result = await bookservices.save();
        if(result){
            return res.json({message:'Book services added Successfully'})
        }else{
            return res.json({message:'Book services not added Successfully'})
        }


    }catch(err){
        return res.json({message:err.message})
    }
}
