const mongoose = require('mongoose');

const librarianSchema = mongoose.Schema({
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
        required:true,
        unique:true
    },
    token:{
        type:String
    }

})

const Librarian = mongoose.model('librarianregister',librarianSchema);
module.exports = Librarian;