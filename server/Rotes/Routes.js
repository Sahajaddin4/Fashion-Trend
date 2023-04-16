const express=require('express');
const router=new express.Router();
const register = require('./userRegistraionAndLogin/handleRegistration.js');
const product=require('./Product Add/handleAddProduct.js');
const upload=require('./Product Add/imageConfig.js');
const getProduct = require('./Get Product/getProduct.js');
const Login = require('./userRegistraionAndLogin/handleLogin.js');
const analyse = require('./Analyze_Product_reviews/review_analyse.js');

const isAuthenticated = require('./userRegistraionAndLogin/JSONWEBTOKEN/tokenVerify.js');
const resetPassword = require('./userRegistraionAndLogin/handleResettingPass.js');



//product add setup
router.post("/addproduct",isAuthenticated,upload,product );

//Get product from database
router.get('/getproduct',isAuthenticated,getProduct);

//isLoggedIn or not

//Account create
router.post('/userregistration',register);

//Account login
router.post('/userlogin',Login);

//Password restting of user
router.post('/resetpassword',resetPassword);

 //Analyse product review
 router.post('/reviewanalyse',isAuthenticated,analyse)
module.exports=router;