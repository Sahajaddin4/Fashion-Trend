// Require the user model from the database
const User = require("../../../Database/Model/userModel");

const bcrypt=require('bcryptjs');
// Define an asynchronous function to verify OTP
const verifyOtp = async (req, res) => {

  // Get the OTP and user email from the request body
  const { otp, user_email } = req.body;

  // Find a user with the given email in the database
  const user = await User.findOne({ user_email: user_email });
 

  //decode hashed otp from database
   const decodeHashedOtp=await bcrypt.compare(otp,user.otp);
  // Check if the user exists and the OTP matches
  
  if (decodeHashedOtp===true) {
    // Update the user's status to 1 and OTP to 0
    await User.updateOne({ user_email: user_email }, { status: 1  })
      .then(() => {
        // Send a success response to the client
        res.json({ msg:"otp verification done." });
      })
      .catch((err) => {
        // Send an error response to the client if there's an error updating the user
        console.log(err);
        res.status(500).json({ error: "Internal server error." });
      });
  } else if (decodeHashedOtp===false) {
    // Send a response to the client if the OTP is incorrect
    res.json({ msg:"Wrong OTP 😢" });
  } else {
    // Send a response to the client if the user doesn't exist
    res.json({ error: "User not found 😢"});
  }
};

// Export the verifyOtp function
module.exports = verifyOtp;
