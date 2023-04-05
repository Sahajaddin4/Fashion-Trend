const mongoose=require('mongoose');

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
    product_reviews:{
        type:[String],
        required:true
    },
    shopping_site:
    {
        type:String,
        required:true
    }

});

var ProductCollection=mongoose.model('ProductCollection',productSchema);

module.exports= ProductCollection;
