const multer=require('multer');
//img storage path
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{

        callback(null,"./uploadedProduct")
    },
        filename:(req,file,callback)=>
        {
            callback(null,`image-${file.originalname}`)
        }
})

//img filter 
const isImage=(req,file,callback)=>{

    if(file.mimetype.startsWith("image"))
    {
        callback(null,true);
    }
    else{
        callback(new Error("Only Image is allowed"));
    }
}

const upload=multer({
    storage:storage,
    fileFilter:isImage
}).single('product_image');

module.exports=upload;