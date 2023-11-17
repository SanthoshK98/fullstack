const multer = require('multer')

const fileError = (err,req,res,next)=>{

    if(err){
        if(req.errObj){
            return res.json({error:true,message:req.errObj})
        }else{
            return res.json({error:true,message:'it allow only up to 2mb'})
        }

    }else{
        next();
    }

}




const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
         cb(null,'Uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})


const  upload = multer({
    storage:Storage,
    fileFilter:(req,file,cb)=>{
if(file.mimetype ==='image/png' ||file.mimetype==='image/jpg' || file.mimetype==='application/pdf' || file.mimetype==='image/jpeg'){
    cb(null,true)
}else{
    req.errObj = 'It allow only jpg,pdf,png,jpeg format'
    cb(true,false)
}

    },

    limits:{
        fieldSize : 1024*1024*100 //it allow only upto 100mb
    }
})


module.exports = {
    upload,fileError
}