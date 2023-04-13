const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
require('./Database/Connection.js');
const router=require('./Rotes/Routes.js');
const app=express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.use(router);



//end Middle ware
const PORT=process.env.PORT ||5000;

app.use('/uploads',express.static( './uploadedProduct'));

app.listen(PORT,()=>{
    console.log("server is running on "+PORT);
})