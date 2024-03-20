
  let otps={};
exports.sendOtp = (req,res) =>{
    
      const {phoneNumber} = req.body;

      const  otp = Math.floor(100000 + Math.random( ) * 900000);
       otps[phoneNumber] = otp;
           
       // we will implement hear smtp services of third party api for sending otp to 
       // phone number
       res.json({ success: true, otp: otp});
}

exports.verifyOtp = (req, res) =>{
    
      const {phoneNumber , otp} = req.body;

       if( otps[phoneNumber] == otp){

        res.json({ success: true , msg: "OPT verified successfully"});
       }
       else{
        res.status(400).json({ success: false , msg: "Invalied OTP"});
         
       }
}

exports.resendOtp = (req, res) =>{

    
    const {phoneNumber} = req.body;

    const  otp = Math.floor(100000 + Math.random( ) * 900000);
     otps[phoneNumber] = otp;

     res.json({ success: true, otp: otp});
    
}