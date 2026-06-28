const express = require("express");
const { signup, login, sendOTP, changePassword, logout } = require("../controllers/Auth");
const { auth } = require("../middlewares/auth");
const { resetPassword, resetPasswordToken } = require("../controllers/ResetPassword");
const router = express.Router();


// routes for signup
router.post("/signup",signup);


// routes for login
router.post("/login",login);

// routes for sending OTP to the user email
router.post("/send-otp", sendOTP);

router.post("/logout",logout)

// routes for changing the password 
router.post("/change-password",auth, changePassword);

// reset Paasword
// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// routes for reset password
router.post("/reset-password", resetPassword);


// export the router for use in the main application
module.exports = router;