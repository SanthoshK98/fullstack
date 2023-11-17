const express = require('express');
const app = express();
const Getbook = require('../Modal/bookingserviceSchema');
app.use(express.json());


exports.createGetbook =  async (req,res)=>{
try{
    

    const bookdata =  await Getbook.find({Hodid:req.body.Hodid});
    if(bookdata){
        return res.json({message:'All services got successfully',bookdata})
    }else{
        return res.json({message:'All services got successfully'})
    }

}catch(err){
    return res.json({message:err.message})
}
}

