const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const axios=require('axios');
const ProductCollection=require('./Database/Connection.js');
require('./Database/Connection.js');
const router=require('./Rotes/Routes.js');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(router);
const PORT=process.env.PORT ||5000;



app.listen(PORT,()=>{
    console.log("server is running on "+PORT);
})