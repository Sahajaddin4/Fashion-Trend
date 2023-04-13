const User=require('../../Database/Model/userModel.js');
//const passport=require('passport');
const bcrypt=require('bcryptjs');

async function register(req,res)
{
    const {user_name,user_email,user_mobile,user_password}=req.body;
       
   
     const user=await User.findOne({user_email:user_email});
      
        if(user)
            {
                res.json({msg:'User Already Exist!'});
            }
        
        else{

                try{
            const hashedPassword=await bcrypt.hash(user_password,10);
            const newUser=new User({
               
                user_name:user_name,
                user_email:user_email,
                user_mobile:user_mobile,
                user_password:hashedPassword,
               
            })
            await  newUser.save();
            res.status(201).json({status:201});
            console.log("Account created")
        }catch(err)
        {
            console.log(err);
        
        }
            
        }           
        
   
}

module.exports=register;