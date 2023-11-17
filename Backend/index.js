const express = require('express');
const result = require('mongoose');
const jwt = require('jsonwebtoken')
const cors = require('cors');
const librarian = require('./Modal/librarianSchema')
const getboookservicecontroller = require('./Controllers/getbookservice');
const searchservicecontroller = require('./Controllers/searchservice');
const bookservicecontroller = require('./Controllers/bookservice');
const hodcontroller = require('./Controllers/hod');
const studentcontroller = require('./Controllers/student');
const bookcontroller = require('./Controllers/book');
const librariancontroller = require('./Controllers/Librarian');
const logincontroller = require('./Controllers/login');
const hodlogincontroller = require('./Controllers/hodlogin');
const librarianlogincontroller = require('./Controllers/Librarianlogin')
const bookdatacontroller = require('./Controllers/getbooks');
const librarianbookcontroller = require('./Controllers/getlibrarianservice')
const Book = require('./Modal/bookSchema')
const {upload,fileError} = require('./Middleware/multer')
const app = express();
require('./Database/db')
const port = 5999;
app.use(express.json());
app.use(cors())
app.use('/Uploads',express.static('Uploads'))

app.post('/registerhod',hodcontroller.createHod);
app.post('/registerstudent',studentcontroller.createStudent);
app.post('/librarianregister',librariancontroller.createLibrarian);
app.post('/studentlogin',logincontroller.createLogin);
app.post('/hodlogin',hodlogincontroller.createHodlogin);
app.post('/librarianlogin',librarianlogincontroller.createLibrarianlogin);

app.post('/postbook',upload.single('image'),fileError,bookcontroller.createBook);
app.get('/getbook',bookdatacontroller.creategetBooks);
app.post('/bookservice',bookservicecontroller.createBookservices);
app.post('/getbookservice',getboookservicecontroller.createGetbook);
app.get('/librarianbookservice',librarianbookcontroller.createLibrarianbookservice)
app.get('/search',searchservicecontroller.createsearchService)

// app.get('/librarian', async(req,res)=>{
//     try{
// const found = await librarian.find()
// if(found){
//     return res.json({message:'Librarian Got Successfully',found})
// }else{
// return res.json({message:'Librarian Details not found'})
// }


//     }catch(err){
//         return res.json({message:err.message})
//     }
// })
app.put('/updatebook', async(req,res)=>{
    try{
  const result = await Book.updateMany({},{
    $set:{
        Librarianid:"RS1011"
    }
  },{multi:true})
if(result){
    return res.json({message:'Book collection updated Successfully'})
}else{
    return res.json({message:'Book collection not updated Successfully'})
}
    }catch(err){
        return res.json({message:err.message})
    }
})




app.listen(port,()=>{
    console.log(`listening on the port ${port}`)
})
