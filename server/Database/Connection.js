const mongoose=require('mongoose');
require('dotenv').config();



mongoose.set('strictQuery', true);
const DB_ADMIN=process.env.DB_ADMIN;
const DB_PASSWORD=process.env.DB_PASSWORD;


const url ="mongodb+srv://"+DB_ADMIN+":"+DB_PASSWORD+"@cluster0.maw5tj6.mongodb.net/fashion_trend?retryWrites=true&w=majority";;

const optionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, optionParams).then(() => 
{ console.log('Database connections successful'); }).catch((error)=>{
    console.log(error);
});




