const User=require('../../Database/Model/userModel.js');
const bcrypt=require('bcryptjs');

async function Login(req,res)
{
        const {user_email,user_password}=req.body;

          const user=User.findOne({user_email:user_email,user_password:bcrypt.compare(user_password,user_password,(err,result)=>{
                if(err) {
                        console.log(err);
                        res.status(401).json({status:401});
                };
          })}) 

          if(user)
          {
                res.status(201).json({status:201});
          }
          else{
                res.json({msg:"user not exists!"})
          }
        }


module.exports=Login;