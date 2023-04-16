const jwt=require('jsonwebtoken');
require('dotenv').config();

const isAuthenticated=(req,res,next)=>
{
   let token=req.headers['authorization'];
   if(token){
   token=token.split(' ')[1];
   
   jwt.verify(JSON.parse(token),process.env.secretKey,(err,valid)=>
   {
    if(err) 
    {
        
        res.json({msg:err})
   }

    else{
        next();
    }
   })
}
else{
    res.json({msg:'token not found!, Please into in your account first 😢'})
}
}

module.exports=isAuthenticated;