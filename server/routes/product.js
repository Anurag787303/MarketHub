const express = require('express')
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/product');
const { isAuthenicatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router()

router.route('/products').get(getAllProducts);
router.route('/product/new').post(isAuthenicatedUser, authorizeRoles("admin"), createProduct);
router.route('/product/:id')
    .put(isAuthenicatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenicatedUser, authorizeRoles("admin"), deleteProduct)
    .get(getProductDetails)

module.exports = router