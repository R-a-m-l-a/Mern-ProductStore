import express from "express";
const router=express.Router();
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
//getting all products
router.get("/", getProducts);
//creating the products
router.post("/", createProduct)
//deleting products
router.delete("/:id",deleteProduct)
//updating products
router.put("/:id",updateProduct)

export default router;