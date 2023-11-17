const mongoose = require('mongoose');
const url = "mongodb+srv://dinakarswe:library1234@cluster0.inr4i6b.mongodb.net/?retryWrites=true&w=majority";

const connection = async()=>{
    try{
        const result = await mongoose.connect(url);

        if(result){
            console.log('Database Connection Established Successfully')
        }else{
            console.log('Database connection was not established successfully')
        }
    }catch(err){
        console.log(err.message)
    }

  

}

connection();
