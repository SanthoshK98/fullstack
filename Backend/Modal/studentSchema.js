const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
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
    studentid:{
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
        required:true,
        unique:true
    },
    token:{
        type:String
    }

})

const Student = mongoose.model('studentregister',studentSchema);
module.exports = Student;