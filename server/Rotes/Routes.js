const express=require('express');
const router=new express.Router();
const multer=require('multer');
const ProductCollection=require('../Database/Model/productModels.js');

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
});


//product add setup

router.post("/addproduct",upload.single('product_image'), (req,res)=>{
    const imageFile=req.file;
    const {product_name,product_details,product_price,product_sitename,product_cattegory}=req.body;
    
        
            const addProduct=new ProductCollection({
                product_name:product_name,
                product_details:product_details,
                product_price:product_price,
                product_sitename:product_sitename,
                product_cattegory:product_cattegory,
                product_image:imageFile.filename
            });
    
           addProduct.save().then(()=>{
            res.status(201).json({status:201});
            console.log("Image got saved.");
        }).catch(error=>{
            res.status(401).json({status:401});
            console.log(error);
        });
            

})




//Get product from database
router.get('/getproduct',async(req,res)=>{
    const keyword=(req.query.keyword).substring(0,2);
     const key=new RegExp('^'+keyword);
    try {
    const getProduct=await ProductCollection.find({product_cattegory:{
        $regex:key, $options:"i"
    }});
        res.status(201).json({status:201,getProduct});
    } catch (error) {
        res.send(error);
    }
    
})

module.exports=router;