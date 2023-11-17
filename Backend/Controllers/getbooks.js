const express = require('express');
const app = express();
const Book  = require('../Modal/bookSchema');
app.use(express.json());

exports.creategetBooks = async (req,res)=>{
try{

    const result = await Book.find();
    if(result){
        return res.json({message:'Books Got Successfully',result})
    }else{
        return res.json({message:'Books Not Found'})
    }

}catch(err){
    return res.json({message:err.message})
}

}