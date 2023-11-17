const express = require('express');
const app = express()
const Book = require('../Modal/bookSchema');
app.use(express.json())


exports.createsearchService = async(req,res)=>{

    const data = req.query.search
    try{

        const out = await Book.find({bookname:{$regex:data, $options:'i'}})

        if(out){
return res.json({message:'Serach Results Found Successfully',out})
        }else{
            return res.json({message:'Serach Results  Not Found'})
        }

    }catch(err){
        return res.json({message:err.message})
    }
}