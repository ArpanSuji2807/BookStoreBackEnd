import express from "express";
import * as CartController from '../controllers/cart.controller'
import { userAuth } from "../middlewares/auth.middleware";

const router = express.Router()

//Router for Adding Cart items
router.post('/:_id',userAuth,CartController.addCart)

//Router for getting all cart items
router.get('',userAuth,CartController.getCartItems)

///Router to remove book from cart
router.put('/:_id',userAuth,CartController.removeBookFromCart)

export default router;