const express = require('express');
const { isAuthenicatedUser, authorizeRoles } = require('../middleware/auth');
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require('../controllers/order');
const router = express.Router()

router.route("/order/new").post(isAuthenicatedUser, newOrder)
router.route("/admin/order/:id").get(isAuthenicatedUser, authorizeRoles("admin"), getSingleOrder)
router.route("/orders/me").get(isAuthenicatedUser, myOrders)
router.route("/admin/orders").get(isAuthenicatedUser, authorizeRoles("admin"), getAllOrders)
router.route("/admin/order/:id")
    .put(isAuthenicatedUser, authorizeRoles("admin"), updateOrder)
    .delete(isAuthenicatedUser, authorizeRoles("admin"), deleteOrder)
module.exports = router;