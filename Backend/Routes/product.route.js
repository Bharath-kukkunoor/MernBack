const express = require("express");
const Product=require("../Models/product.model.js")
const router=express.Router();
const {getProducts,getProduct,addProduct,UpdateProduct,deleteProduct} = require("../Controllers/product.controller.js");



router.get('/',getProducts)

router.get('/:id', getProduct )

router.post('/', addProduct )

router.put('/:id', UpdateProduct )

router.delete('/:id', deleteProduct )


module.exports=router;
