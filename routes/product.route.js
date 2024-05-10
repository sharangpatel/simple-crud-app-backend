const express = require("express");
const Product = require("../models/product.model.js")
const router = express.Router();
const {getProducts,getProduct,createProduct,updateProduct, deleteProduct} = require("../controllers/product.controller.js")


//get products 
router.get('/',getProducts);

// get a single product by an id
router.get('/id',getProduct);

//add a new product to the database
router.post('/',createProduct);

//update a product
router.put("/:id",updateProduct);

//delete a product
router.delete('/:id',deleteProduct)


module.exports = router;