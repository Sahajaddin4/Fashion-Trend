const mongoose=require('mongoose');


//Product schema
const productSchema=new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_details:{
        type:String,
        required:true
    },
    product_image:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    product_sitename:
    {
        type:String,
        required:true
    },
    product_cattegory:{
        type:String,
        required:true
    },
    product_reviews:[{
        rating:{
            type:Number,
            required:true,
            min:1,
            max:5
        },
        comment:{
            type:String,
            required:true
        }
    }]

});



const ProductCollection=mongoose.model('ProductCollection',productSchema);



module.exports= ProductCollection;
