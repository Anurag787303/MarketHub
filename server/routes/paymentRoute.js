const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenicatedUser } = require("../middleware/auth");

router.route("/payment/process").post(isAuthenicatedUser, processPayment);
router.route("/stripeapikey").get(sendStripeApiKey);

module.exports = router;
