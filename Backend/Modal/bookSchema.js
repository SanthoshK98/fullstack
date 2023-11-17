const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({

    department:{
        type:String,
        required:true
    },
    bookname:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    Hodid:{
        type:String,
        required:true
    },
    Librarianid:{
        type:String,
        required:true
    }
})

const Book = mongoose.model('bookcollection',bookSchema);

module.exports = Book;
