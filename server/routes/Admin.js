const express = require("express");
const { pendingStaff, pendingClient, approveUser } = require("../controllers/Admin");
const { auth } = require("../middlewares/auth");
const router = express.Router();

// routes for pending staff
router.get("/pending-staff", pendingStaff);


// routes for pending Client 
router.get("/pending-client",auth,pendingClient);

// routes to approve User
router.post("/approve-user", auth,approveUser);


module.exports = router;
