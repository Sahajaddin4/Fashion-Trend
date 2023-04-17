const User=require('../../Database/Model/userModel.js');
const bcrypt=require('bcryptjs');
const signToken = require('./JSONWEBTOKEN/jwtToken.js');

async function Login(req, res) {
      const { user_email, user_password } = req.body;
  
      const user = await User.findOne({
          user_email: user_email
      });
      
      if (user && user.status===1 && bcrypt.compareSync(user_password, user.user_password)) {
          const token = signToken(user);
          res.status(201).json({
              status: 201,
              auth: token,
              user: user.user_name
          });
      } 
      
      else if(user && user.status===0){
        res.json({
            msg: "Verify Account first . Check your gmail to verify"
        })
      }
      else {
          res.json({
              msg: "user not exists!"
          })
      }
  }
  
  module.exports=Login;