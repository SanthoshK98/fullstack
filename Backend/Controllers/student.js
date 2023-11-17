const express = require('express');
const app = express();
const Student  = require('../Modal/studentSchema');
app.use(express.json());


exports.createStudent = async(req,res)=>{
    try{
const result = await new Student(req.body);

const resulted = result.save();

if(resulted){
    return res.json({message:'Student Registered Successfully'})
}else{
    return res.json({message:'Student not Registered Successfully'})
}


    }catch(err){
        return res.json({message:err.message})
    }

}