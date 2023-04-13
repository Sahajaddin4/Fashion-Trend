
const ProductCollection=require('../../Database/Model/productModels.js');



    async function product(req,res){
    const imageFile=req.file;
    const {product_name,product_details,product_price,product_sitename,product_cattegory,product_reviews}=req.body;
    
        
            const productReviews=JSON.parse(product_reviews);
           
            const addProduct=new ProductCollection({
                product_name:product_name,
                product_details:product_details,
                product_price:product_price,
                product_sitename:product_sitename,
                product_cattegory:product_cattegory,
                product_image:imageFile.filename,
                product_reviews:productReviews
            });

           
               
            

          await addProduct.save().then(()=>{
            res.status(201).json({status:201});
            console.log("Image got saved.");
        }).catch(error=>{
            res.status(401).json({status:401});
            console.log(error);
        });
            

    }

module.exports=product;