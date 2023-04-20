const jwt=require('jsonwebtoken');
require('dotenv').config();
const secretKey=process.env.secretKey;

function signToken(user) {
  const payload = {
    id: user._id,
    user_email: user.user_email,
    exp: Math.floor(Date.now() / 1000) + (60*60)
  };

  // Set expiration time
  //const expiresIn = '1m';

  return jwt.sign(payload, secretKey);
}

module.exports = signToken;
