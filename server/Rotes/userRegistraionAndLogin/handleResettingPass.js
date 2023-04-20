const User=require('../../Database/Model/userModel.js');
const bcrypt=require('bcryptjs');
const resetPassword=async(req,res)=>
{
    const {user_email}=req.body;

     const user=await User.findOne({user_email:user_email});
     
     
     if(user)
     {
        const hashedPassword=await bcrypt.hash(user_password,10);
          const user=await User.updateOne({user_email:user_email},{user_password:hashedPassword});
         console.log(user);
        
         if(user)
         {
            res.json({msg:"Password is updated successfully, You can login now"});
         }
         else{
            res.json({err:"error 😢"});
         }
        
     }
     else{
        res.json({msg:"User not found ❌! create Account first ."});
     }
}

module.exports=resetPassword;