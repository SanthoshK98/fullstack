const express = require('express');
const app = express();
const Book  = require('../Modal/bookSchema');
app.use(express.json());


exports.createBook = async(req,res)=>{
    try{

        const path = `http://localhost:5999/Uploads/${req.file.originalname}`;
        const result = new Book({...req.body,image:path});

        const found = result.save()

        if(found){
            return res.json({message:'Book Added Successfully'})
        }else{
            return res.json({message:'Book not added Successfully'})
        }

    }catch(err){
        return res.json({message:err.message})
    }
}