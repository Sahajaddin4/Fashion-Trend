const express=require('express');
const router=new express.Router();
const register = require('./userRegistraionAndLogin/handleRegistration.js');
const product=require('./Product Add/handleAddProduct.js');
const upload=require('./Product Add/imageConfig.js');
const getProduct = require('./Get Product/getProduct.js');
const Login = require('./userRegistraionAndLogin/handleLogin.js');


//product add setup
router.post("/addproduct",upload,product );

//Get product from database
router.get('/getproduct',getProduct);



router.post('/userregistration',register);

//Account login
router.post('/userlogin',Login);
 //
 router.get('/loggedin',(req,res)=>
 {
    res.redirect('/AfterLogin');
 })

module.exports=router;