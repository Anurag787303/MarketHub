const express = require('express')
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser } = require('../controllers/user');
const { isAuthenicatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router()

router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").post(resetPassword)
router.route("/logout").get(logout)
router.route("/me").get(isAuthenicatedUser, getUserDetails)
router.route("/password/update").put(isAuthenicatedUser, updatePassword)
router.route("/me/update").put(isAuthenicatedUser, updateProfile)
router.route("/admin/users").get(isAuthenicatedUser, authorizeRoles("admin"), getAllUser);
router.route("/admin/user/:id").get(isAuthenicatedUser, authorizeRoles("admin"), getSingleUser);

module.exports = router;