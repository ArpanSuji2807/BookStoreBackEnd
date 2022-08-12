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

//Router to Place Order
router.put('/placeOrder/true',userAuth,CartController.placeOrder);

//Router to Cancel Order
router.put('/placeOrder/false',userAuth,CartController.cancelOrder);

export default router;