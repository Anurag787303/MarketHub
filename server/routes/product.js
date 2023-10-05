const express = require('express')
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview } = require('../controllers/product');
const { isAuthenicatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router()

router.route('/products').get(getAllProducts);
router.route('/admin/product/new').post(isAuthenicatedUser, authorizeRoles("admin"), createProduct);
router.route('/admin/product/:id')
    .put(isAuthenicatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenicatedUser, authorizeRoles("admin"), deleteProduct)
router.route("/product/:id").get(getProductDetails);
router.route("/review").put(isAuthenicatedUser, createProductReview)
router.route("/reviews").get(getProductReviews).delete(isAuthenicatedUser, deleteReview)

module.exports = router