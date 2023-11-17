const mongoose = require('mongoose');


const hodSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    employeeid:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    dateofjoining:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
})

const Hod = mongoose.model('hodregister',hodSchema);

module.exports = Hod;