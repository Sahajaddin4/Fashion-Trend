const jwt=require('jsonwebtoken');
require('dotenv').config();
const secretKey=process.env.secretKey;

function signToken(user) {
  const payload = {
    id: user._id,
    user_email: user.user_email,
  };

  // Set expiration time
  const expiresIn = '1m';

  return jwt.sign(payload, secretKey, { expiresIn });
}

module.exports = signToken;
