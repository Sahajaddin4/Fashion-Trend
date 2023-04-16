const jwt=require('jsonwebtoken');
require('dotenv').config();
const secretKey=process.env.secretKey;
function signToken(user)
{
        const payload={
              id:user._id,
              user_email:user.user_email,

            //set expiring time
              expiresIn:'1h' 
        }
       
       return jwt.sign(payload,secretKey); 
}

module.exports=signToken;