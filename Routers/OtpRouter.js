const express = require('express');
const otpController = require('../controllers/optControllers');

const router = express.Router();

router.post('/send-otp', otpController.sendOtp);
router.post('/verify-otp', otpController.verifyOtp);
router.post('/resend-otp', otpController.resendOtp);


module.exports = router;
