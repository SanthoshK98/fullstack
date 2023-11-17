const mongoose = require('mongoose');

const bookserviceSchema = mongoose.Schema({

    studentid:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    bookname:{
        type:String,
        required:true
    },
     department:{
            type:String,
            required:true
        },
    
    Hodid:{
        type:String,
        required:true
    },
    librarianid:{
        type:String,
        required:true
    },
    hodapprovestatus:{
        type:Boolean,
        default:false
    },
    librarianapprovestatus:{
        type:Boolean,
        default:false
    }



})


const BookService = mongoose.model('bookservicecollection',bookserviceSchema);

module.exports = BookService;