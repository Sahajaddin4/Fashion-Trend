const ProductCollection=require('../../Database/Model/productModels.js');

async function getProduct(req,res){
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
    
}

module.exports=getProduct;