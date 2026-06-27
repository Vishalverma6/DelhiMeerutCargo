const express = require("express");
const { uploadPOD, getAllPOD, deletePOD, getPODByLRNumber } = require("../controllers/Pod");
const { isStaff, auth, isAdmin } = require("../middlewares/auth");
const router = express.Router();

// routes for uploading POD
router.post("/upload-pod", auth,isStaff,uploadPOD);


// get all POD
router.get("/get-all-pod",getAllPOD);

// get POD by LR Number
router.post("/get-pod-bylr",getPODByLRNumber);

// route for deleting POD
router.delete("/delete-pod", auth, isAdmin,deletePOD);






module.exports = router;