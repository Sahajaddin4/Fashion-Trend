const User=require('../../Database/Model/userModel.js');
const bcrypt=require('bcryptjs');
const sendGmail = require('./send Mail/sendMail.js');

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
                    const otp_generator=require('otp-generator');
                    const OTP_LENGTH=6;
                    const otp=otp_generator.generate(OTP_LENGTH,{digits:true,lowerCaseAlphabets:false,upperCaseAlphabets:false,
                    specialChars:false
                    })

            const hashedPassword=await bcrypt.hash(user_password,10);
            const hashedOtp=await bcrypt.hash(otp,8);
            const newUser=new User({
               
                user_name:user_name,
                user_email:user_email,
                user_mobile:user_mobile,
                user_password:hashedPassword,
                otp:hashedOtp
            })
          
            sendGmail(user_email,otp);
           await  newUser.save();
            res.status(201).json({status:201,email:user_email});
            //console.log("Account created .Check you mail to verify your account.")
        }catch(err)
        {
            console.log(err);
        
        }
            
        }           
        
   
}

module.exports=register;