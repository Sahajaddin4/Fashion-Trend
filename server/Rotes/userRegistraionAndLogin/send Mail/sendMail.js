const nodemailer=require('nodemailer');

const sendGmail=(user_email,otp)=>{
   
    let transporter=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:"devilshadow8617@gmail.com",
            pass:"geoyktjlzsoidavd"
        }
    });
    
    let mailOptions={
        from:'FashionTrend officials',
        to:user_email,
        subject:'FashionTrends Account Verification😍',
        text:`this is for verify mail..  Your verification  OTP  is : ${otp} `,
      
    }

    transporter.sendMail(mailOptions,(err,info)=>
    {
        if(err) throw err;
        else{
            console.log("Gmail send successfully");
        }
    })
}


module.exports=sendGmail;
